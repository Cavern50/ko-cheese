import React from "react";
import { TotalPrice } from "components/common/TotalPrice/TotalPrice";
import { useSelector } from "react-redux";
import {totalPriceSelector} from "redux/slices/cart";
import s from './ModalFooter.module.scss'

export const ModalFooter = () => {
  const totalPrice = useSelector(totalPriceSelector);
  return (
    <div className={s.container}>
      <span className={s.cost}>сумма: {totalPrice} руб.</span>
      {/*<span className={s.discount}>скидка: 135 руб.</span>*/}
      <TotalPrice value={totalPrice} />
      <button type="submit" className={s.checkout}>
        Оформить заказ
      </button>
    </div>
  );
};

