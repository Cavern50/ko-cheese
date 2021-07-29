import React from "react";
import { Input } from "components/forms/Input/Input";
import s from "./OrderItem.module.scss";

export const OrderItem = (data) => {
  const { image, name, addition, price, weight, count = 2, controls } = data;
  return (
    <div className={s.container}>
      <div className={s.info}>
        {controls && <Input type="checkbox" additionClass="checkbox" name={`${name} ${addition}`} id={`${name} ${addition}`}/>}
        <img src={image} alt={name} className={s.image}/>
        <div>
          <h3>{name}</h3>
          <div className={s.addition}>{addition}</div>
          <span className={s.price}>{price} руб.</span>
          <span className={s.weight}>{weight}</span>
        </div>
      </div>
      <span className={s.count}>{count} шт.</span>
    </div>
  );
};

