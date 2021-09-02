import React from "react";
import { Input } from "components/forms/Input/Input";
import { FormContainer } from "components/forms/FormContainer/FormContainer";
import { PROFILE_VALIDATION_SCHEMA } from "constants.js";
import { Textarea } from "components/forms/Textarea/Textarea";
import s from "./ProfileDelivery.module.scss";

export const ProfileDelivery = () => {
  const initialValues = {};
  return (
    <div className={s.wrapper}>
      <FormContainer enableReinitialize initialValues={initialValues} validationScheme={PROFILE_VALIDATION_SCHEMA}>
        {(formProps) => (
          <>
            <div className={s.form}>
              <div className={s.column}>
                <Input id="city" label="Город" name="city" type="text"/>
                <Input id="street" label="Улица" name="street" type="text"/>
                <div className={s.column}>
                  <Input id="house" label="Фамилия" name="house" type="text"/>
                  <Input id="floor" label="E-mail" name="floor" type="email"/>
                </div>
                <div className={s.column}>
                  <Input id="apartment" label="Офис /Квартира" name="apartment" type="text"/>
                  <Input id="code" label="Код" name="code" type="text"/>
                </div>
              </div>
              <div className={s.column}>
                <Textarea id="comment" label="Комментарий" name="comment" type="text"/>
              </div>
              <button type="submit" className={s.submit}>сохранить</button>
            </div>
            <button type="button" className={s.add}>Добавить адрес +</button>
          </>
        )}
      </FormContainer>
    </div>
    );
};

