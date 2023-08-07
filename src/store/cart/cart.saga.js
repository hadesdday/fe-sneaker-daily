import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  addToCartFailed,
  addToCartSuccess,
  clearCartAction,
  removeFromCartFailed,
  removeFromCartSuccess,
} from "./cart.action";
import { CART_ACTION_TYPES } from "./cart.types";

export function* addToCart({ payload: { item } }) {
  try {
    console.log(
      "check if item is undefined or else call api check available here"
    );
    yield put(addToCartSuccess(item));
  } catch (error) {
    yield put(addToCartFailed(error));
  }
}

export function* onAddToCartStart() {
  yield takeLatest(CART_ACTION_TYPES.ADD_TO_CART_START, addToCart);
}

export function* removeFromCart({ payload: { productId } }) {
  try {
    yield put(removeFromCartSuccess(productId));
  } catch (error) {
    yield put(removeFromCartFailed(error));
  }
}

export function* onRemoveFromCartStart() {
  yield takeLatest(CART_ACTION_TYPES.REMOVE_FROM_CART_START, removeFromCart);
}

export function* clearCart() {
  yield put(clearCartAction());
}

export function* onClearCart() {
  yield takeLatest(CART_ACTION_TYPES.CLEAR_CART_ACTION, clearCart);
}

export function* cartSaga() {
  yield all([
    call(onAddToCartStart),
    call(onRemoveFromCartStart),
    call(onClearCart),
  ]);
}
