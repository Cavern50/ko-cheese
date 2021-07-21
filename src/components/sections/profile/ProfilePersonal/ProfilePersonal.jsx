import React from "react";
import { Input } from "components/common/Input/Input";
import { InputPhoto } from "components/common/InputPhoto/InputPhoto";
import { FormContainer } from "components/forms/FormContainer/FormContainer";
import s from "./ProfilePersonal.module.scss";

export const ProfilePersonal = () => {
  const initialValues = {
    phone: "",
    name: "",
    email: "",
  };

  return (
    <FormContainer initialValues={initialValues}>
      <div className={s.container}>
        <div className={s.form}>
          <Input id="phone" label="* Телефон" name="phone" type="tel"/>
          <Input id="name" label="* Имя" name="name" type="text"/>
          <Input id="surname" label="Фамилия" name="surname" type="text"/>
          <Input id="email" label="E-mail" name="email" type="email"/>
          <button type="button" className={s.password}>Изменить пароль</button>
        </div>
      </div>
        {/*<div className={s.photo}>*/}
        {/*  <InputPhoto/>*/}
        {/*</div>*/}
    </FormContainer>
  );
};

