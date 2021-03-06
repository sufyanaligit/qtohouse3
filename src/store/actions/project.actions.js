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

export const getFeaturedProjectsList = {
  pending: {
    type: ACTIONS.GET_FEATURED_PROJECTS_LIST.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data) => ({
    type: ACTIONS.GET_FEATURED_PROJECTS_LIST.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error) => ({
    type: ACTIONS.GET_FEATURED_PROJECTS_LIST.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const getAllProjectsList = () => {
  return {
    type: ACTIONS.GET_ALL_PROJECTS_LIST,
  };
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
export const validateLogin = {
  pending: {
    type: ACTIONS.VALIDATE_LOGIN.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data) => ({
    type: ACTIONS.VALIDATE_LOGIN.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error) => ({
    type: ACTIONS.VALIDATE_LOGIN.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};
export const validateUserSession = {
  pending: {
    type: ACTIONS.VALIDATE_USER_SESSION.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data) => ({
    type: ACTIONS.VALIDATE_USER_SESSION.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error) => ({
    type: ACTIONS.VALIDATE_USER_SESSION.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};
export const getPendingUserApprovals = {
  pending: {
    type: ACTIONS.GET_USER_PENDING_APPROVAL.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data) => ({
    type: ACTIONS.GET_USER_PENDING_APPROVAL.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error) => ({
    type: ACTIONS.GET_USER_PENDING_APPROVAL.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};
export const approvePendingStatus = {
  pending: {
    type: ACTIONS.APPROVE_PENDING_STATUS.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data) => ({
    type: ACTIONS.APPROVE_PENDING_STATUS.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error) => ({
    type: ACTIONS.APPROVE_PENDING_STATUS.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const performLazyLoadSearch = {
  pending: (selectedTab) => ({
    type: ACTIONS.PERFORM_LAZY_LOAD_SEARCH.PENDING,
    selectedTab,
    status: FETCH_STATUS.LOADING,
  }),
  success: (data, payload, selectedTab) => ({
    type: ACTIONS.PERFORM_LAZY_LOAD_SEARCH.SUCCESS,
    data,
    payload,
    selectedTab,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error, selectedTab) => ({
    type: ACTIONS.PERFORM_LAZY_LOAD_SEARCH.ERROR,
    error,
    selectedTab,
    status: FETCH_STATUS.ERROR,
  }),
};

export const getCurrentProjectsBegin = (searchPayload) => {
  return {
    type: ACTIONS.GET_CURRENT_PROJECTS_LIST_BEGIN,
    payload: searchPayload,
  };
};
export const performLazyLoadSearchBegin = (searchPayload) => {
  return {
    type: ACTIONS.PERFORM_LAZY_LOAD_SEARCH_BEGIN,
    payload: searchPayload,
  };
};

export const getFeatureProjectsBegin = (searchPayload) => {
  return {
    type: ACTIONS.GET_FEATURED_PROJECTS_LIST_BEGIN,
    payload: searchPayload,
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

export const setIsLoginState = (loginState) => {
  return {
    type: ACTIONS.SET_LOGIN_STATE_BEGIN,
    payload: loginState,
  };
};

export const clearUserSession = (userId) => {
  return {
    type: ACTIONS.CLEAR_USER_SESSION,
    payload: userId,
  };
};

export const validateLoginCredentialsBegin = (userName, password) => {
  return {
    type: ACTIONS.VALIDATE_LOGIN_BEGIN,
    payload: { userName, password },
  };
};

export const getLoggedInUserInfoBegin = (userId) => {
  return {
    type: ACTIONS.VALIDATE_USER_SESSION_BEGIN,
    payload: { userId },
  };
};

export const getUserPendingApprovalListBegin = () => {
  return {
    type: ACTIONS.GET_USER_PENDING_APPROVAL_BEGIN,
  };
};

export const approvePendingStatusBegin = (data) => {
  return {
    type: ACTIONS.APPROVE_PENDING_STATUS_BEGIN,
    payload: data,
  };
};

export const setSearchPayload = (searchPayload, selectedTab) => {
  return {
    type: ACTIONS.SET_SEARCH_PAYLOAD,
    payload: { searchPayload, selectedTab },
  };
};

export const setSelectedTab = (selectedTab) => {
  return {
    type: ACTIONS.SET_SELECTED_TAB,
    payload: selectedTab,
  };
};

export const resetSearchPayload = (selectedTab) => {
  return {
    type: ACTIONS.RESET_SEARCH_PAYLOAD,
    selectedTab,
  };
};

export const uploadImage = (data) => {
  return {
    type: ACTIONS.UPLOAD_IMAGE,
    data,
  };
};
