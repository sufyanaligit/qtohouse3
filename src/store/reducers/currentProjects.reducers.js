import { fromJS } from "immutable";
import ACTIONS from "../qto.constants";

export default (state = fromJS({}), action) => {
  switch (action.type) {
    case ACTIONS.GET_CURRENT_PROJECTS_LIST.PENDING: {
      return state.set("loading", action.status === "LOADING" ? true : false);
    }
    case ACTIONS.GET_CURRENT_PROJECTS_LIST.SUCCESS: {
      return state.set("loading", false).set("data", action.data);
    }
    default:
      return state;
  }
};
