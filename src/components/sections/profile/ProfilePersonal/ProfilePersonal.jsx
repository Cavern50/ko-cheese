import React from "react";
import { Input } from "components/forms/Input/Input";
import { InputPhoto } from "components/forms/InputPhoto/InputPhoto";
import { FormContainer } from "components/forms/FormContainer/FormContainer";
import { PROFILE_VALIDATION_SCHEMA } from "constants.js";
import s from "./ProfilePersonal.module.scss";

export const ProfilePersonal = () => {
  const initialValues = {
    phone: +79271024567,
    name: "Сергей",
    surname: "Владимирович",
    email: "raz@yandex.ru"
  };

  return (
    <FormContainer enableReinitialize initialValues={initialValues} validationScheme={PROFILE_VALIDATION_SCHEMA}>
      {(formProps) => (
        <>
          <div className={s.container}>
            <div className={s.form}>
              <Input id="phone" label="* Телефон" name="phone" type="tel"/>
              <Input id="name" label="* Имя" name="name" type="text"/>
              <Input id="surname" label="Фамилия" name="surname" type="text"/>
              <Input id="email" label="E-mail" name="email" type="email"/>
              <button type="button" className={s.password}>Изменить пароль</button>
            </div>
            {/*<div className={s.photo}>*/}
            {/*  <InputPhoto name="photo" id="photo" formProps={formProps}/>*/}
            {/*</div>*/}
          </div>

          <button type="submit" className={s.submit}>сохранить</button>
        </>
      )}
    </FormContainer>
  );
};

