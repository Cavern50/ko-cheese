import React from "react";
import s from "./Partner.module.scss";

export const Partner = ({url}) => {
  return (
    <div className={s.item}>
      <img src={url} alt="" className={s.image}/>
    </div>
  );
};

