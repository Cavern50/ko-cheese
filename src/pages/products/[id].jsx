import React from "react";
import { DescriptionSection } from "components/sections/card/DescriptionSection/DescriptionSection";

import { Slider } from "components/common/Slider/Slider";
import { Product } from "components/Product/Product";

import ProductsAPI from "api/ProductsAPI";
import ArticlesAPI from "api/ArticlesAPI";

import { Wrapper } from "components/layout/Wrapper/Wrapper";
import { RecipesSliderSection } from "components/sections/common/RecipesSliderSection/RecipesSliderSection";
import { Section } from "components/layout/Section/Section";
import { windowSize, isClientSide } from "constants.js";
import g from '/src/styles/Main.module.scss';
import Link from "next/link";
import DataAPI from 'api/DataAPI.js';

const sliderParams = {
  slider: {
    slidesPerView: "auto",
    slidesPerGroup: 1,
    spaceBetween: 0,
    slideClass: "product_slide",
    className: "slider_border",
    breakpoints: {
      767: {
        slidesPerView: 2.002
      },
      1023: {
        slidesPerView: 3.002
      },
      1200: {
        slidesPerView: 4.002
      }
    }
  },
  nav: {
    hide: windowSize <= 768,
    counter: false,
    seeAll: {
      visible: windowSize >= 768 && true,
      position: windowSize >= 768 ? "right" : "bottom",
      link: "/products"
    }
  }
};


const Card = ({ id, product, products, recipes }) => (
  <>
    <Wrapper>
      <DescriptionSection product={product} products={products} id={id}/>
      <Section>
        <Slider title={'Мы рекомендуем'} slides={products} params={sliderParams}>
          <Product additionClass={'card_slider'}/>
        </Slider>
        {isClientSide && windowSize < 768 &&
        <Link href="/products">
          <a className={g.link}>Посмотреть все</a>
        </Link>}
      </Section>
    </Wrapper>
    <RecipesSliderSection title="Рецепты" recipes={recipes}/>
  </>
);

export default Card;
//
// const getProducts = async (id) => {
//   const product = await ProductsAPI.getProduct(id);
//   const products = await ProductsAPI.getProducts();
//   return { product, products };
// };
//
// export const getServerSideProps = async (appContext) => {
//   const { product, products } = await getProducts(appContext.query.id);
//   return { props: { id: appContext.query.id, product, products } };
// };


const getData = async () => await DataAPI.getData();

export const getServerSideProps = async ({ params }) => {
  const { products, recipes } = await getData();
  const product = products.find(product => params.id === product.id);
  return { props: { id: params.id, products, product, recipes } };
};