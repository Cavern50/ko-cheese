import React from "react";
import clsx from "clsx";

import { BackButton } from "components/buttons/BackButton/BackButton";
import { Input } from "components/forms/Input/Input";
import { FormContainer } from "components/forms/FormContainer/FormContainer";
import { PROFILE_VALIDATION_SCHEMA } from "constants.js";
import s from "./OrderingSection.module.scss";


export const OrderingSection = () => {
  const initialValues = {
    phone: '',
    name: '',
    email: ''
  }
  return (
    <div className={s.container}>
      <BackButton/>
      <div className={s.purchase}>
        <h2 className={s.title}>Оформление заказа</h2>
        <div className={s.steps}>
          <span className={clsx(s.step, s.step_active)}>Информация</span>
          {">"}
          <span className={s.step}>Доставка</span>
          {">"}
          <span className={s.step}>Оплата</span>
        </div>
        <FormContainer enableReinitialize initialValues={initialValues} validationScheme={PROFILE_VALIDATION_SCHEMA}>
          {() => (
            <>
              <div className={s.stage}>
                <Input label="Телефон" type="number" name="phone" id="phone"/>
                <Input label="Имя" type="text" name="name" id="name"/>
                <Input label="E-mail" type="email" name="email" id="email"/>
              </div>
              <button type='submit' className={s.submit}>Оформить заказ</button>
            </>
          )}
        </FormContainer>
      </div>


    </div>
  );
};
