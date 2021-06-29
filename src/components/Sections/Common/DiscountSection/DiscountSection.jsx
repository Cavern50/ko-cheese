import React from "react";
import clsx from 'clsx';
import Link from "next/link";

import s from "./DiscountSection.module.scss";
import g from "src/styles/Main.module.scss";

export const DiscountSection = () => {
   return (
      <section className={clsx(s.discount)}>
         <div className={clsx(g.wrapper)}>
            <div className={clsx(s.container)}>
               <div className={clsx(s.promo)}>
                  <h3 className={clsx(s.before)}>Скидка до</h3>
                  <span className={clsx(s.offer)}>10%</span>
                  <h3 className={clsx(s.info)}>
                     <span className={clsx(s.category)}>на сыр</span>
                     <span className={clsx(s.name)}> Валансе</span>
                  </h3>
                  <div className={clsx(s.date)}>До 15.05.2021</div>
                  <Link href="/">
                     <a className={clsx(s.link)}>Посмотреть</a>
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
};
