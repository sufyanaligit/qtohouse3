import { all, spawn } from "redux-saga/effects";
import qtoSagas from "./sagas";

export default function* root() {
  yield all([spawn(qtoSagas)]);
}
