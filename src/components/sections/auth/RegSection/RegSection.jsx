import React from "react";
import { Input } from "components/forms/Input/Input";
import Link from "next/link";
import { FormContainer } from "components/forms/FormContainer/FormContainer";
import s from "../AuthSection/AuthSection.module.scss";
import { useDispatch } from "react-redux";
import { privacyChangeModalState } from "redux/slices/modals";

export const RegSection = () => {
  const dispatch = useDispatch();

  const privacyModalHandler = () => {
    dispatch(privacyChangeModalState(true));
  };

  const initialValues = {
    phone: ""
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
              <Input id="email" label="E-mail" name="email" type="text"/>
              <div className={s.politics}>
                <Input id="politics" name="politics" type="checkbox" additionClass="checkbox"/>
                <div className={s.label}>
                  <span>Я ознакомлен(-а)</span>
                  <button type="button" className={s.privacy}
                        onClick={privacyModalHandler}>
                    с политикой конфиденциальности
                  </button>
                </div>
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
