import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  items: [],
  totalPrice: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const isProductInCart = state.items.some(product => product.id === action.payload.id);
      if (isProductInCart) {
        state.totalPrice -= parseInt(action.payload.price) * state.items.find(item => item.id === action.payload.id).count;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      } else {
        state.totalPrice += parseInt(action.payload.price) * action.payload.count;
      }
      state.items.push(action.payload);
    },
    removeProduct(state, action) {
      state.totalPrice -= action.payload.price * action.payload.count;
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    incProductCount(state, action) {
      const product = state.items.find(item => item.id === action.payload.id);
      product.count++;
      state.totalPrice += parseInt(product.price);
    },
    decProductCount(state, action) {
      const product = state.items.find(item => item.id === action.payload.id);
      if (product.count > 1) {
        product.count--;
        state.totalPrice -= parseInt(product.price);
      }
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.some
      };
    }
  }
});

export const {
  addToCart,
  removeProduct,
  incProductCount,
  decProductCount
} = cartSlice.actions;

export const cartItemsSelector = (state) => state.cart.items;
export const totalPriceSelector = (state) => state.cart.totalPrice;

