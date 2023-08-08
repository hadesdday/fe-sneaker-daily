import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";
import { filterReducer } from "./filter-product-list/filter.reducer";

export const rootReducer = combineReducers({
  filter: filterReducer,
  cart: cartReducer,
});
