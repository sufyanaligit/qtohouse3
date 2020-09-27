import { all, call, put, takeEvery } from 'redux-saga/effects';
import ACTIONS from '../qto.constants';
import { projectActions } from '../actions';
import API from '../services';

//const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
function* getCurrentProjects() {
  try {
    yield put(projectActions.getCurrentProjectsList.pending);
    const response = yield call(API.getCurrentProjects);
    yield put(projectActions.getCurrentProjectsList.success(response.data));
  } catch (error) {
    yield put(projectActions.getCurrentProjectsList.error(error));
  }
}

function* getCurrentProjectDetails(data) {
  try {
    yield put(projectActions.getCurrentProjectsDetails.pending);
    const response = yield call(API.getCurrentProjectDetails, data.payload);
    yield put(projectActions.getCurrentProjectsDetails.success(response.data));
  } catch (error) {
    yield put(projectActions.getCurrentProjectsDetails.error(error));
  }
}

function* addProject(data) {
  try {
    yield put(projectActions.addProject.pending);
    const response = yield call(API.addProject, data.payload);
    yield put(projectActions.addProject.success(response.data));
  } catch (error) {
    yield put(projectActions.addProject.error(error));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(ACTIONS.GET_CURRENT_PROJECTS_LIST_BEGIN, getCurrentProjects),
    takeEvery(
      ACTIONS.GET_CURRENT_PROJECTS_DETAILS_BEGIN,
      getCurrentProjectDetails
    ),
    takeEvery(ACTIONS.ADD_PROJECT_BEGIN, addProject),
  ]);
}
