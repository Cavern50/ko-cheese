import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { allStatus, allTastes } from "src/constants";

import s from "./Product.module.scss";
import g from "src/styles/Main.module.scss";

export const Product = ({
   statuses,
   image,
   name,
   addition,
   weight,
   price,
   link,
   tastes,
   additionClass,
   id
}) => {
   console.log(statuses)
   return (
      <div className={clsx(s.card, additionClass && s[additionClass])}>
         <button type="button" className={clsx(s.add)}>
            +
         </button>
         <span className={clsx(g.status, g[statuses[0].status])}>
            {statuses[0].name}
         </span>
         <img src={image} alt={name} className={clsx(s.image)} />
         <h3 className={clsx(s.name)}>{name}</h3>
         <span className={clsx(s.addition)}>{addition}</span>
         <div className={clsx(s.info)}>
            <div className={clsx(s.well)}>
               {tastes?.length && tastes.map((taste) => allTastes[taste])}
            </div>
            <span className={clsx(s.weight)}>{weight}</span>
         </div>
         <h3 className={clsx(s.price)}>{price} руб.</h3>
         <Link href={`/products/${id}`}>
            <a className={clsx(s.more)}>Подробнее</a>
         </Link>
      </div>
   );
};
