import { combineReducers } from "@reduxjs/toolkit";
import { rentalApi } from "./features/rental/rentalApi";

export const mainReducer = combineReducers({
  // Add the generated reducer as a specific top-level slice
  [rentalApi.reducerPath]: rentalApi.reducer,
});
