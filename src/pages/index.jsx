import React from "react";
import Head from "next/head";
import g from "../styles/Main.module.scss";
import { Header } from "../components/Common/Header/Header";
import { PromoSection } from "../components/Sections/Index/PromoSection/PromoSection";
import { NewTastesSection } from "../components/Sections/Common/NewTastesSection/NewTastesSection";
import { ProductsSection } from "../components/Sections/Common/ProductsSection/ProductsSection";
import { DiscountSection } from "@components/Sections/Common/DiscountSection/DiscountSection";
import { RecipesSection } from "@components/Sections/Index/RecipesSection/RecipesSection";
import { InstagramPromoSection } from "@components/Sections/Index/InstagramPromoSection/InstagramPromoSection";
import { InstagramSection } from "@components/Sections/Index/InstagramSection/InstagramSection";
import { Footer } from "@components/Common/Footer/Footer";


const index = () => {
   return (
      <>
         <Head></Head>
         <Header promo/>
         <main className={g.main}>
            <PromoSection />
            <NewTastesSection />
            <ProductsSection />
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
