import React from "react";
import clsx from "clsx";
import { Slider } from "@components/Common/Slider/Slider";
import { NewTaste } from "./NewTaste/NewTaste";

import s from "./NewTastesSection.module.scss";
import g from "src/styles/Main.module.scss";

const newProducts = [
   {
      href: "/",
      image: "img/content/slide-1.jpg",
      name: "Камамбер козий",
      addition: "с белой плесенью",
      style: "French",
      tastes: ["red-wine", "white-wine", "fruits"],
   },
   {
      href: "/",
      image: "img/content/slide-1.jpg",
      name: "Джем абрикосовый",
      addition: "с кленовыми шишками",
      tastes: ["red-wine", "vegetables", "fruits"],
   },
   {
      href: "/",
      image: "img/content/slide-1.jpg",
      name: "Брюш козий",
      addition: "с белой плесенью",
      style: "Russian",
      tastes: [],
   },
   {
      href: "/",
      image: "img/content/slide-1.jpg",
      name: "Камамбер козий",
      addition: "с белой плесенью",
      style: "French",
      tastes: ["red-wine", "white-wine", "fruits"],
   },
   {
      href: "/",
      image: "img/content/slide-1.jpg",
      name: "Джем абрикосовый",
      addition: "с кленовыми шишками",
      tastes: ["red-wine", "vegetables", "fruits"],
   },
   {
      href: "/",
      image: "img/content/slide-1.jpg",
      name: "Брюш козий",
      addition: "с белой плесенью",
      style: "Russian",
      tastes: [],
   },
   {
      href: "/",
      image: "img/content/slide-1.jpg",
      name: "Камамбер козий",
      addition: "с белой плесенью",
      style: "French",
      tastes: ["red-wine", "white-wine", "fruits"],
   },
   {
      href: "/",
      image: "img/content/slide-1.jpg",
      name: "Джем абрикосовый",
      addition: "с кленовыми шишками",
      tastes: ["red-wine", "vegetables", "fruits"],
   },
   {
      href: "/",
      image: "img/content/slide-1.jpg",
      name: "Брюш козий",
      addition: "с белой плесенью",
      style: "Russian",
      tastes: [],
   },
];
const sliderParams = {
   slider: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
   },
   nav: {
      counter: true,
   },
};
export const NewTastesSection = () => {
   return (
      <section className={clsx(s.new)}>
         <div className={clsx(g.wrapper)}>
            <Slider
               title={"Новые вкусы"}
               slides={newProducts}
               params={sliderParams}
            >
               <NewTaste />
            </Slider>
         </div>
      </section>
   );
};
