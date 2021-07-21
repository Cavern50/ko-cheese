import React from "react";

import s from "./Step.module.scss";

export const Step = ({ index, text, image }) => (
  <div className={s.container}>
    <div className={s.info}>
      {/* eslint-disable-next-line no-param-reassign,no-plusplus */}
      <span className={s.step}>Шаг <span className={s.index}>{++index}</span></span>
      <p className={s.text}>{text}</p>
    </div>
    <img className={s.image} src={image} alt={text}/>
  </div>
);
