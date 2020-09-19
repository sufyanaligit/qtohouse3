import {spawn, all} from "redux-saga/effects";
import projectSagas from "./project.sagas";

export default function* rootSaga() {
    yield all([spawn(projectSagas)]);
}
