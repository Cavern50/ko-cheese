import React from "react";
import clsx from "clsx";
import Link from "next/link";
import s from "./Recipe.module.scss";
export const Recipe = ({ image, name, text, url }) => {
   return (
      <div className={clsx(s.card)}>
         <img src={image} alt="" className={clsx(s.image)} />
         <h3 className={clsx(s.name)}>{name}</h3>
         <p className={clsx(s.text)}>{text}</p>
         <Link href={url} > 
            <a className={clsx(s.link)}>
               Посмотреть
            </a>
         </Link>
      </div>
   );
};
