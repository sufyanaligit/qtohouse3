import ACTIONS, { FETCH_STATUS } from '../qto.constants';

export const getCurrentProjectsList = {
  pending: {
    type: ACTIONS.GET_CURRENT_PROJECTS_LIST.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data) => ({
    type: ACTIONS.GET_CURRENT_PROJECTS_LIST.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error) => ({
    type: ACTIONS.GET_CURRENT_PROJECTS_LIST.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

//Project Details
export const getCurrentProjectsDetails = {
  pending: {
    type: ACTIONS.GET_CURRENT_PROJECTS_DETAILS.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data) => ({
    type: ACTIONS.GET_CURRENT_PROJECTS_DETAILS.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error) => ({
    type: ACTIONS.GET_CURRENT_PROJECTS_DETAILS.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};
export const addProject = {
  pending: {
    type: ACTIONS.ADD_PROJECT.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data) => ({
    type: ACTIONS.ADD_PROJECT.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error) => ({
    type: ACTIONS.ADD_PROJECT.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const getCurrentProjectsListBegin = () => {
  return {
    type: ACTIONS.GET_CURRENT_PROJECTS_LIST_BEGIN,
  };
};
export const getCurrentProjectDetailsBegin = (id) => {
  return {
    type: ACTIONS.GET_CURRENT_PROJECTS_DETAILS_BEGIN,
    payload: id,
  };
};

export const addProjectBegin = (project) => {
  return {
    type: ACTIONS.ADD_PROJECT_BEGIN,
    payload: project,
  };
};
