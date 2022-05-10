import { configureStore, StoreEnhancer } from "@reduxjs/toolkit";
import { rentalApi } from "./features/rental/rentalApi";
import { mainReducer } from "./mainReducer";
import { RootState, store } from "./store";

/**
 * Gets a store set up with some givens initial state.
 * The store is set up with the RTK Query middleware.
 * Useful mainly for creating redux store provider when writing unit tests.
 *
 * @param initialState
 * @param enhancers
 */
export function getStore(initialState?: RootState, enhancers?: StoreEnhancer[]): typeof store {
  return configureStore({
    reducer: mainReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rentalApi.middleware),
    enhancers,
  });
}
