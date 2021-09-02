import React from "react";
import { ProfileSteps } from "components/common/Profile/ProfileSteps/ProfileSteps";
import { Order } from "components/Order/Order";
import { FormContainer } from "components/forms/FormContainer/FormContainer";
import { Input } from "components/forms/Input/Input";
import { Field } from "formik";
import { DropdownCustom } from "components/common/DropdownCustom/DropdownCustom";
import { InputPhoto } from "components/forms/InputPhoto/InputPhoto";
import s from "./ProfileReturn.module.scss";

const initialValues = {
  name: "Сергей",
  phone: +79271015487
};
const returnReasonOptions = [
  "Товар просрочен", "Ненадлежащее качество товара", "Я передумал"
];

const salePoints = [
  "г. Москва, ул. Академика Королева, 12", "г. Москва, ул. Степана Разина, 3", "г. Москва, ул. Метро, 34"
]

export const ProfileReturn = () => {
  console.log();
  return (
    <>
      <ProfileSteps/>
      <Order/>
      <h3 className={s.title}>Заявление на замену</h3>
      <FormContainer initialValues={initialValues}>
        {(formProps) => (
          <div className={s.container}>
            <div className={s.block}>
              <Input label="*Телефон" type="number" id="phone" name="phone"/>
              <Input label="*Имя" type="text" id="name" name="name"/>
              <Input label="Фамилия" type="text" id="surname" name="surname"/>
              <Input label="Е-mail" type="text" id="email" name="email"/>
              <DropdownCustom
                label="*Причина замены"
                placeholder="Выберите причину"
                options={returnReasonOptions}
                name="reason"
                id="reason"/>
              <div className={s.replace}>
                <span className={s.subtitle}>Замена на</span>
                <div className={s.onchange}>
                  <Input id="product" name="replace" value="product" type="radio" additionClass="checkbox"/>
                  <label htmlFor="product" className={s.label}>Товар</label>
                </div>
                <div className={s.onchange}>
                  <Input id="internal" name="replace" value="internal" type="radio" additionClass="checkbox"/>
                  <label htmlFor="internal" className={s.label}>На внутренний счет</label>
                </div>
                <div className={s.onchange}>
                  <Input id="card" name="replace" value="card" type="radio" additionClass="checkbox"/>
                  <label htmlFor="card" className={s.label}>Деньги на карту</label>
                </div>
              </div>
              <Input label="Номер карты" type="number" id="cardNumber" name="cardNumber"/>
              <button type="submit" className={s.submit}>Отправить заявку</button>
            </div>
            <div className={s.block}>
              <span className={s.subtitle}>*Добавить фото чека и продукта</span>
              <div className={s.photos}>
                <InputPhoto id="photo1" name="photo1" className="replace" formProps={formProps}/>
                <InputPhoto id="photo2" name="photo2" className="replace" formProps={formProps}/>
                <InputPhoto id="photo3" name="photo3" className="replace" formProps={formProps}/>
              </div>
              <div className={s.replace}>
                <div className={s.onchange}>
                  <Input id="toCourier" name="return" value="toCourier" type="radio" additionClass="checkbox"/>
                  <label htmlFor="toCourier" className={s.label}>Вернём товар курьеру</label>
                </div>
                <div className={s.onchange}>
                  <Input id="toPoint" name="return" value="toPoint" type="radio" additionClass="checkbox"/>
                  <label htmlFor="toPoint" className={s.label}>Вернём товар на точку продаж</label>
                </div>
              </div>
              <DropdownCustom
                label="Точка продаж"
                placeholder="Выберите точку продаж"
                options={salePoints}
                name="point"
                id="point"/>
            </div>
          </div>
        )}
      </FormContainer>
    </>
  );
};

