import React from "react";
import Head from "next/head";
import g from "../styles/Main.module.scss";
import { PromoSection } from "../components/sections/index/PromoSection/PromoSection";
import { NewTastesSection } from "../components/sections/common/NewTastesSection/NewTastesSection";
import { ProductsSection } from "../components/sections/common/ProductsSection/ProductsSection";
import { DiscountSection } from "@components/sections/common/DiscountSection/DiscountSection";
import { RecipesSection } from "@components/sections/index/RecipesSection/RecipesSection";
import { InstagramPromoSection } from "@components/sections/index/InstagramPromoSection/InstagramPromoSection";
import { InstagramSection } from "@components/sections/index/InstagramSection/InstagramSection";
import { Footer } from "@components/common/Footer/Footer";
import ProductsAPI from 'src/api/ProductsAPI';


const index = ({products}) => {
   console.log(products)
   return (
      <>
         <Head></Head>
         <main className={g.main}>
            <PromoSection />
            <NewTastesSection />
            <ProductsSection products={products}/>
            <DiscountSection/>
            <RecipesSection/>
            <InstagramPromoSection url={'http://instagram.com/instagram'}/>
            <InstagramSection/>
         </main>
         <Footer/>
      </>
   );
};

export default index;

const getProducts = async () => {
   const products = await ProductsAPI.getProducts();
   return products;
};

export const getServerSideProps = async () => {
   const products = await getProducts();
   return { props: { products } };
};

