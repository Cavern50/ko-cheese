import React from "react";
import clsx from "clsx";
import Head from "next/head";
import { Header } from "@components/Common/Header/Header";
import { DescriptionSection } from "@components/Sections/Card/DescriptionSection/DescriptionSection";
import { Footer } from "@components/Common/Footer/Footer";

import ProductsAPI from 'src/api/ProductsAPI';

import g from "src/styles/Main.module.scss";

const card = ({ id, product, products }) => {
   return (
      <>
         <Head></Head>
         <Header />
         <main className={clsx(g.main, g.pt)}>
            <div className={g.wrapper}>
               <DescriptionSection product={product} products={products} id={id} />
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
   return {product, products};
};



export const getServerSideProps = async (appContext) => {
   const {product, products} = await getProducts(appContext.query.id);
   return { props: { id: appContext.query.id, product, products } };
};

