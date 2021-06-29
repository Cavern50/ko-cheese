import React from "react";
import clsx from "clsx";
import Head from "next/head";
import { Header } from "@components/Common/Header/Header";
import { ProductsSection } from "@components/Sections/Common/ProductsSection/ProductsSection";
import { NewTastesSection } from "@components/Sections/Common/NewTastesSection/NewTastesSection";
import { DiscountSection } from "@components/Sections/Common/DiscountSection/DiscountSection";
import { Footer } from "@components/Common/Footer/Footer";
import { Discount } from "@components/Common/Discount/Discount";
import axios from "axios";

import g from "src/styles/Main.module.scss";

const products = ({products}) => {

   return (
         <>
            <Head></Head>
            <Header />
            <main className={clsx(g.main, g.pt)}>
               <div className={g.wrapper}>
                  <Discount
                     text={"Вам представлена скидка на перый заказ 10%"}
                  />
                  <h1 className={g.title}>Продукция</h1>
               </div>
               <ProductsSection products={products}/>
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

