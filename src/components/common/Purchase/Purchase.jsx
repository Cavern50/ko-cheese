import React from "react";

import { BASE_SITE_URL } from "constants.js";
import { PurchaseControl } from "../PurchaseControl/PurchaseControl";
import { FavoriteControl } from "../FavoriteControl/FavoriteControl";

import s from "./Purchase.module.scss";

export const Purchase = ({ inFavorite, inCart, inOrder, params }) => {
  const { previewImage, name, addition, price, weight, countInCart } = params;
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        {inOrder && <span className={s.count}>{countInCart}</span>}
        <img src={BASE_SITE_URL + previewImage} alt="" className={s.image}/>
      </div>
      <div className={s.info}>
        <div className={s.block}>
          <h3 className={s.title}>{name}</h3>
          <div className={s.addition}>{addition}</div>
          <div className={s.cost}>
            <span className={s.price}>{price} руб.</span>
            <span className={s.weight}>{weight}</span>
          </div>
        </div>
        <div className={s.controls}>
          {inFavorite && <FavoriteControl product={params}/>}
          {inCart && <PurchaseControl inCart additionClass="inCart" product={params}/>}
        </div>
      </div>
    </div>
  );
};
