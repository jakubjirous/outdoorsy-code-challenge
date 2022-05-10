import { combineReducers } from "@reduxjs/toolkit";
import { rentalApi } from "./features/rental/rentalApi";
import searchReducer from "./features/search/searchSlice";

export const mainReducer = combineReducers({
  search: searchReducer,

  // Add the generated reducer as a specific top-level slice
  [rentalApi.reducerPath]: rentalApi.reducer,
});
