import {spawn, all} from "redux-saga/effects";
import currentProjectSagas from "./currentProjects.saga";

export default function* rootSaga() {
    yield all([spawn(currentProjectSagas)]);
}
