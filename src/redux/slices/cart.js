import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import APIBitrix from "api/APIBitrix";


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
      product.countInCart += 1;
      state.totalPrice += parseInt(product.price, 10);
    },
    decProductCount(state, action) {
      const product = state.items.find(item => item.id === action.payload.id);
      if (product.countInCart > 1) {
        product.countInCart -= 1;
        state.totalPrice -= parseInt(product.price, 10);
      }
    },
    getProducts(state, action) {
      state.items = action.payload;
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
  decProductCount,
  getProducts
} = cartSlice.actions;

export const cartItemsSelector = (state) => state.cart.items;
export const totalPriceSelector = (state) => state.cart.totalPrice;


export const reqAddToCart = createAsyncThunk(
  "cart/reqAddToCart",
  async (productData, { dispatch }) => {
    const response = await APIBitrix.post("basket/add/", {
      fuser_id: localStorage.getItem("fuser_id"),
      product_id: productData.id,
      quantity: productData.countInCart
    });
    dispatch(addToCart({
      ...productData,
      countInCart: response.quantity
    }));
  }
);


export const reqIncProductCount = createAsyncThunk(
  "cart/reqIncProductCount",
  async (productData, { dispatch, getState }) => {
    const state = getState();
    const response = await APIBitrix.post("basket/increment/", {
      fuser_id: localStorage.getItem("fuser_id"),
      product_id: productData.id,
      quantity: 1
    });
    dispatch(incProductCount({
      ...productData,
      countInCart: state.cart.items.find(product => productData.id === product.id).countInCart + 1
    }));
  }
);


export const reqDecProductCount = createAsyncThunk(
  "cart/reqDecProductCount",
  async (productData, { dispatch, getState }) => {
    const state = getState();
    if (state.cart.items.find(product => productData.id === product.id).countInCart > 1) {
      const response = await APIBitrix.get("basket/decrement/", {
        fuser_id: localStorage.getItem("fuser_id"),
        product_id: productData.id,
        quantity: -1
      });
      dispatch(addToCart({
        ...productData,
        countInCart: state.cart.items.find(product => productData.id === product.id).countInCart - 1
      }));
    }
  }
);


export const reqRemoveFromCart = createAsyncThunk(
  "cart/reqRemoveFromCart",
  async (productData, { dispatch }) => {
    const itemId = await APIBitrix.post("basket/items/", {
      fuser_id: localStorage.getItem("fuser_id")
    }).then(res => res.find(item => productData.id == item.product_id).item_id);
    const response = await APIBitrix.post("basket/remove/", {
      fuser_id: localStorage.getItem("fuser_id"),
      item_id: itemId
    });
    dispatch(removeProduct(productData));
  }
);


export const reqGetProducts = createAsyncThunk(
  "cart/reqGetProducts",
  async (productData, { dispatch }) => {
    const response = await APIBitrix.get("basket/add/", {
      fuser_id: localStorage.getItem("fuser_id")
    });
    dispatch(addToCart({
      ...productData,
      countInCart: response.quantity
    }));
  }
);




// export const reqPurchaseOrder = createAsyncThunk(
//   "cart/reqAddToCart",
//   async (productData, { dispatch }) => {
//     const response = await APIBitrix.post("basket/order/", {
//       fuser_id: localStorage.getItem("fuser_id")
//     });
//   }
// );
