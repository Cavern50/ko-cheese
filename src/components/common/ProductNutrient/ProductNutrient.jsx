import React from "react";
import s from "./ProductNutrient.module.scss";

export const ProductNutrient = ({title, value}) => {
  return (
    <div className={s.element}>
      <span className={s.value}>{title}: {value}</span>
    </div>
  );
};

