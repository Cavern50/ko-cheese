import React from "react";
import s from "components/common/Order/OrderHeader/OrderHeader.module.scss";


const data = [
  {
    id: 1,
    label: "Номер заказа:",
    value: "234519"
  },
  {
    id: 2,
    label: "Дата:",
    value: "12.04.2021"
  },
  {
    id: 3,
    label: "Статус:",
    value: "Завершен",
    statusId: 25
  },
  {
    id: 4,
    label: "Товаров:",
    value: 2
  }, {
    id: 5,
    label: "Цена:",
    value: "2245 руб."
  }
];

export const OrderHeader = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.row}>
        {data.map(field => (
          <div className={s.field} key={field.id}>
            <span className={s.label}>{field.label}</span>
            {" "}
            <span className={s.value}>{field.value}</span>
          </div>
        ))}
      </div>
      <span className={s.details}>Детали заказа</span>
      <button type="button" className={s.close}/>
    </div>
  );
};

