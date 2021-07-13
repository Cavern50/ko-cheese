import React from "react";
import Link from "next/link";
import {
  RedWine,
  WhiteWine,
  Vegetables,
  Fruits
} from "components/SVG/TastesSVG/TastesSVG";
import s from "./NewTaste.module.scss";


export const NewTaste = ({ href, name, addition, image, style, tastes }) => {
  const allTastes = {
    "red-wine": <RedWine key={0}/>,
    "white-wine": <WhiteWine key={1}/>,
    vegetables: <Vegetables key={2}/>,
    fruits: <Fruits key={3}/>
  };
  const countryFlags = {
    French: "/img/icons/french-flag.jpg",
    Russian: "/img/icons/rus-flag.jpg"
  };

  return (
    <Link href={href}>
      <a>
        <div className={s.card}>
          <div className={s.body}>
            <img src={image} alt={name} className={s.image}/>
            <div>
              {!!style && (
                <div className={s.style}>
                  <span className={s.country}>{style} style</span>
                  <img
                    src={countryFlags[style]}
                    alt={style}
                    className={s.flag}
                  />
                </div>
              )}
            </div>

            {!!tastes.length && (
              <div className={s.well}>
                {tastes.map((taste, i) => allTastes[taste])}
              </div>
            )}
          </div>
          <h3 className={s.name}>{name}</h3>
          <span className={s.addition}>{addition}</span>
        </div>
      </a>
    </Link>
  );
};
