import { all, call } from "redux-saga/effects";
import { userSaga } from "./user/user.saga";
import { filterSaga } from "./filter-product-list/filter.saga";
import { cartSaga } from "./cart/cart.saga";

export function* rootSaga() {
  yield all([call(userSaga), call(filterSaga), call(cartSaga)]);
}
