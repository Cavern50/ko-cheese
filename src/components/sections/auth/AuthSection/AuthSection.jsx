import React from "react";
import { Input } from "components/forms/Input/Input";
import Link from "next/link";
import { FormContainer } from "components/forms/FormContainer/FormContainer";
import { InputPhone } from "components/forms/InputPhone/InputPhone";
import { useDispatch, useSelector } from "react-redux";
import { addUserId, setLogged, setUserInfo, userIdSelector } from "redux/slices/user";
import { AUTH_VALIDATION_SCHEMA } from "constants.js";
import APIAuth from "api/APIAuth";
import { useRouter } from "next/router";
import APIBitrix from "api/APIBitrix";
import s from "./AuthSection.module.scss";

const initialValues = {
  phone: ""
};

export const AuthSection = () => {

  const router = useRouter();

  const [confirmField, setConfirmField] = React.useState(false);
  const [formData, setFormData] = React.useState({});
  const userId = useSelector(userIdSelector);
  const dispatch = useDispatch();

  const regHandler = async ({ phone, ...rest }) => {
    phone = phone.replace(/\s+/g, "");
    const response = await APIAuth.reg(phone);

    setFormData(response);
    setConfirmField(true);
    console.log(phone);
  };

  const confirmHandler = async (userData, verification) => {
    userData = {
      ...userData,
      fuser_id: userId
    };
    const response = await APIAuth.confirm(userData, verification);
    await dispatch(addUserId(userData.user_id));
    const userInfo = await APIBitrix.post('user/personal-data/', {
      user_id: userData.user_id
    });
    await dispatch(setUserInfo(userInfo));
    localStorage.setItem('fuser_id', userData.user_id);
    await dispatch(setLogged(true));
    router.push("/profile");
    console.log(userData, verification);
  };


  return (
    <div className={s.container}>
      <h2 className={s.title}>Вход</h2>
      <FormContainer
        validationSchema={AUTH_VALIDATION_SCHEMA}
        initialValues={initialValues}
        validateOnChange={false}
        validateOnBlur={false}
        className="loginForm"
        submitHandler={(values) => {
          confirmField ?
            confirmHandler(formData, values) : regHandler(values);
        }
        }
      >
        {() =>
          (
            <>
              {
                !confirmField ?
                  <InputPhone label="Номер телефона" id="phone" name="phone"/>
                  :
                  // <Input id="phone" label="Номер телефона" name="phone" type="text"/>
                  <Input id="code" label="Код подтверждения" name="code" type="text" autoFocus/>
              }
              <button type="submit" className={s.submit}>Войти</button>
              <Link href="/registration">
                <a className={s.reg}>Зарегистрироваться</a>
              </Link>
            </>
          )
        }

      </FormContainer>
    </div>
  );
};
