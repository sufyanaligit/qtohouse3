import { asyncActionType } from "../utils/reduxActions";

export const FILTER_ACTIONS = {
  GET_CURRENT_PROJECTS_LIST: asyncActionType("[QTO]GET_CURRENT_PROJECTS_LIST"),
  GET_CURRENT_PROJECTS_LIST_BEGIN: "[QTO]GET_CURRENT_PROJECTS_LIST_BEGIN",
};

// Status types
export const FETCH_STATUS = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export default {
  ...FILTER_ACTIONS,
};
