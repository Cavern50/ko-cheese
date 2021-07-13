import React from "react";
import g from "styles/Main.module.scss";
import { Slider } from "components/common/Slider/Slider";
import { Recipe } from "components/common/Recipe/Recipe";
import { Section } from "components/layout/Section/Section";

const sliderParams = {
  slider: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 20,
    slideClass: "recipe_slide"
  },
  nav: {
    counter: true,
    seeAll: {
      visible: true,
      position: 'center',
      link: '/articles'
    },
  }
};

export const RecipesSliderSection = ({ recipes, title }) => (
  <Section>
    <div className={g.wrapper}>
      <Slider
        slides={recipes}
        params={sliderParams}
        title={title}
      >
        <Recipe/>
      </Slider>
      <div>{/*  */}</div>
    </div>
  </Section>
);
