import { all, call, put, takeEvery, select } from 'redux-saga/effects';
import {
  getSearchPayload,
  getSelectedTab,
} from '../selectors/project.selectors';

import ACTIONS, { PROJECT_TYPE } from '../qto.constants';
import { projectActions } from '../actions';
import API from '../services';

//const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
function* getCurrentProjects({ payload }) {
  try {
    yield put(projectActions.getCurrentProjectsList.pending);
    const searchPayload = payload ? payload : yield select(getSearchPayload);
    const response = yield call(API.getProjects, searchPayload);
    yield put(projectActions.getCurrentProjectsList.success(response.data));
  } catch (error) {
    yield put(projectActions.getCurrentProjectsList.error(error));
  }
}
function* getFeaturedProjects({ payload }) {
  try {
    yield put(projectActions.getFeaturedProjectsList.pending);
    let searchPayload = payload ? payload : yield select(getSearchPayload);
    searchPayload = searchPayload.set('project_type', PROJECT_TYPE.FEATURED);
    const response = yield call(API.getProjects, searchPayload);
    yield put(projectActions.getFeaturedProjectsList.success(response.data));
  } catch (error) {
    yield put(projectActions.getFeaturedProjectsList.error(error));
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
    yield put(projectActions.approvePendingStatus.pending);
    yield call(API.approvePendingStatus, payload);
    yield put(projectActions.approvePendingStatus.success(payload));
  } catch (error) {
    yield put(projectActions.approvePendingStatus.error(error));
  }
}

function* performLazyLoadSearch({ payload }) {
  const selectedTab = yield select(getSelectedTab);
  try {
    yield put(projectActions.performLazyLoadSearch.pending(selectedTab));
    const searchPayload = payload;
    const response = yield call(API.getProjects, searchPayload);
    yield put(
      projectActions.performLazyLoadSearch.success(
        response.data,
        payload,
        selectedTab
      )
    );
  } catch (error) {
    yield put(projectActions.performLazyLoadSearch.error(error, selectedTab));
  }
}

function* uploadImage(data) {
  try {
    const searchPayload = data;
    const response = yield call(API.uploadImage, searchPayload);
  } catch (error) {}
}

export default function* rootSaga() {
  yield all([
    takeEvery(ACTIONS.GET_CURRENT_PROJECTS_LIST_BEGIN, getCurrentProjects),
    takeEvery(ACTIONS.GET_FEATURED_PROJECTS_LIST_BEGIN, getFeaturedProjects),
    takeEvery(
      ACTIONS.GET_CURRENT_PROJECTS_DETAILS_BEGIN,
      getCurrentProjectDetails
    ),
    takeEvery(ACTIONS.ADD_PROJECT_BEGIN, addProject),
    takeEvery(ACTIONS.VALIDATE_LOGIN_BEGIN, validateLogin),
    takeEvery(ACTIONS.VALIDATE_USER_SESSION_BEGIN, validateUserSession),
    takeEvery(ACTIONS.GET_USER_PENDING_APPROVAL_BEGIN, getPendingUserApprovals),
    takeEvery(ACTIONS.APPROVE_PENDING_STATUS_BEGIN, approvePendingStatus),
    takeEvery(ACTIONS.PERFORM_LAZY_LOAD_SEARCH_BEGIN, performLazyLoadSearch),
    takeEvery(ACTIONS.UPLOAD_IMAGE, uploadImage),
  ]);
}
