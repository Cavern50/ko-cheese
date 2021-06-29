import React from "react";
import clsx from 'clsx';
import Link from "next/link";
import {
   RedWine,
   WhiteWine,
   Vegetables,
   Fruits,
} from "@components/SVG/TastesSVG/TastesSVG";
import s from "./NewTaste.module.scss";
import g from "src/styles/Main.module.scss";

export const NewTaste = ({ href, name, addition, image, style, tastes }) => {
   const allTastes = {
      "red-wine": <RedWine key={0}/>,
      "white-wine": <WhiteWine key={1}/>,
      vegetables: <Vegetables key={2}/>,
      fruits: <Fruits key={3}/>,
   };
   const countryFlags = {
      French: "/img/icons/french-flag.jpg",
      Russian: "/img/icons/rus-flag.jpg",
   };

   return (
      <Link href={href}>
         <a>
            <div className={clsx(s.card)}>
               <div className={clsx(s.body)}>
                  <img src={image} alt={name} className={clsx(s.image)} />
                  <div>
                     {!!style && (
                        <div className={clsx(s.style)}>
                           <span className={clsx(s.country)}>{style} style</span>
                           <img
                              src={countryFlags[style]}
                              alt={style}
                              className={clsx(s.flag)}
                           />
                        </div>
                     )}
                  </div>

                  {!!tastes.length && (
                     <div className={clsx(s.well)}>
                        {tastes.map((taste, i) => allTastes[taste])}
                     </div>
                  )}
               </div>
               <h3 className={clsx(s.name)}>{name}</h3>
               <span className={clsx(s.addition)}>{addition}</span>
            </div>
         </a>
      </Link>
   );
};
