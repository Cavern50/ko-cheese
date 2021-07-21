import React from "react";
import { H1 } from "components/layout/H1/H1";
import s from "./ProfileHeader.module.scss";

export const ProfileHeader = () => {
  console.log(1);
  return (
    <>
      <H1 additionClass="profile">Личный кабинет</H1>
      <header className={s.header}>
        <h3 className={s.title}>Здравствуйте, <span>Сергей</span></h3>
        <div className={s.row}>
          <div className={s.info}>
            <div className={s.field}>
              <span className={s.label}>Скидка:</span>
              <span className={s.value}>5%</span>
            </div>
            <div className={s.field}>
              <span className={s.label}>Баланс:</span>
              <span className={s.value}>320 руб.</span>
            </div>
            <div className={s.field}>
              <span className={s.label}>Всего покупок:</span>
              <span className={s.value}>112</span>
            </div>
            <div className={s.field}>
              <span className={s.label}>Доставка:</span>
              <span className={s.value}>Бесплатно</span>
            </div>
          </div>
          <button type="button" className={s.out} href="#">Выйти</button>
        </div>
      </header>
    </>
  );
};
