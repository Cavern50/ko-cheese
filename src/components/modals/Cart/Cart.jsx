import React from 'react';

import { Purchase } from 'components/common/Purchase/Purchase';
import { CloseButton } from 'components/common/Buttons/CloseButton/CloseButton';
import { TotalPrice } from 'components/common/TotalPrice/TotalPrice';
import { useModal } from 'hooks';
import { ModalBody } from '../ModalBody/ModalBody';

import s from './Cart.module.scss';

export const Cart = ({ closeModal }) => {
  const discountModal = useModal(true);
  return (
    <ModalBody closeModal={closeModal} title="Корзина" >
      {discountModal.isShowed && (
        <div className={s.promo}>
          <div className={s.promo__text}>Вам представлена скидка на первый заказ 10%</div>
          <CloseButton close={discountModal.hideModal} />
        </div>
      )}
      <div>
        <Purchase inCart />
        <Purchase inCart />
        <Purchase inCart />
      </div>
      <div className={s.footer}>
        <span className={s.cost}>сумма: 1350 руб.</span>
        <span className={s.discount}>скидка: 135 руб.</span>
        <TotalPrice value={1315} />
        <button type="button" className={s.checkout}>
          Оформить заказ
        </button>
      </div>
    </ModalBody>
  );
};

// const getProducts = async (id) => {
//     const product = await ProductsAPI.getProduct(id);
//     const products = await ProductsAPI.getProducts();
//     return { product, products };
//  };

//  export const getServerSideProps = async (appContext) => {
//     const { product, products } = await getProducts(appContext.query.id);
//     return { props: { id: appContext.query.id, product, products } };
//  };
