import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../services/productApi";
import layoutReducer from "../features/layout/layoutSlice";
import menuReducer from "../features/menu/menuSlice";

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    menu: menuReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

// Tip defination
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
