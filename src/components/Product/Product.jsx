import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { allTastes } from "/src/constants.js";

import g from "styles/Main.module.scss";
import s from "components/Product/Product.module.scss";
import { ControlButtons } from "components/buttons/ControlButtons/ControlButtons";

export const Product = (props) => {
  const {
    statuses,
    image,
    name,
    addition,
    weight,
    price,
    tastes,
    additionClass,
    id
  } = props;
  return (

    <div className={clsx(s.card, additionClass && s[additionClass])}>
      <ControlButtons/>
      <span className={clsx(g.status, g[statuses[0].status])}>{statuses[0].name}</span>
      <img src={image} alt={name} className={s.image}/>
      <h3 className={s.name}>{name}</h3>
      <span className={s.addition}>{addition}</span>
      <div className={s.info}>
        <div className={s.well}>
          {tastes?.length && tastes.map((taste) => allTastes[taste])}
        </div>
        <span className={s.weight}>{weight}</span>
      </div>
      <h3 className={s.price}>{price} руб.</h3>
      <span className={s.more}>Подробнее</span>
      <Link href={`/products/${id}`}><a className={s.link}/></Link>
    </div>

  );
};

