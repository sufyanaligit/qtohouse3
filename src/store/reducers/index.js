import { combineReducers } from "redux";
import currentProjects from "./currentProjects.reducers";
import qtoData from "./qtoData";

const rootReducer = combineReducers({
  currentProjects,
  qtoData,
});

export default rootReducer;
