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

  //test data only
  // gender: ["all"],
  // category: ["accessories", "shoes"],
  // status: ["limited-edition", "online-only"],
  // style: ["low-top", "slip-on"],
  // productLine: ["basas", "vintas"],
  // price: ["500-599", ">600"],
  // collection: ["ananas-puppet-club", "track-6-2-blues"],
  // material: ["canvas", "cotton"],
  // color: ["white", "pink"],
};

export const filterReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case FILTER_ACTION_TYPES.SET_FILTER_OPTIONS:
      return {
        ...state,
        [payload.valueKey]: payload.newValue,
      };
    case FILTER_ACTION_TYPES.SET_FILTER_ALL_OPTIONS:
      return {
        ...state,
        ...payload.options,
      };
    default:
      return state;
  }
};
