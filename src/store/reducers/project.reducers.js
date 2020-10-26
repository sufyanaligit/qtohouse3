import { fromJS } from 'immutable';
import ACTIONS, { PROJECT_TYPE } from '../qto.constants';

export default (
  state = fromJS({
    currentProjects: {},
    allProjects: {},
    featureProjects: {},
    loading: false,
    isLoginModal: false,
    userInfo: {},
    pendingApprovals: {},
  }),
  action
) => {
  switch (action.type) {
    case ACTIONS.GET_CURRENT_PROJECTS_LIST.PENDING: {
      return state.setIn(
        ['currentProjects', 'loading'],
        action.status === 'LOADING' ? true : false
      );
    }
    case ACTIONS.GET_CURRENT_PROJECTS_LIST.SUCCESS: {
      const currentProjects = action.data.filter(
        (item) => item.PRJT_TYPE.toLowerCase() === PROJECT_TYPE.CURRENT
      );

      return state
        .setIn(['currentProjects', 'loading'], false)
        .setIn(['currentProjects', 'data'], currentProjects)
        .setIn(
          ['currentProjects', 'currentProjectsCount'],
          currentProjects.length
        );
    }
    case ACTIONS.GET_FEATURED_PROJECTS_LIST.SUCCESS: {
      const featureProjects = action.data.filter(
        (item) => item.PRJT_TYPE.toLowerCase() === PROJECT_TYPE.FEATURED
      );
      return state
        .setIn(['featureProjects', 'loading'], false)
        .setIn(['featureProjects', 'data'], featureProjects)
        .setIn(
          ['featureProjects', 'featureProjectsCount'],
          featureProjects.length
        );
    }
    case ACTIONS.GET_ALL_PROJECTS_LIST.SUCCESS: {
      return state
        .setIn(['allProjects', 'loading'], false)
        .setIn(['allProjects', 'data'], action.data);
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
    case ACTIONS.SET_LOGIN_STATE_BEGIN: {
      return state
        .set('isLoginModal', action.payload)
        .setIn(['userInfo', 'error'], false);
    }
    case ACTIONS.VALIDATE_LOGIN.PENDING: {
      return state.setIn(['userInfo', 'loading'], true);
    }
    case ACTIONS.VALIDATE_LOGIN.SUCCESS: {
      const { data } = action;
      localStorage.setItem('QTOUserId', data.LoginID);
      return state
        .setIn(['userInfo', 'loading'], false)
        .setIn(
          ['userInfo', 'isLoggedIn'],
          data.MessageCode === 1 ? true : false
        )
        .setIn(['userInfo', 'isRoleAdmin'], data.AdminInd)
        .setIn(['userInfo', 'userName'], data.LoginID)
        .setIn(['userInfo', 'error'], false)
        .set('isLoginModal', false);
    }
    case ACTIONS.VALIDATE_LOGIN.ERROR: {
      const { error } = action;
      localStorage.setItem('QTOUserToken', '');
      return state
        .setIn(['userInfo', 'loading'], false)
        .setIn(['userInfo', 'error'], true)
        .setIn(
          ['userInfo', 'isLoggedIn'],
          error.MessageCode === 1 ? true : false
        )
        .setIn(['applicationErrors', 'error'], true)
        .setIn(['applicationErrors', 'message'], error.message);
    }
    case ACTIONS.VALIDATE_USER_SESSION.PENDING: {
      return state.setIn(['userInfo', 'loading'], true);
    }
    case ACTIONS.VALIDATE_USER_SESSION.SUCCESS: {
      const { data } = action;
      return state
        .setIn(['userInfo', 'loading'], false)
        .setIn(['userInfo', 'isLoggedIn'], true)
        .setIn(['userInfo', 'isRoleAdmin'], data.ADMN_IND)
        .setIn(['userInfo', 'userName'], data.LOGN_ID)
        .setIn(['userInfo', 'error'], false)
        .setIn(['userInfo', 'loggedInUserDetails'], data)
        .set('isLoginModal', false);
    }
    case ACTIONS.VALIDATE_USER_SESSION.ERROR: {
      return state
        .setIn(['userInfo', 'loading'], false)
        .setIn(['userInfo', 'isLoggedIn'], false)
        .setIn(['userInfo', 'error'], true)
        .set('isLoginModal', false);
    }
    case ACTIONS.CLEAR_USER_SESSION: {
      localStorage.removeItem('QTOUserId');
      return state.set('userInfo', {});
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
            .set('ACT_IND', !!data.approveIndicator)
            .set('IS_PNDG_APPR', !!data.approveIndicator);
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
    default:
      return state;
  }
};
