import { all, call } from "redux-saga/effects";
import { userSaga } from "@/store/user/user.saga.js";

export function* rootSaga() {
  yield all([call(userSaga)]);
}
