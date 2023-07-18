import { all, call, takeLatest } from "redux-saga/effects";
import { FILTER_ACTION_TYPES } from "./filter.types";

export function* filterOptions({ payload: { valueKey, newValue } }) {
  //call api here when have backend then put data to store (try catch also)
  console.log("filterOptions", valueKey, newValue);
}

export function* onFilterOptions() {
  yield takeLatest(FILTER_ACTION_TYPES.SET_FILTER_OPTIONS, filterOptions);
}

export function* filterSaga() {
  yield all([call(onFilterOptions)]);
}
