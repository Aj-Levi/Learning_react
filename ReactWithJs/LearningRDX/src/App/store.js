import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./Services/productsData.js";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },

  // dont worry about understanding the below code (it is a standard code for 
  // caching)
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(productsApi.middleware)
  ),
});

setupListeners(store.dispatch);
