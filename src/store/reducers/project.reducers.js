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
        .setIn(['currentProjects', 'data'], currentProjects);
    }
    case ACTIONS.GET_FEATURED_PROJECTS_LIST.SUCCESS: {
      const featureProjects = action.data.filter(
        (item) => item.PRJT_TYPE.toLowerCase() === PROJECT_TYPE.FEATURED
      );
      return state
        .setIn(['featureProjects', 'loading'], false)
        .setIn(['featureProjects', 'data'], featureProjects);
    }
    case ACTIONS.GET_ALL_PROJECTS_LIST.SUCCESS: {
      return state
        .setIn(['allProjects', 'loading'], false)
        .setIn(['allProjects', 'data'], action.data);
    }

    case ACTIONS.GET_CURRENT_PROJECTS_LIST.ERROR: {
      return state.setIn(['currentProjects', 'loading'], false);
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
      return state.set('isLoginModal', action.payload);
    }
    case ACTIONS.VALIDATE_LOGIN.PENDING: {
      return state.setIn(['userInfo', 'loading'], true);
    }
    case ACTIONS.VALIDATE_LOGIN.SUCCESS: {
      return state
        .setIn(['userInfo', 'loading'], false)
        .setIn(
          ['userInfo', 'isLoggedIn'],
          action.data === 'True' ? true : false
        )
        .set('isLoginModal', false);
    }
    case ACTIONS.VALIDATE_LOGIN.ERROR: {
      return state
        .setIn(['userInfo', 'loading'], false)
        .setIn(['userInfo', 'error'], true)
        .set('isLoginModal', false);
    }
    default:
      return state;
  }
};
