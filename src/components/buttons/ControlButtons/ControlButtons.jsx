import React from "react";
import { FavoriteIcon, PurchaseIcon } from "components/SVG/Icons";
import { useDispatch } from "react-redux";
import { cartChangeModalState, favoriteChangeModalState } from "redux/slices/modals";
import s from './ControlButtons.module.scss';

export const ControlButtons = () => {

  const dispatch = useDispatch();
  
  const favoriteModalHandler = () => {
    dispatch(favoriteChangeModalState(true));
  };

  const cartModalHandler = () => {
    dispatch(cartChangeModalState(true));
  };

  return (
    <div className={s.container}>
      <button type="button" className={s.button} onClick={favoriteModalHandler}>
        <FavoriteIcon/>
      </button>
      <button type="button" className={s.button} onClick={cartModalHandler}>
        <PurchaseIcon/>
      </button>
    </div>
  );
};

