import { createAction } from "../../utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const addToCartStart = (item) =>
  createAction(CART_ACTION_TYPES.ADD_TO_CART_START, { item });

export const addToCartSuccess = (item) =>
  createAction(CART_ACTION_TYPES.ADD_TO_CART_SUCCESS, { item });

export const addToCartFailed = (error) =>
  createAction(CART_ACTION_TYPES.ADD_TO_CART_FAILED, { error });

export const removeFromCartStart = (productId) =>
  createAction(CART_ACTION_TYPES.REMOVE_FROM_CART_START, { productId });

export const removeFromCartSuccess = (productId) =>
  createAction(CART_ACTION_TYPES.REMOVE_FROM_CART_SUCCESS, { productId });

export const removeFromCartFailed = (error) =>
  createAction(CART_ACTION_TYPES.REMOVE_FROM_CART_FAILED, { error });

export const clearCartAction = () => createAction(CART_ACTION_TYPES.CLEAR_CART);
