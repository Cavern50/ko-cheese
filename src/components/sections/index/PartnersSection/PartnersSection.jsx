import React from "react";
import { Section } from "components/layout/Section/Section";
import { Wrapper } from "components/layout/Wrapper/Wrapper";
import { Partner } from "components/common/Partner/Partner";
import s from "./PartnersSection.module.scss";
import { windowSize } from "constants.js";
import { Slider } from "components/common/Slider/Slider";

const partners = [
  {
    url: "static/img/content/partners/azbuka.png"
  },
  {
    url: "static/img/content/partners/vkuswill.png"
  },
  {
    url: "static/img/content/partners/globus.png"
  },
  {
    url: "static/img/content/partners/metro.png"
  },
  {
    url: "static/img/content/partners/carousel.png"
  },
  {
    url: "static/img/content/partners/auchan.png"
  },
  {
    url: "static/img/content/partners/gorunich.png"
  },
  {
    url: "static/img/content/partners/coffee.png"
  }
];

const sliderParams = {
  slider: {
    slidesPerView: "auto",
    slidesPerGroup: 1,
    spaceBetween: 0,
    slideClass: 'borderSlide'
  },
  nav: {
    counterBottom: true,
    additionClass: "arrowsRight"
  }
};


export const PartnersSection = () => (
  <Section>
    <Wrapper>
      <h2 className={s.title}>Партнеры</h2>
      {
        windowSize >= 768 ?
          <div className={s.grid}>
            {partners.map((partner) => (
              <Partner key={partner} url={partner}/>
            ))}
          </div> :
          <Slider params={sliderParams} slides={partners}>
            <Partner/>
          </Slider>
      }
    </Wrapper>
  </Section>
);
