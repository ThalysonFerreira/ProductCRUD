import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ProductsSlice } from "./product/products-slice";

export const storeState = configureStore({
    reducer: {
      product: ProductsSlice.reducer,
    }
  });

  export type AppDispatch =typeof storeState.dispatch;
  export const useAppDispatch = () => useDispatch<AppDispatch>();
  export type RootState = ReturnType<typeof storeState.getState>;
  