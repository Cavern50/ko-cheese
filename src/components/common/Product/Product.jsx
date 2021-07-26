import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { allTastes } from "constants.js";
import { useRouter } from "next/router";

import g from "styles/Main.module.scss";
import s from "./Product.module.scss";

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
    <Link href={`/products/${id}`}>
      <div className={clsx(s.card, additionClass && s[additionClass])}>
        <button type="button" className={s.add} onClick={(e) => e.stopPropagation()}>
          <svg width="18" height="23" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.3916 15.6611H5.61621V16.8574H8.3916V20.002H9.66309V16.8574H12.4385V15.6611H9.66309V12.7559H8.3916V15.6611Z"
              fill="#8D9A9A"/>
            <rect x="0.5" y="7.5" width="17" height="18" stroke="#8D9A9A"/>
            <path d="M14 10V6C14 3.23858 11.7614 1 9 1V1C6.23858 1 4 3.23858 4 6V10" stroke="#8D9A9A"/>
          </svg>
        </button>
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
      </div>
    </Link>
  );
};

