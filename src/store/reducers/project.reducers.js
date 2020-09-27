import { fromJS } from 'immutable';
import ACTIONS, { PROJECT_TYPE } from '../qto.constants';

export default (
  state = fromJS({ currentProjects: {}, allProjects: {}, featureProjects: {} }),
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
      return state.set('loading', action.status === 'LOADING' ? true : false);
    }
    case ACTIONS.ADD_PROJECT.SUCCESS: {
      return state.set('loading', false);
    }
    default:
      return state;
  }
};
