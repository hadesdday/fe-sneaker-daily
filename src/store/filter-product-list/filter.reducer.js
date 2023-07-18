import { FILTER_ACTION_TYPES } from "./filter.types";

//test data only (clear when have backend)
const INITIAL_STATE = {
  gender: ["all"],
  category: [],
  status: [],
  style: [],
  productLine: [],
  price: [],
  collection: [],
  material: [],
  color: [],
};

export const filterReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case FILTER_ACTION_TYPES.SET_FILTER_OPTIONS:
      return {
        ...state,
        [payload.valueKey]: payload.newValue,
      };
    default:
      return state;
  }
};
