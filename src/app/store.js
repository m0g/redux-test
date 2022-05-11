import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import counterReducer from "../features/counter/counterSlice";
import { bikeApi } from "../services/bike";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [bikeApi.reducerPath]: bikeApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bikeApi.middleware),
});

setupListeners(store.dispatch);
