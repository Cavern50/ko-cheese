import React from "react";
import parse from "html-react-parser";
import {
  Time, Persons
} from "components/SVG/ArticleIcons";

import { Section } from "components/layout/Section/Section";
import s from "./IntroSection.module.scss";

// eslint-disable-next-line import/prefer-default-export
export const IntroSection = ({ article }) => {
    const { name, text, time, persons, image, ingredients } = article;
    return (
      <Section margin='small'>
        <h1 className={s.title}>{name}</h1>
        <p className={s.description}>
          {text}
        </p>
        <div className={s.info}>
          <div className={s.field}>
          <span className={s.label}>
            Время приготовления
          </span>
            <div className={s.box}>
              <Time/>
              <span className={s.value}>{time}</span>
            </div>
          </div>
          <div className={s.field}>
          <span className={s.label}>
            Порция на:
          </span>
            <div className={s.box}>
              <Persons/>
              <span className={s.value}>{persons}</span>
            </div>
          </div>
        </div>
        <img src={image} alt="" className={s.image}/>
        {
          ingredients && <div className={s.ingredients}>
            <h2>Ингредиенты</h2>
            <div className={s.content}>
              {ingredients && parse(ingredients)}
            </div>
          </div>
        }
      </Section>
    );
  }
;
