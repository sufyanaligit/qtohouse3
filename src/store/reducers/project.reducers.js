import { fromJS, List } from 'immutable';
import ACTIONS, {
  DEFAULT_SEARCH_CURRENT_CRITERIA,
  DEFAULT_SEARCH_FEATURED_CRITERIA,
  DEFAULT_SEARCH_ALL_CRITERIA,
} from '../qto.constants';
import { getSelectedTabValue } from '../../utils/utils';

export default (
  state = fromJS({
    currentProjects: {
      searchCriteria: DEFAULT_SEARCH_CURRENT_CRITERIA,
    },
    allProjects: { searchCriteria: DEFAULT_SEARCH_ALL_CRITERIA },
    featuredProjects: {
      searchCriteria: DEFAULT_SEARCH_FEATURED_CRITERIA,
    },
    loading: false,
    isLoginModal: false,
    pendingApprovals: {},
    selectedTab: 'currentProjects',
  }),
  action
) => {
  switch (action.type) {
    case ACTIONS.GET_CURRENT_PROJECTS_LIST.PENDING: {
      return state.setIn(['currentProjects', 'loading'], true);
    }
    case ACTIONS.GET_CURRENT_PROJECTS_LIST.SUCCESS: {
      const currentProjectsCount = action.data.TotalRecords;
      return state
        .setIn(['currentProjects', 'loading'], false)
        .setIn(['currentProjects', 'data'], action.data.ProjectList)
        .setIn(
          ['currentProjects', 'currentProjectsCount'],
          currentProjectsCount
        );
    }
    case ACTIONS.GET_FEATURED_PROJECTS_LIST.PENDING: {
      return state.setIn(['featuredProjects', 'loading'], true);
    }
    case ACTIONS.GET_FEATURED_PROJECTS_LIST.SUCCESS: {
      const featuredProjectsCount = action.data.TotalRecords;
      return state
        .setIn(['featuredProjects', 'loading'], false)
        .setIn(['featuredProjects', 'data'], action.data.ProjectList)
        .setIn(
          ['featuredProjects', 'featuredProjectsCount'],
          featuredProjectsCount
        );
    }
    case ACTIONS.GET_ALL_PROJECTS_LIST: {
      const payload = state.getIn(['allProjects', 'searchCriteria']);
      const currentProjects = state.getIn(['currentProjects', 'data']) || [];
      const featuredProjects = state.getIn(['featuredProjects', 'data']) || [];
      const allProjects = fromJS(currentProjects.concat(featuredProjects));
      const filteredProjects = allProjects.filter((item, index) => {
        return item
          .get('NME')
          .toLowerCase()
          .indexOf(payload.get('projectName').toLowerCase()) !== -1
          ? item.get('NME')
          : '' &&
            item
              .get('LOC')
              .toLowerCase()
              .indexOf(payload.get('location').toLowerCase()) !== -1
          ? item.get('LOC')
          : '';
      });

      return state
        .setIn(['allProjects', 'loading'], false)
        .setIn(['allProjects', 'data'], filteredProjects.toJS())
        .setIn(['allProjects', 'allProjectsCount'], allProjects.size);
    }

    case ACTIONS.GET_CURRENT_PROJECTS_LIST.ERROR: {
      return state
        .setIn(['currentProjects', 'loading'], false)
        .setIn(['applicationErrors', 'error'], true)
        .setIn(['applicationErrors', 'message'], action.error.message);
    }
    case ACTIONS.GET_CURRENT_PROJECTS_DETAILS.PENDING: {
      return state.setIn(
        ['currentProjects', 'loading'],
        action.status === 'LOADING' ? true : false
      );
    }
    case ACTIONS.GET_CURRENT_PROJECTS_DETAILS.SUCCESS: {
      return state
        .setIn(['currentProjects', 'loading'], false)
        .setIn(['currentProjects', 'projectDetails'], action.data);
    }
    case ACTIONS.ADD_PROJECT.PENDING: {
      return state.set('loading', true);
    }
    case ACTIONS.ADD_PROJECT.SUCCESS: {
      return state.set('loading', false);
    }

    case ACTIONS.GET_USER_PENDING_APPROVAL.PENDING: {
      return state.setIn(['pendingApprovals', 'loading'], true);
    }
    case ACTIONS.GET_USER_PENDING_APPROVAL.SUCCESS: {
      const { data } = action;
      const pendingApprovalList = data.filter(
        (item) => item.ADMN_IND === false
      );
      return state
        .setIn(['pendingApprovals', 'loading'], false)
        .setIn(['pendingApprovals', 'pendingUserList'], pendingApprovalList);
    }
    case ACTIONS.GET_USER_PENDING_APPROVAL.ERROR: {
      return state
        .setIn(['pendingApprovals', 'loading'], false)
        .setIn(['applicationErrors', 'error'], true)
        .setIn(['applicationErrors', 'message'], action.error);
    }

    case ACTIONS.APPROVE_PENDING_STATUS.PENDING: {
      return state.setIn(['pendingApprovals', 'loading'], true);
    }
    case ACTIONS.APPROVE_PENDING_STATUS.SUCCESS: {
      const { data } = action;
      const list = fromJS(state.getIn(['pendingApprovals', 'pendingUserList']));

      const pendingApprovalList = list.update(
        list.findIndex((item) => {
          return (
            item.get('ADMN_IND') === false &&
            item.get('APPR_IND') === false &&
            item.get('LOGN_ID') === data.loginId
          );
        }),
        (item) => {
          return item
            .set('APPR_IND', true)
            .set('ACT_IND', !!data.activeIndicator)
            .set('IS_PNDG_APPR', true);
        }
      );

      return state
        .setIn(['pendingApprovals', 'loading'], false)
        .setIn(
          ['pendingApprovals', 'pendingUserList'],
          pendingApprovalList.toJS()
        );
    }
    case ACTIONS.APPROVE_PENDING_STATUS.ERROR: {
      return state
        .setIn(['pendingApprovals', 'loading'], false)
        .setIn(['applicationErrors', 'error'], true)
        .setIn(['applicationErrors', 'message'], action.error);
    }
    case ACTIONS.SET_SEARCH_PAYLOAD: {
      const { payload } = action;
      return state.setIn(
        [payload.selectedTab, 'searchCriteria'],
        fromJS(payload.searchPayload)
      );
    }
    case ACTIONS.SET_SELECTED_TAB: {
      const { payload } = action;
      return state.set('selectedTab', payload);
    }
    case ACTIONS.PERFORM_LAZY_LOAD_SEARCH.PENDING: {
      const { selectedTab } = action;
      return state.setIn([selectedTab, 'loading'], true);
    }
    case ACTIONS.PERFORM_LAZY_LOAD_SEARCH.SUCCESS: {
      const { data, payload, selectedTab } = action;
      const totalCount = data.TotalRecords;
      const previousCurrentProjects =
        state.getIn([selectedTab, 'data']) || List();
      const currentProjects = previousCurrentProjects.concat(data.ProjectList);
      return state
        .setIn([selectedTab, 'loading'], false)
        .setIn([selectedTab, 'data'], currentProjects)
        .setIn([selectedTab, 'searchCriteria'], fromJS(payload))
        .setIn([selectedTab, `${selectedTab}Count`], totalCount);
    }
    case ACTIONS.PERFORM_LAZY_LOAD_SEARCH.ERROR: {
      const { error, selectedTab } = action;
      return state
        .setIn([selectedTab, 'loading'], false)
        .setIn(['applicationErrors', 'error'], true)
        .setIn(['applicationErrors', 'message'], error.message);
    }

    case ACTIONS.RESET_SEARCH_PAYLOAD: {
      const { selectedTab } = action;
      const currentTab = getSelectedTabValue(selectedTab);
      const searchPayload = DEFAULT_SEARCH_CURRENT_CRITERIA;
      searchPayload.project_type = currentTab;
      return state.setIn(
        [selectedTab, 'searchCriteria'],
        fromJS(searchPayload)
      );
    }
    default:
      return state;
  }
};
