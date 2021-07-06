import React from 'react';

import s from './CartSection.module.scss';
import { Purchase } from '@components/common/Purchase/Purchase';
import { TotalPrice } from '@components/common/TotalPrice/TotalPrice';

const CartSection = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.cart}>
          <div className={s.header}>
            <h2>Корзина</h2>
          </div>
          <Purchase inOrder />
          <Purchase inOrder />
          <Purchase inOrder />
          <Purchase inOrder />
          <Purchase inOrder />
          <Purchase inOrder />
        </div>
        <div className={s.footer}>
          <div className={s.fields}>
            <div className={s.field}>
              <span className={s.info}>Цена:</span>
              <span className={s.value}>1350 руб.</span>
            </div>
            <div className={s.field}>
              <span className={s.info}>Доставка:</span>
              <span className={s.value}>Бесплатно</span>
            </div>
          </div>
          <TotalPrice value={1315} />
        </div>
      </div>
    </>
  );
};

export default CartSection;
