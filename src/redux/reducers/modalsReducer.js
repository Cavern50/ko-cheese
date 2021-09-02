import { HYDRATE } from "next-redux-wrapper";

export const modalsInitialState = {
  modals: {
    cart: false,
    favorite: false,
    subscribe: false,
    letter: false
  }
};

const modalsReducer = (state = modalsInitialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state.modals, ...action.payload };
    case "CART_MODAL":
      return { modals: {...state.modals, cart: action.payload } };
    case "FAVORITE_MODAL":
      return { modals: { ...state.modals, favorite: action.payload } };
    case "SUBSCRIBE_MODAL":
      return { modals: {...state.modals, subscribe: action.payload } };
    case "LETTER_MODAL":
      return { modals: {...state.modals, letter: action.payload } };
    default:
      return state;
  }
};

export default modalsReducer;