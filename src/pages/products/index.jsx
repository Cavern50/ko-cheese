import React from "react";
import clsx from "clsx";
import Head from "next/head";

import { Header } from "@components/common/Header/Header";
import { ProductsSection } from "@components/sections/common/ProductsSection/ProductsSection";
import { NewTastesSection } from "@components/sections/common/NewTastesSection/NewTastesSection";
import { DiscountSection } from "@components/sections/common/DiscountSection/DiscountSection";
import { Footer } from "@components/common/Footer/Footer";
import { Discount } from "@components/common/Discount/Discount";
import { Cart } from "@components/modals/Cart/Cart";

import axios from "axios";

import g from "src/styles/Main.module.scss";

const products = ({ products }) => {
   return (
      <>
         <Head></Head>
         <main className={clsx(g.main, g.pt)}>
            <div className={g.wrapper}>
               <Discount text={"Вам представлена скидка на перый заказ 10%"} />
               <h1 className={g.title}>Продукция</h1>
            </div>
            <ProductsSection products={products} />
            <NewTastesSection />
            <DiscountSection />
         </main>
         <Footer />
      </>
   );
};

export default products;

const request = async () => {
   const { data } = await axios.get("http://localhost:3001/data");
   return data;
};

export const getServerSideProps = async () => {
   const products = await request();
   return { props: { products } };
};
