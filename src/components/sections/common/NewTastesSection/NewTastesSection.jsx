import React from "react";

import { Slider } from "components/common/Slider/Slider";
import { Section } from "components/layout/Section/Section";
import { Wrapper } from "components/layout/Wrapper/Wrapper";
import { windowWidth} from "hooks.js";
import { NewTaste } from "./NewTaste/NewTaste";


export const NewTastesSection = ({ products }) => {
  console.log(windowWidth())
  const sliderParams = {
    slider: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
      breakpoints: {
        1023: {
          slidesPerView: 3,
          slidesPerGroup: 3
        },
        1201: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 50
        }
      }
    },
    nav: {
      counter: true,
      counterBottom: windowWidth() <= 1200
    }
  };
  return (
    <Section>
      <Wrapper>
        <Slider
          title="Новые вкусы"
          slides={products}
          params={sliderParams}
        >
          <NewTaste/>
        </Slider>
      </Wrapper>
    </Section>
  );
};


