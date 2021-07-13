import React from 'react';
import Link from 'next/link';
import s from './Recipe.module.scss';

export const Recipe = ({ image, name, text, url, id }) => (
    <div className={s.card}>
      <img src={image} alt="" className={s.image}/>
      <h3 className={s.name}>{name}</h3>
      <p className={s.text}>{text}</p>
      {url && <Link href={`/articles/${id}`}>
        <a className={s.link}>
          Посмотреть
        </a>
      </Link>}
    </div>
  );
