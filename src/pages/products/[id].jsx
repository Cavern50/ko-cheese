import React from "react";
import clsx from "clsx";
import Head from "next/head";
import { Header } from "@components/common/Header/Header";
import { DescriptionSection } from "@components/sections/card/DescriptionSection/DescriptionSection";
import { Footer } from "@components/common/Footer/Footer";

import { Slider } from "@components/common/Slider/Slider";
import { Product } from "@components/common/Product/Product";

import ProductsAPI from "src/api/ProductsAPI";

import g from "src/styles/Main.module.scss";
import s from "./ProductPage.module.scss";

const sliderParams = {
   slider: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 0,
      slideClass: "product_slide",
      className: 'slider_border'
   },
   nav: {
      counter: false,
   },
};

const card = ({ id, product, products }) => {
   return (
      <>
         <Head></Head>
         <main className={clsx(g.main, g.pt)}>
            <div className={g.wrapper}>
               <DescriptionSection
                  product={product}
                  products={products}
                  id={id}
               />
               <div className={clsx(s.products)}>
                  <Slider
                     title={"Сырная продукция"}
                     slides={products}
                     params={sliderParams}
                  >
                     <Product additionClass={"card_slider"} />
                  </Slider>
               </div>
            </div>
         </main>
         <Footer />
      </>
   );
};

export default card;

const getProducts = async (id) => {
   const product = await ProductsAPI.getProduct(id);
   const products = await ProductsAPI.getProducts();
   return { product, products };
};

export const getServerSideProps = async (appContext) => {
   const { product, products } = await getProducts(appContext.query.id);
   return { props: { id: appContext.query.id, product, products } };
};
