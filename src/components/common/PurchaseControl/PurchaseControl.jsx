import React from "react";
import clsx from "clsx";
import { DeliveryIcon, FavoriteIcon, MinusIcon, PlusIcon } from "components/SVG/Icons";
import { useDispatch, useSelector } from "react-redux";
import {
  cartChangeModalState,
  favoriteChangeModalState,
  subscribeChangeModalState
} from "redux/slices/modals";
import { removeProduct, incProductCount, cartItemsSelector, decProductCount, addToCart } from "redux/slices/cart";

import { RemoveButton } from "../../buttons/RemoveButton/RemoveButton";
import s from "./PurchaseControl.module.scss";
import { addToFavorite } from "redux/slices/favorite";

export const PurchaseControl = ({ product, inCart, additionClass }) => {
  console.log(product);
  const dispatch = useDispatch();

  const productSelector = useSelector(cartItemsSelector).find(item => item.id === product.id);

  const addToFavoriteHandler = () => {
    dispatch(addToFavorite(product));
    dispatch(favoriteChangeModalState(true));
  };

  const subscribeModalHandler = () => {
    dispatch(subscribeChangeModalState(true));
  };

  const removeHandler = () => {
    dispatch(removeProduct(product));
  };

  const decHandlerInCart = () => {
    dispatch(decProductCount(product));
  };

  const incHandlerInCart = () => {
    dispatch(incProductCount(product));
  };

  const [countInCart, setCountInCart] = React.useState(1);

  const decHandlerInDetail = () => {
    countInCart > 1 && setCountInCart(countInCart - 1);
  }

  const incHandlerInDetail = () => {
    setCountInCart(countInCart + 1);
  }

  const addToCartHandler = () => {
    dispatch(addToCart({ countInCart, ...product }))
    dispatch(cartChangeModalState(true));
  };
  return (
    <>
      <div className={clsx(s.container, s[additionClass])}>
        <div className={s.counter}>
          <button
            type="button"
            className={clsx(s.change, s.minus)}
            onClick={inCart ? decHandlerInCart : decHandlerInDetail}
          >
            <MinusIcon/>
          </button>
          <span className={s.count}>{ inCart ? productSelector.countInCart : countInCart}</span>
          <button
            type="button"
            className={clsx(s.change, s.plus)}
            onClick={inCart ? incHandlerInCart : incHandlerInDetail}
          >
            <PlusIcon/>
          </button>
        </div>
        {inCart ? (
          <RemoveButton clickHandler={removeHandler}/>
        ) : (
          <>
            <button type="button" className={s.add} onClick={addToCartHandler}>в корзину</button>
            <button type="button" className={s.favorite} onClick={addToFavoriteHandler}>
              <FavoriteIcon/>
            </button>
          </>
        )}
      </div>
      {!inCart &&
      <button type="button" className={s.subscribe} onClick={subscribeModalHandler}><span>Подписаться на доставку</span>
      </button>}
      <div className={s.delivery}>
        <DeliveryIcon/>
        <span className={s.text}>Ближайшая доставка: </span>
        <span className={s.terms}>15.05.2021 </span>
      </div>
    </>
  );
};
