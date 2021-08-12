import React from 'react';
import g from 'styles/Main.module.scss';
import { Wrapper } from 'components/layout/Wrapper/Wrapper';
import { Telegram } from 'components/SVG/ArticleIcons';
import s from './PromoSection.module.scss';

export const PromoSection = () => (
  <section className={s.promo}>
    <Wrapper style={{ height: '100%' }}>
      <div className={s.container}>
        <span className={s.intro}>Изысканность и свежесть</span>
        <h1 className={s.title}>
          Премиальные молочные продукты
          <br />
          <span className={g.italic}> и сыры с благородной плесенью</span> <br />
          ручной работы
        </h1>
        <div className={s.footer}>
          <a href="" className={s.link}>
            <span>Наш телеграм канал</span>
            {<Telegram />}
          </a>
        </div>
      </div>
    </Wrapper>
  </section>
);
