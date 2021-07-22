import React from "react";
import { DescriptionSection } from "components/sections/card/DescriptionSection/DescriptionSection";

import { Slider } from "components/common/Slider/Slider";
import { Product } from "components/common/Product/Product";

import ProductsAPI from "api/ProductsAPI";

import { Wrapper } from "components/layout/Wrapper/Wrapper";
import s from "./ProductPage.module.scss";
import DataAPI from '../../api/DataAPI';

const sliderParams = {
  slider: {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 0,
    slideClass: "product_slide",
    className: "slider_border"
  },
  nav: {
    counter: false
  }
};

const Card = ({ id, product, products }) => (
  <>
    <Wrapper>
      <DescriptionSection product={product} products={products} id={id}/>
      <div className={s.products}>
        <Slider title={"Сырная продукция"} slides={products} params={sliderParams}>
          <Product additionClass={"card_slider"}/>
        </Slider>
      </div>
    </Wrapper>
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
  const { products } = await getData();
  const product = products.find(product => params.id === product.id);
  return { props: { id: params.id, products, product } };
};