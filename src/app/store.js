import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { bikeApi } from "../services/bike";

export const store = configureStore({
  reducer: {
    [bikeApi.reducerPath]: bikeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bikeApi.middleware),
});

setupListeners(store.dispatch);
