import React from "react";
import { FavoriteIcon, PurchaseIcon } from "components/SVG/Icons";
import { useDispatch, useSelector } from "react-redux";
import { cartChangeModalState, favoriteChangeModalState } from "redux/slices/modals";
import { cartItemsSelector, addToCart } from "redux/slices/cart";
import s from "./ControlButtons.module.scss";
import { addToFavorite } from "redux/slices/favorite";
import clsx from "clsx";

export const ControlButtons = ({ productProps }) => {

  const dispatch = useDispatch();

  const favoriteModalHandler = () => {
    dispatch(addToFavorite(productProps));
    dispatch(favoriteChangeModalState(true));
  };

  const cartHandler = () => {
    dispatch(addToCart(productProps));
    dispatch(cartChangeModalState(true));
  };

  return (
    <div className={s.container}>
      <button type="button" className={clsx(s.button, s.favorite)} onClick={favoriteModalHandler}>
        <FavoriteIcon/>
      </button>
      <button type="button" className={clsx(s.button, s.cart)} onClick={cartHandler}>
        <PurchaseIcon/>
      </button>
    </div>
  );
};

