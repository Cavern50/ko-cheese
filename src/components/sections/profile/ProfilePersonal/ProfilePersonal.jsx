import React from "react";
import { Input } from "components/forms/Input/Input";
import { FormContainer } from "components/forms/FormContainer/FormContainer";
import { PROFILE_VALIDATION_SCHEMA } from "constants.js";
import s from "./ProfilePersonal.module.scss";

export const ProfilePersonal = () => {

  const initialValues = {
    phone: 79271024567,
    name: "Сергей",
    surname: "Владимирович",
    email: "raz@yandex.ru"
  };

  const submitHandler = (values) => {
    alert(values);
  };

  return (
    <div className={s.wrapper}>
      <FormContainer
        enableReinitialize
        initialValues={initialValues}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={PROFILE_VALIDATION_SCHEMA}
        submitHandler={submitHandler}>
        {() => (
          <>
            <div className={s.container}>
              <div className={s.form}>
                <Input id="phone" label="* Телефон" name="phone" type="text"/>
                <Input id="name" label="* Имя" name="name" type="text"/>
                <Input id="surname" label="Фамилия" name="surname" type="text"/>
                <Input id="email" label="E-mail" name="email" type="text"/>
              </div>
            </div>
            <button type="submit" className={s.submit}>сохранить</button>
          </>
        )}
      </FormContainer>
    </div>
  );
};

