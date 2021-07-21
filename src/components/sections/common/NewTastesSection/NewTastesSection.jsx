import React from "react";

import { Slider } from "components/common/Slider/Slider";

import { Section } from "components/layout/Section/Section";
import { Wrapper } from "components/layout/Wrapper/Wrapper";

import { NewTaste } from "./NewTaste/NewTaste";

const sliderParams = {
  slider: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50
  },
  nav: {
    counter: true
  }
};

export const NewTastesSection = ({ products}) => (
  <Section>
    <Wrapper>
      <Slider
        title={"Новые вкусы"}
        slides={products}
        params={sliderParams}
      >
        <NewTaste/>
      </Slider>
    </Wrapper>
  </Section>

);
