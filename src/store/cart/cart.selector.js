import { createSelector } from "reselect";

export const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => {
    return cartSlice.cartItems;
  }
);

export const selectCartIsLoading = createSelector(
  [selectCartReducer],
  (cartSlice) => {
    return cartSlice.isLoading;
  }
);

export const selectCartError = createSelector(
  [selectCartReducer],
  (cartSlice) => {
    return cartSlice.error;
  }
);

export const selectCartCount = createSelector(
  [selectCartReducer],
  (cartSlice) => {
    return cartSlice.cartItems.length;
  }
);
