import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { allTastes , BASE_SITE_URL } from "/src/constants.js";

import g from "styles/Main.module.scss";
import s from "components/Product/Product.module.scss";
import { ControlButtons } from "components/buttons/ControlButtons/ControlButtons";

export const Product = (props) => {
  const {
    status,
    previewImage,
    name,
    addition,
    weight,
    price,
    tastes,
    additionClass,
    id
  } = props;

  const productProps = {
    id, previewImage, name, addition, price, weight, count: 1
  };

  return (

    <div className={clsx(s.card, additionClass && s[additionClass])}>
      <ControlButtons productProps={productProps}/>
      <span className={clsx(s.status, status ? s.stock : s.outStock)}>{status ? 'В наличии' : 'Нет в наличии'}</span>
      <img width="300px" height="160px" src={BASE_SITE_URL + previewImage} alt={name} className={s.image}/>
      <h3 className={s.name}>{name}</h3>
      <span className={s.addition}>{addition}</span>
      <div className={s.info}>
        <div className={s.well}>
          {tastes?.length && tastes.map((taste) => allTastes[taste])}
        </div>
        <span className={s.weight}>{weight}</span>
      </div>
      {/* eslint-disable-next-line radix */}
      <h3 className={s.price}>{parseInt(price)} руб.</h3>
      <Link href={`/products/${id}`}><a className={s.link}/></Link>
    </div>

  );
};

