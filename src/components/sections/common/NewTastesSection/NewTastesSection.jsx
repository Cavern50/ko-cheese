import React from "react";

import { Slider } from "components/common/Slider/Slider";

import { Section } from "components/layout/Section/Section";
import { Wrapper } from "components/layout/Wrapper/Wrapper";

import { NewTaste } from "./NewTaste/NewTaste";

const newProducts = [
  {
    href: "/",
    image: "img/content/slide-1.jpg",
    name: "Камамбер козий",
    addition: "с белой плесенью",
    style: "French",
    tastes: ["red-wine", "white-wine", "fruits"]
  },
  {
    href: "/",
    image: "img/content/slide-1.jpg",
    name: "Джем абрикосовый",
    addition: "с кленовыми шишками",
    tastes: ["red-wine", "vegetables", "fruits"]
  },
  {
    href: "/",
    image: "img/content/slide-1.jpg",
    name: "Брюш козий",
    addition: "с белой плесенью",
    style: "Russian",
    tastes: []
  },
  {
    href: "/",
    image: "img/content/slide-1.jpg",
    name: "Камамбер козий",
    addition: "с белой плесенью",
    style: "French",
    tastes: ["red-wine", "white-wine", "fruits"]
  },
  {
    href: "/",
    image: "img/content/slide-1.jpg",
    name: "Джем абрикосовый",
    addition: "с кленовыми шишками",
    tastes: ["red-wine", "vegetables", "fruits"]
  },
  {
    href: "/",
    image: "img/content/slide-1.jpg",
    name: "Брюш козий",
    addition: "с белой плесенью",
    style: "Russian",
    tastes: []
  },
  {
    href: "/",
    image: "img/content/slide-1.jpg",
    name: "Камамбер козий",
    addition: "с белой плесенью",
    style: "French",
    tastes: ["red-wine", "white-wine", "fruits"]
  },
  {
    href: "/",
    image: "img/content/slide-1.jpg",
    name: "Джем абрикосовый",
    addition: "с кленовыми шишками",
    tastes: ["red-wine", "vegetables", "fruits"]
  },
  {
    href: "/",
    image: "img/content/slide-1.jpg",
    name: "Брюш козий",
    addition: "с белой плесенью",
    style: "Russian",
    tastes: []
  }
];
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
export const NewTastesSection = () => (
  <Section>
    <Wrapper>
      <Slider
        title={"Новые вкусы"}
        slides={newProducts}
        params={sliderParams}
      >
        <NewTaste/>
      </Slider>
    </Wrapper>
  </Section>

);
