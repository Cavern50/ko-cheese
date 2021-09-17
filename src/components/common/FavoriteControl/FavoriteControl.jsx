import React from "react";

import { RemoveButton } from "components/buttons/RemoveButton/RemoveButton";
import s from "./FavoriteControl.module.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "redux/slices/cart";
import { cartChangeModalState, closeAllModals } from "redux/slices/modals";
import { removeFromFavorite } from "redux/slices/favorite";

export const FavoriteControl = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(product));
    dispatch(closeAllModals());
    dispatch(cartChangeModalState(true));
  };

  const removeFromFavoriteHandler = () => {
    dispatch(removeFromFavorite(product));
  };

  return (
    <div className={s.container}>
      <button type='button' className={s.add} onClick={addToCartHandler}>в корзину</button>
      <RemoveButton small clickHandler={removeFromFavoriteHandler}/>
    </div>
  );
};

