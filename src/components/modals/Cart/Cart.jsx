import React from 'react';
import clsx from 'clsx';

import { Purchase } from '@components/common/Purchase/Purchase';
import { ModalBody } from '../ModalBody/ModalBody';

import s from './Cart.module.scss';

export const Cart = ({ toggleShowed }) => (
  <ModalBody toggleShowed={toggleShowed} title={'Корзина'}>
    <div className={s.promo}>
      <div className={s.promo__text}>Вам представлена скидка на первый заказ 10%</div>
      <button type="button" className={clsx(s.close, s.close_small)}></button>
    </div>
    <div>
      <Purchase inCart/>
      <Purchase inCart/>
    </div>
    <div className={s.footer}>
      <span className={s.cost}>сумма: 1350 руб.</span>
      <span className={s.discount}>скидка: 135 руб.</span>
      <div className={s.total}>
        <h3>Итого: </h3>
        <span className={s.totalPrice}>1215 руб.</span>
      </div>
      <button type="button" className={s.checkout}>
        Оформить заказ
      </button>
    </div>
  </ModalBody>
);

// const getProducts = async (id) => {
//     const product = await ProductsAPI.getProduct(id);
//     const products = await ProductsAPI.getProducts();
//     return { product, products };
//  };

//  export const getServerSideProps = async (appContext) => {
//     const { product, products } = await getProducts(appContext.query.id);
//     return { props: { id: appContext.query.id, product, products } };
//  };
