import React from "react";
import { Slider } from "components/common/Slider/Slider";
import { Recipe } from "components/common/Recipe/Recipe";
import { Section } from "components/layout/Section/Section";
import { Wrapper } from "components/layout/Wrapper/Wrapper";
import { windowWidth } from "hooks";


export const RecipesSliderSection = ({ recipes, title }) => {
    const sliderParams = {
      slider: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
        slideClass: "recipe_slide",
        breakpoints: {
          1023: {
            slidesPerView: 3,
            slidesPerGroup: 3
          },
        }
      },
      nav: {
        counter: true,
        counterBottom: windowWidth() <= 1200,
        seeAll: {
          visible: windowWidth() >= 1200,
          position: "center",
          link: "/articles"
        }
      }
    };

    return (
      <Section>
        <Wrapper>
          <Slider
            slides={recipes}
            params={sliderParams}
            title={title}
          >
            <Recipe/>
          </Slider>
        </Wrapper>
      </Section>
    );
  }
;
