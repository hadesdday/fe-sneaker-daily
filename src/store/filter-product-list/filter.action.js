import { createAction } from "../../utils";
import { FILTER_ACTION_TYPES } from "./filter.types";

export const setFilterOptions = (valueKey, newValue) =>
  createAction(FILTER_ACTION_TYPES.SET_FILTER_OPTIONS, { valueKey, newValue });

export const setFilterAllOptions = (options) =>
  createAction(FILTER_ACTION_TYPES.SET_FILTER_ALL_OPTIONS, { options });
