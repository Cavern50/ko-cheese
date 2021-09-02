import React from 'react';

import { Purchase } from 'components/common/Purchase/Purchase';
import { CloseButton } from 'components/buttons/CloseButton/CloseButton';
import { useModal } from 'hooks';
import {ModalFooter} from "components/modals/ModalFooter/ModalFooter";
import { ModalBody } from '../ModalBody/ModalBody';

import s from './Cart.module.scss';

export const Cart = ({ closeModal }) => {
  const discountModal = useModal(true);
  return (
    <ModalBody closeModal={closeModal} title="Корзина">
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
     <ModalFooter/>
    </ModalBody>
  );
};
