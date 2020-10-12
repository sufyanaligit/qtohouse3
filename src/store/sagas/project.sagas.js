import { all, call, put, takeEvery } from 'redux-saga/effects';
import ACTIONS from '../qto.constants';
import { projectActions } from '../actions';
import API from '../services';

//const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
function* getProjects() {
  try {
    yield put(projectActions.getCurrentProjectsList.pending);
    const response = yield call(API.getCurrentProjects);
    yield put(projectActions.getCurrentProjectsList.success(response.data));
    yield put(projectActions.getFeaturedProjectsList.success(response.data));
    yield put(projectActions.getAllProjectsList.success(response.data));
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
    yield put(projectActions.addProject.success(response));
  } catch (error) {
    yield put(projectActions.addProject.error(error));
  }
}
function* validateLogin(data) {
  try {
    yield put(projectActions.validateLogin.pending);
    const response = yield call(API.validateLogin, data.payload);
    if (response.MessageCode === 1)
      yield put(projectActions.validateLogin.success(response));
    else {
      yield put(projectActions.validateLogin.error(response));
    }
  } catch (error) {
    yield put(projectActions.validateLogin.error(error));
  }
}

function* validateUserSession(data) {
  try {
    yield put(projectActions.validateUserSession.pending);
    const response = yield call(API.validateUserSession, data.payload);
    yield put(projectActions.validateUserSession.success(response.data));
  } catch (error) {
    yield put(projectActions.validateUserSession.error(error));
  }
}
function* getPendingUserApprovals() {
  try {
    yield put(projectActions.getPendingUserApprovals.pending);
    const response = yield call(API.getPendingUserApprovals);
    yield put(projectActions.getPendingUserApprovals.success(response));
  } catch (error) {
    yield put(projectActions.getPendingUserApprovals.error(error));
  }
}
function* approvePendingStatus({ payload }) {
  try {
    yield put(projectActions.getPendingUserApprovals.pending);
    const response = yield call(API.approvePendingStatus, payload);
    debugger;
    yield put(projectActions.getPendingUserApprovals.success(payload));
  } catch (error) {
    yield put(projectActions.getPendingUserApprovals.error(error));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(ACTIONS.GET_CURRENT_PROJECTS_LIST_BEGIN, getProjects),
    takeEvery(
      ACTIONS.GET_CURRENT_PROJECTS_DETAILS_BEGIN,
      getCurrentProjectDetails
    ),
    takeEvery(ACTIONS.ADD_PROJECT_BEGIN, addProject),
    takeEvery(ACTIONS.VALIDATE_LOGIN_BEGIN, validateLogin),
    takeEvery(ACTIONS.VALIDATE_USER_SESSION_BEGIN, validateUserSession),
    takeEvery(ACTIONS.GET_USER_PENDING_APPROVAL_BEGIN, getPendingUserApprovals),
    takeEvery(ACTIONS.APPROVE_PENDING_STATUS, approvePendingStatus),
  ]);
}
