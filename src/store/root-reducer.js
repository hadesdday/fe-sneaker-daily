import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";
import { filterReducer } from "./filter-product-list/filter.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  filter: filterReducer,
  cart: cartReducer,
  user: userReducer,
});
