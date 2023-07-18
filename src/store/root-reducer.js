import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { filterReducer } from "./filter-product-list/filter.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  filter: filterReducer,
});
