import React, {useState} from "react";
import clsx from "clsx";
import Link from "next/link";
import { allTastes } from "constants.js";
import { useRouter } from "next/router";
import { FavoriteIcon, PurchaseIcon } from "components/SVG/Icons";

import g from "styles/Main.module.scss";
import s from "./Product.module.scss";

export const Product = (props) => {
  const {
    statuses,
    image,
    name,
    addition,
    weight,
    price,
    tastes,
    additionClass,
    id
  } = props;
  const [fav, setFav] = useState(false);
  const handleSetFav = (e) =>{
    e.stopPropagation();
    setFav(!fav)
  }
  return (
      <Link href={`/products/${id}`}>
        <div className={clsx(s.card, additionClass && s[additionClass])}>
          <div className={s.buttons}>
            <button type="button" className={s.control} onClick={handleSetFav}>
              <FavoriteIcon className={clsx(fav && s.fav)}/>
            </button>
            <button type="button" className={s.control} onClick={(e) => e.stopPropagation()}>
              <PurchaseIcon/>
            </button>
          </div>

          <span className={clsx(g.status, g[statuses[0].status])}>{statuses[0].name}</span>
          <img src={image} alt={name} className={s.image}/>
          <h3 className={s.name}>{name}</h3>
          <span className={s.addition}>{addition}</span>
          <div className={s.info}>
            <div className={s.well}>
              {tastes?.length && tastes.map((taste) => allTastes[taste])}
            </div>
            <span className={s.weight}>{weight}</span>
          </div>
          <h3 className={s.price}>{price} руб.</h3>
          {/*TODO: Сказали убрать в цссе тоже закоментил
          <span className={s.more}>Подробнее</span>*/}
        </div>
      </Link>
  );
};

