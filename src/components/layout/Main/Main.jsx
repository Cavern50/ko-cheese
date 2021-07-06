import React from 'react';
import clsx from 'clsx';

import s from './Main.module.scss';

export const Main = ({ children, router }) => {
  const { isPromoPage, isPurchasePage } = {
    isPromoPage: router.pathname === '/',
    isPurchasePage: router.pathname === '/purchase'
  };
  return (
    <main className={clsx(s.main, isPromoPage && s.main_promo, isPurchasePage && s.main_divided)}>
      {children}
    </main>
  );
};
