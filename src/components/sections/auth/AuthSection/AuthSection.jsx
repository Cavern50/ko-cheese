import React from "react";
import { Wrapper } from "components/layout/Wrapper/Wrapper";
import { Input } from "components/common/Input/Input";
import { Checkbox } from "components/common/Checkbox/Checkbox";
import Link from "next/link";
import s from "./AuthSection.module.scss";

export const AuthSection = () => {
  console.log(1);
  const [checked, setChecked] = React.useState(false);

  return (
    <Wrapper>
      <div className={s.container}>
        <h2 className={s.title}>Вход</h2>
        <form action="" className={s.form}>
          <Input id="phone" label="Телефон" name="phone" type="phone"/>
          <Input id="password" label="Пароль" name="password" type="password"/>
          <div className={s.checkbox}>
            <input type="hidden" value={checked}/>
            <Checkbox checked={checked} setChecked={setChecked}/>
            <span className={s.label}>Я ознакомлен(-а) с Политикой конфиденциальности</span>
          </div>
          <button type="submit" className={s.submit}>Войти</button>
          <Link href="/reg">
            <a className={s.reg}>Зарегистрироваться</a>
          </Link>
        </form>
      </div>
    </Wrapper>
  );
};

