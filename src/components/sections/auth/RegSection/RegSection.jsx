import React from "react";
import { Input } from "components/forms/Input/Input";
import Link from "next/link";
import { FormContainer } from "components/forms/FormContainer/FormContainer";
import s from "../AuthSection/AuthSection.module.scss";
import { useDispatch } from "react-redux";
import { privacyChangeModalState } from "redux/slices/modals";
import APIBitrix from "api/APIBitrix";
import { useRouter } from 'next/router'

export const RegSection = () => {

  const dispatch = useDispatch();
  const router = useRouter();
  const [confirmField, setConfirmField] = React.useState(false);
  const [confirmData, setConfrimData] = React.useState({});
  const privacyModalHandler = () => {
    dispatch(privacyChangeModalState(true));
  };

  const initialValues = {
    phone: "",
    code: "",
    policy: false
  };

  const regHandler = (value) => {
    const { phone, policy } = JSON.parse(value);
    console.log(value);
    if (policy) {
      APIBitrix.post("user/new-user/", {
        phone
      }).then(res => {
        if (res.user_id) {
          setConfirmField(true);
          setConfrimData(res);
        } else {
          console.log(res);
        }
      });
    } else {
      alert("Пожалуйста, ознакомьтесь с политикой конфиденциальности");
    }
  };

  const confirmHandler = (value) => {
    const { user_id } = confirmData;
    const { code } = JSON.parse(value);
    APIBitrix.post("user/new-user/check/", {
      user_id,
      code,
    }).then(res => {
      console.log(res);
      // router.push('/profile');
    });
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Вход</h2>
      <FormContainer
        initialValues={initialValues}
        className="loginForm"
        submitHandler={confirmField ? confirmHandler : regHandler}
      >
        {() =>
          (
            <>
              {
                !confirmField ?
                  <Input id="phone" label="Номер телефона" name="phone" type="text"/>
                  :
                  <Input id="code" label="Код подтверждения" name="code" type="text"/>
              }
              <div className={s.politics}>
                <Input id="policy" name="policy" type="checkbox" additionClass="checkbox"/>
                <div className={s.label}>
                  <span>Я ознакомлен(-а)</span>
                  <button type="button" className={s.privacy}
                          onClick={privacyModalHandler}>
                    с политикой конфиденциальности
                  </button>
                </div>
              </div>
              <button className={s.submit}
                      type="submit">
                Зарегистрироваться
              </button>
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
