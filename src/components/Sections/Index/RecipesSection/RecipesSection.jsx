import React from "react";
import g from "src/styles/Main.module.scss";
import { Slider } from "@components/Common/Slider/Slider";
import { Recipe } from "@components/Common/Recipe/Recipe";


const recipes = [
   {
      image: "/img/content/recipe-1.jpg",
      url: "/",
      name: "Сырный соус",
      text: "Мы признаем, что мы встречаемся и работаем на землях коренных народов по всей стране и что суверенитет над этой землей никогда не уступался. ",
   },
   {
      image: "/img/content/recipe-2.jpg",
      url: "/",
      name: "Французский сырный соус",
      text: "Изумительный рецепт, который надо иметь в своей копилке. Подходит для любых быстрых закусок.",
   },
   {
      image: "/img/content/recipe-3.jpg",
      url: "/",
      name: "Салат и заправка из сыра с голубой плесенью",
      text: "Этот салат – классическое американское блюдо, которое было придумано еще в 1920-х, и практически повсеместно встречалось в меню ресторанов до 1950-х.",
   },
   {
      image: "/img/content/recipe-1.jpg",
      url: "/",
      name: "Сырный соус",
      text: "Мы признаем, что мы встречаемся и работаем на землях коренных народов по всей стране и что суверенитет над этой землей никогда не уступался. ",
   },
   {
      image: "/img/content/recipe-2.jpg",
      url: "/",
      name: "Французский сырный соус",
      text: "Изумительный рецепт, который надо иметь в своей копилке. Подходит для любых быстрых закусок.",
   },
   {
      image: "/img/content/recipe-3.jpg",
      url: "/",
      name: "Салат и заправка из сыра с голубой плесенью",
      text: "Этот салат – классическое американское блюдо, которое было придумано еще в 1920-х, и практически повсеместно встречалось в меню ресторанов до 1950-х.",
   },
   {
      image: "/img/content/recipe-1.jpg",
      url: "/",
      name: "Сырный соус",
      text: "Мы признаем, что мы встречаемся и работаем на землях коренных народов по всей стране и что суверенитет над этой землей никогда не уступался. ",
   },
   {
      image: "/img/content/recipe-2.jpg",
      url: "/",
      name: "Французский сырный соус",
      text: "Изумительный рецепт, который надо иметь в своей копилке. Подходит для любых быстрых закусок.",
   },
   {
      image: "/img/content/recipe-3.jpg",
      url: "/",
      name: "Салат и заправка из сыра с голубой плесенью",
      text: "Этот салат – классическое американское блюдо, которое было придумано еще в 1920-х, и практически повсеместно встречалось в меню ресторанов до 1950-х.",
   },
];

const sliderParams = {
   slider: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
      slideClass: "recipe_slide",
   },
   nav: {
      counter: true,
   },
};

export const RecipesSection = () => {
   return (
      <section>
         <div className={g.wrapper}>
            <Slider
               slides={recipes}
               params={sliderParams}
               title={"Рецепты"}
            >
               <Recipe />
            </Slider>
            <div>{/*  */}</div>
         </div>
      </section>
   );
};
