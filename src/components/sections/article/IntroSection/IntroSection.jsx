import React from 'react';
import { BackButton } from '@components/common/Buttons/BackButton/BackButton';
import { Vk, Telegram, Mail, Time, Persons } from '@components/SVG/ArticleIcons';

import s from './IntroSection.module.scss';
import { WrapperNarrow } from '@components/layout/WrapperNarrow/WrapperNarrow';

export const IntroSection = () => {
  return (
    <div className={s.container}>
      <div className={s.sticky}>
        <div className={s.controls}>
          <BackButton/>
          <div className={s.share}>
            <button className={s.social}>
              <Vk/>
            </button>
            <button className={s.social}>
              <Telegram/>
            </button>
            <button className={s.social}>
              <Mail/>
            </button>
          </div>
        </div>
      </div>
      <WrapperNarrow>
        <h1 className={s.title}>Французский сырный соус</h1>
        <p className={s.description}>Изумительный рецепт, который надо иметь в своей копилке. Подходит для любых быстрых
          закусок, можно намазывать на поджаренный хлеб или просто испеченные булочки. </p>
        <div className={s.info}>
          <div className={s.field}>
            <span className={s.label}>
              Время приготовления
            </span>
            <div className={s.box}>
              <Time/>
              <span className={s.value}>30 минут</span>
            </div>
          </div>
          <div className={s.field}>
            <span className={s.label}>
              Порция на:
            </span>
            <div className={s.box}>
              <Persons/>
              <span className={s.value}>2 - 3 человека</span>
            </div>
          </div>
        </div>
        <img src="/static/img/content/recipe-1.jpg" alt="" className={s.image}/>
        <div className={s.ingredients}>
          <h2>Ингредиенты</h2>
          <div className={s.content}>
            — 8-9 шт средних шампиньонов;
            <br/>
            — ½ помидора;
            <br/>
            — 50 г сыра;
            <br/>
            — зубчик чеснока по желанию;
            <br/>
            — 2-3 веточки петрушки;
            <br/>
            — перец, специи по вкусу.
          </div>
        </div>
      </WrapperNarrow>
    </div>
  );
};

