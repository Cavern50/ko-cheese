import React from "react";
import clsx from "clsx";
import { DeliveryIcon, FavoriteIcon, MinusIcon, PlusIcon } from "components/SVG/Icons";
import { useDispatch } from "react-redux";
import {
  cartChangeModalState,
  favoriteChangeModalState,
  subscribeChangeModalState
} from "redux/slices/modals";

import { RemoveButton } from "../../buttons/RemoveButton/RemoveButton";
import s from "./PurchaseControl.module.scss";

export const PurchaseControl = ({ id, inCart, additionClass }) => {
  const dispatch = useDispatch();
  const cartModalHandler = () => {
    dispatch(cartChangeModalState(true));
  };
  const favoriteModalHandler = () => {
    dispatch(favoriteChangeModalState(true));
  };

  const subscribeModalHandler = () => {
    dispatch(subscribeChangeModalState(true));
  };

  const [count, setCount] = React.useState(1);
  

  // eslint-disable-next-line consistent-return
  const changeCount = (operation) => {
    if (count === 1 && operation === "-") {
      return false;
    }
    setCount((prev) => (operation === "-" ? prev - 1 : prev + 1));
  };
  React.useEffect(() => {
    setCount(1);
  }, [id]);

  return (
    <>
      <div className={clsx(s.container, s[additionClass])}>
        <div className={s.counter}>
          <button
            type="button"
            className={clsx(s.change, s.minus)}
            onClick={() => changeCount("-")}
          >
            <MinusIcon/>
          </button>
          <span className={s.count}>{count}</span>
          <button
            type="button"
            className={clsx(s.change, s.plus)}
            onClick={() => changeCount("+")}
          >
            <PlusIcon/>
          </button>
        </div>
        {inCart ? (
          <RemoveButton/>
        ) : (
          <>
            <button type="button" className={s.add} onClick={cartModalHandler}>в корзину</button>
            <button type="button" className={s.favorite} onClick={favoriteModalHandler}>
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
