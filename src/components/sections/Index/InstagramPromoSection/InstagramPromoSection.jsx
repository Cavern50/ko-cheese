import React from "react";
import s from './InstagramPromoSection.module.scss';
import g from 'src/styles/Main.module.scss';
import { Instagram } from "@components/common/Instagram/Instagram";

export const InstagramPromoSection = ({url}) => {
   return (
      <section className={s.promo}>
         <div className={g.wrapper}>
            <h2 className={s.title}>Instagram</h2>
            <a href={url} target="_blank" className={s.subscribe}>Подписаться на нас</a>
         </div>
      </section>
   );
};

