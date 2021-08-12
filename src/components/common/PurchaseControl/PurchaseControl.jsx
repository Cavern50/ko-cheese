import React from "react";
import clsx from "clsx";

import { DeliveryIcon, FavoriteIcon, MinusIcon, PlusIcon } from "components/SVG/Icons";
import { RemoveButton } from "../Buttons/RemoveButton/RemoveButton";

import s from "./PurchaseControl.module.scss";

export const PurchaseControl = ({ id, inCart, subscribeHandler }) => {
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
      <div className={s.container}>
        <div className={clsx(s.counter)}>
          <button
            type="button"
            className={clsx(s.change, s.minus)}
            onClick={() => changeCount("-")}
          >
            <MinusIcon/>
          </button>
          <span className={clsx(s.count)}>{count}</span>
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
            <button type="button" className={clsx(s.add)}>в корзину</button>
            <button type="button" className={clsx(s.favorite)}>
              <FavoriteIcon/>
            </button>
          </>
        )}
      </div>
      {!inCart &&
      <button type="button" className={s.subscribe} onClick={subscribeHandler}><span>Подписаться на доставку</span>
      </button>}
      <div className={clsx(s.delivery)}>
        <DeliveryIcon/>
        <span className={clsx(s.text)}>Ближайшая доставка: </span>
        <span className={clsx(s.terms)}>15.05.2021 </span>
      </div>
    </>
  );
};
