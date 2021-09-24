import { configureStore, createSlice, ThunkAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { modalsSlice } from "redux/slices/modals";
import { cartSlice } from "redux/slices/cart";
import { favoriteSlice } from "redux/slices/favorite";
import { returnOrderSlice } from "redux/slices/returnOrder";

const makeStore = () =>
  configureStore({
    reducer: {
      [modalsSlice.name]: modalsSlice.reducer,
      [cartSlice.name]: cartSlice.reducer,
      [favoriteSlice.name]: favoriteSlice.reducer,
      [returnOrderSlice.name]: returnOrderSlice.reducer
    }
  });

export const wrapper = createWrapper(makeStore);