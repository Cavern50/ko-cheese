import React from 'react';
import clsx from 'clsx';

import { BackButton } from '@components/common/Buttons/BackButton/BackButton';
import { Input } from '@components/common/Input/Input';
import s from './OrderingSection.module.scss';

export const OrderingSection = () => {

    return (
    <div className={s.container}>
      <BackButton />
      <h2 className={s.title}>Оформление заказа</h2>
      <div className={s.steps}>
        <span className={clsx(s.step, s.step_active)}>Информация</span>
        {'>'}
        <span className={s.step}>Доставка</span>
        {'>'}
        <span className={s.step}>Оплата</span>
      </div>
      <form action="" className={s.form}>
        <div className={s.stage}>
          <Input label="Телефон" type="text" name="phone" id="phone" />
          <Input label="Имя" type="text" name="name" id="name" />
          <Input label="E-mail" type="email" name="email" id="email" />
        </div>
        <button type='button' className={s.submit}>Оформить заказ</button>
      </form>
    </div>
  );
};
