import { configureStore } from "@reduxjs/toolkit";
import { rentalApi } from "./features/rental/rentalApi";
import { mainReducer } from "./mainReducer";

export const store = configureStore({
  reducer: mainReducer,

  // Adding the api middleware enables caching, invalidation, polling, and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rentalApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
