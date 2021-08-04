import React from "react";
import { Input } from "components/forms/Input/Input";
import Link from "next/link";
import { FormContainer } from "components/forms/FormContainer/FormContainer";
import s from "./AuthSection.module.scss";

export const AuthSection = () => {

  const initialValues = {
    phone: 79271028496,
    password: ""
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
              <Input id="phone" label="Телефон" name="phone" type="phone"/>
              <Input id="password" label="Пароль" name="password" type="password"/>
              <div className={s.politics}>
                <Input id="politics" name="politics" type="checkbox" additionClass="checkbox"/>
                <span className={s.label}>Я ознакомлен(-а) с Политикой конфиденциальности</span>
              </div>
              <Link href="/profile">
                <a className={s.submit}>Войти</a>
              </Link>
              {/*<button type="submit" className={s.submit}>Войти</button>*/}
              <Link href="/reg">
                <a className={s.reg}>Зарегистрироваться</a>
              </Link>
            </>
          )
        }

      </FormContainer>
    </div>
  );
};
