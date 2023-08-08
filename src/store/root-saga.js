import { all, call } from "redux-saga/effects";
import { cartSaga } from "./cart/cart.saga";
import { filterSaga } from "./filter-product-list/filter.saga";

export function* rootSaga() {
  yield all([call(filterSaga), call(cartSaga)]);
}
