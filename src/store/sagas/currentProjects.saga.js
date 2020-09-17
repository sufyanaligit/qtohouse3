import { all, call, put, takeEvery } from "redux-saga/effects";
import ACTIONS from "../qto.constants";
import { currentProjectActions } from "../actions";
import API from "../services";

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
function* getCurrentProjects() {
  try {
    yield put(currentProjectActions.getCurrentProjectsList.pending);
    const response = yield call(API.getCurrentProjects);
    yield put(
      currentProjectActions.getCurrentProjectsList.success(response.data)
    );
  } catch (error) {
    yield put(currentProjectActions.getCurrentProjectsList.error(error));
  }
}
export default function* rootSaga() {
  yield all([
    takeEvery(ACTIONS.GET_CURRENT_PROJECTS_LIST_BEGIN, getCurrentProjects),
  ]);
}
