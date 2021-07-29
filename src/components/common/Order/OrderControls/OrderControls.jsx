import React from "react";
import { RepeatIcon, ReplaceIcon } from "components/SVG/Icons";
import s from "./OrderControls.module.scss";


export const OrderControls = ({ formProps }) => {
  console.log();
  return (
    <>
      <button type="button" className={s.more}>показать еще +</button>
      <div className={s.controls}>
        <button type="button" className={s.repeat}>
          <RepeatIcon/>
          <span>Повторить заказ</span>
        </button>
        <button type="button" className={s.return}>
          <ReplaceIcon/>
          <span>Заменить товар</span>
        </button>
        <button type="button" onClick={() => formProps.handleSubmit(alert(formProps.values))}
                className={s.remove}>Удалить товар
        </button>
      </div>
    </>
  );
};

