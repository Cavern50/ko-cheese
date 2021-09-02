import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  cart: false,
  favorite: false,
  subscribe: false,
  letter: false
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    cartChangeModalState(state, action) {
      state.cart = action.payload;
    },
    favoriteChangeModalState(state, action) {
      state.favorite = action.payload;
    },
    subscribeChangeModalState(state, action) {
      state.subscribe = action.payload;
    },
    letterChangeModalState(state, action) {
      state.letter = action.payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", state, action.payload);
      return {
        ...state,
        ...action.payload.some
      };
    }
  }
});

export const {
  cartChangeModalState,
  favoriteChangeModalState,
  letterChangeModalState,
  subscribeChangeModalState
} = modalsSlice.actions;

console.log(cartChangeModalState);

export const cartModalSelector = (state) => state.modals.cart;
export const favoriteModalSelector = (state) => state.modals.favorite;
export const subscribeModalSelector = (state) => state.modals.subscribe;
export const letterModalSelector = (state) => state.modals.letter;

