// import { createStore, compose } from "redux";
// import { createWrapper } from "next-redux-wrapper";
//
// import { configureStore } from '@reduxjs/toolkit'
//
//
// import modalsReducer, {modalsInitialState} from "redux/reducers/modalsReducer";
//
// const initialState = {...modalsInitialState};
//
//
// const devtools = (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__)
//   ? window.__REDUX_DEVTOOLS_EXTENSION__()
//   : f => f
//
// const store = context => createStore(modalsReducer, initialState, compose(devtools));
//
//
// // const store = createStore(modalsReducer, {}, composeEnhancers);
//
// // export an assembled wrapper
// export const wrapper = createWrapper(store, { debug: true });


import { configureStore, createSlice, ThunkAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { modalsSlice } from "redux/slices/modals";

const makeStore = () =>
  configureStore({
    reducer: {
      [modalsSlice.name]: modalsSlice.reducer
    }
  });

// export type AppStore = ReturnType<typeof makeStore>;
// export type AppState = ReturnType<AppStore['getState']>;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
//

export const wrapper = createWrapper(makeStore);