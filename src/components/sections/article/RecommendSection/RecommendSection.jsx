import React from "react";
import { Product } from "components/Product/Product";
import { Section } from "components/layout/Section/Section";
import { Slider } from "components/common/Slider/Slider";
import s from "./RecommendSection.module.scss";

const sliderParams = {
  slider: {
    slidesPerView: "auto",
    slidesPerGroup: 1,
    spaceBetween: 0,
    slideClass: "product_slide",
    breakpoints: {
      767: {
        slidesPerView: 2.002, // fix border visible
        slidesPerGroup: 2,
      },
      1199: {
        slidesPerView: 3.002, // fix border visible
        slidesPerGroup: 3,
      }
    }
  }
};

export const RecommendSection = ({ products }) => (
  <Section>
    <h3>Рекомендуем наши сыры</h3>
    <div className={s.recommend}>
        <Slider
          slides={products}
          params={sliderParams}
        >
          <Product additionClass='card_slider'/>
        </Slider>
      </div>
  </Section>
);


