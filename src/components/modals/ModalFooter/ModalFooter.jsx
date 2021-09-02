import React from "react";
import { TotalPrice } from "components/common/TotalPrice/TotalPrice";
import s from './ModalFooter.module.scss'

export const ModalFooter = () => {
  return (
    <div className={s.container}>
      <span className={s.cost}>сумма: 1350 руб.</span>
      <span className={s.discount}>скидка: 135 руб.</span>
      <TotalPrice value={1315} />
      <button type="submit" className={s.checkout}>
        Оформить заказ
      </button>
    </div>
  );
};

