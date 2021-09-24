import React from "react";
import { Input } from "components/forms/Input/Input";
import Link from "next/link";
import { FormContainer } from "components/forms/FormContainer/FormContainer";
import s from "../AuthSection/AuthSection.module.scss";

export const RegSection = () => {

  const initialValues = {
    phone: "",
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Вход</h2>
      <FormContainer
        initialValues={initialValues}
        className="loginForm"
      >
        {() =>
          (
            <>
              <Input id="phone" label="Телефон" name="phone" type="number"/>
              <div className={s.politics}>
                <Input id="politics" name="politics" type="checkbox" additionClass="checkbox"/>
                <span className={s.label}>Я ознакомлен(-а) с политикой конфиденциальности</span>
              </div>
              <Link href="/profile">
                <a className={s.submit}>Зарегистрироваться</a>
              </Link>
              <Link href="/login">
                <a className={s.reg}>Войти</a>
              </Link>
            </>
          )
        }

      </FormContainer>
    </div>
  );
};
