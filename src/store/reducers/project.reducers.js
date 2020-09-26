import { fromJS } from 'immutable';
import ACTIONS from '../qto.constants';

export default (state = fromJS({}), action) => {
  switch (action.type) {
    case ACTIONS.GET_CURRENT_PROJECTS_LIST.PENDING: {
      return state.set('loading', action.status === 'LOADING' ? true : false);
    }
    case ACTIONS.GET_CURRENT_PROJECTS_LIST.SUCCESS: {
      return state.set('loading', false).set('data', action.data);
    }
    case ACTIONS.GET_CURRENT_PROJECTS_LIST.ERROR: {
      return state.set('loading', false);
    }
    case ACTIONS.GET_CURRENT_PROJECTS_DETAILS.PENDING: {
      return state.set('loading', action.status === 'LOADING' ? true : false);
    }
    case ACTIONS.GET_CURRENT_PROJECTS_DETAILS.SUCCESS: {
      return state.set('loading', false).set('projectDetails', action.data);
    }

    default:
      return state;
  }
};
