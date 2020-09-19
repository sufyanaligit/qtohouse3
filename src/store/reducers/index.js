import { combineReducers } from "redux";
import projects from "./project.reducers";
import qtoData from "./qtoData";

const rootReducer = combineReducers({
  projects,
  qtoData,
});

export default rootReducer;
