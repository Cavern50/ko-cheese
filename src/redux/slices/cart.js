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
        const prevCountInCart = state.items.find(item => item.id === action.payload.id).countInCart;
        state.totalPrice -= parseInt(action.payload.price, 10) * prevCountInCart;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
      state.totalPrice += parseInt(action.payload.price, 10) * action.payload.countInCart;
      state.items.push(action.payload);
    },
    removeProduct(state, action) {
      state.totalPrice -= action.payload.price * action.payload.countInCart;
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    incProductCount(state, action) {
      const product = state.items.find(item => item.id === action.payload.id);
      product.countInCart++;
      state.totalPrice += parseInt(product.price, 10);
    },
    decProductCount(state, action) {
      const product = state.items.find(item => item.id === action.payload.id);
      if (product.countInCart > 1) {
        product.countInCart--;
        state.totalPrice -= parseInt(product.price, 10);
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

