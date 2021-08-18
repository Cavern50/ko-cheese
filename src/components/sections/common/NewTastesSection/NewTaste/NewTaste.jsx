import React, {useState} from 'react';
import Link from 'next/link';
import { RedWine, WhiteWine, Vegetables, Fruits } from 'components/SVG/TastesSVG/TastesSVG';
import { FavoriteIcon, PurchaseIcon } from 'components/SVG/Icons';
import s from './NewTaste.module.scss';

const allTastes = {
  'red-wine': <RedWine key={0} />,
  'white-wine': <WhiteWine key={1} />,
  vegetables: <Vegetables key={2} />,
  fruits: <Fruits key={3} />
};
const countryFlags = {
  french: '/static/img/icons/french-flag.jpg',
  russian: '/static/img/icons/rus-flag.jpg'
};
const [fav, setFav] = useState(false);
const handleSetFav = (e) =>{
  e.stopPropagation();
  setFav(!fav)
}
export const NewTaste = ({ id, name, addition, image, style, tastes }) => (
  <div className={s.card}>
    <div className={s.body}>
      <div className={s.buttons}>
        <button type="button" className={s.control} onClick={handleSetFav}>
          <FavoriteIcon className={clsx(fav && s.fav)}/>
        </button>
        <button type="button" className={s.control} onClick={(e) => e.stopPropagation()}>
          <PurchaseIcon />
        </button>
      </div>
      <img src={image} alt={name} className={s.image} />
      <div>
        {/* TODO: SERGEY,  В НОВОМ МАКЕТЕ ЭТОГО НЕТ, ПОТОМ САМ УДАЛИШЬ, ЕСЛИ НЕ НАДО */}
        {/* {!!style && (
              <div className={s.style}>
                <span className={s.country}>{style} style</span>
                <img src={countryFlags[style]} alt={style} className={s.flag} />
              </div>
            )} */}
      </div>
      {/* TODO: SERGEY,  В НОВОМО МАКЕТЕ ЭТОГО НЕТ, ПОТОМ САМ УДАЛИШЬ, ЕСЛИ НЕ НАДО */}
      {/* {!!tastes.length && (
            <div className={s.well}>{tastes.map((taste, i) => allTastes[taste])}</div>
          )} */}
    </div>
    <Link href={`products/${id}`}>
      <a className={s.link}>
        <h3 className={s.name}>{name}</h3>
        <span className={s.addition}>{addition}</span>
      </a>
    </Link>
  </div>
);