import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  id: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserId(state, action) {
      state.id = action.payload;
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
  addUserId
} = userSlice.actions;

export const userIdSelector = (state) => state.user.id;

