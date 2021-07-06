import React from 'react';
import clsx from 'clsx';

import { PurchaseControl } from '../PurchaseControl/PurchaseControl';
import { FavoriteControl } from '../FavoriteControl/FavoriteControl';

import s from './Purchase.module.scss';

export const Purchase = ({ inFavorite, inCart }) => {
  return (
    <div className={clsx(s.container)}>
      <div>
        <img src="/static/img/content/camamberGoat.png" alt="" className={clsx(s.image)} />
      </div>
      <div className={clsx(s.info)}>
        <h3 className={clsx(s.title)}>Камамбер козий</h3>
        <div className={clsx(s.addition)}>с белой плесенью</div>
        <div className={clsx(s.cost)}>
          <span className={clsx(s.price)}>500 руб.</span>
          <span className={clsx(s.weight)}>200 гр.</span>
        </div>
        {inFavorite && <FavoriteControl/>}
        {inCart && <PurchaseControl inCart={true} />}
      </div>
    </div>
  );
};
