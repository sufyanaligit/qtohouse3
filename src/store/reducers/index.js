import { combineReducers } from 'redux';
import projects from './project.reducers';
import userInfo from './userInfo.reducers';

const rootReducer = combineReducers({
  projects,
  userInfo,
});

export default rootReducer;
