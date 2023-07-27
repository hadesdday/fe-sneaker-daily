import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { filterReducer } from "./filter-product-list/filter.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  filter: filterReducer,
  cart: cartReducer,
});
