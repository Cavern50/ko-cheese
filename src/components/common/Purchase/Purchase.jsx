import React from "react";

import { PurchaseControl } from "../PurchaseControl/PurchaseControl";
import { FavoriteControl } from "../FavoriteControl/FavoriteControl";

import s from "./Purchase.module.scss";

export const Purchase = ({ inFavorite, inCart, inOrder }) => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        {inOrder && <span className={s.count}>10</span>}
        <img src="/static/img/content/camamberGoat.png" alt="" className={s.image}/>
      </div>
      <div className={s.info}>
        <div className={s.block}>
          <h3 className={s.title}>Камамбер козий</h3>
          <div className={s.addition}>с белой плесенью</div>
          <div className={s.cost}>
            <span className={s.price}>500 руб.</span>
            <span className={s.weight}>200 гр.</span>
          </div>
        </div>
        <div className={s.controls}>
          {inFavorite && <FavoriteControl/>}
          {inCart && <PurchaseControl inCart additionClass="inCart"/>}
        </div>
      </div>
    </div>
  );
};
