import React from "react";
import s from "components/Order/OrderHeader/OrderHeader.module.scss";



export const OrderHeader = ({data}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.row}>
        {data.length && data.map(field => (
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

