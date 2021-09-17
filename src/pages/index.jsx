import React from "react";
import Head from "next/head";

import { PromoSection } from "components/sections/index/PromoSection/PromoSection";
import { NewTastesSection } from "components/sections/common/NewTastesSection/NewTastesSection";
import { ProductsSection } from "components/sections/common/ProductsSection/ProductsSection";
import { DiscountSection } from "components/sections/common/DiscountSection/DiscountSection";
import { RecipesSliderSection } from "components/sections/common/RecipesSliderSection/RecipesSliderSection";
import { TelegramPromoSection } from "components/sections/index/TelegramPromoSection/TelegramPromoSection";
import { InstagramSection } from "components/sections/index/InstagramSection/InstagramSection";
import { ModalWrapper } from "components/modals/ModalWrapper/ModalWrapper";
import { Cookies } from "components/modals/Cookies/Cookies";

import { useModal } from "hooks";
import DataAPI from 'api/DataAPI.js';
import ProductsAPI from "api/ProductsAPI";
import ArticlesAPI from "api/ArticlesAPI";
import { PartnersSection } from "components/sections/index/PartnersSection/PartnersSection";
import APIBitrix from "api/APIBitrix";

const cookiesModalProperties = {
  animation: {
    animationShow: "moveFromBottom",
    animationHide: "moveToBottom"
  },
  classes: {
    boxClass: "cookiesBox",
    containerClass: "cookiesContainer"
  }
};

const Index = ({ promoContent, products, discountProduct, categories, posts, newProducts }) => {
  const cookiesModal = useModal(true, false);
  const [showDelay, setShowDelay] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShowDelay(true);
    }, 5000);
  }, []);

  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      {/*<PromoSection {...promoContent}/>*/}
      {/*<NewTastesSection products={newProducts}/>*/}
      <ProductsSection products={products} categories={categories}/>
      {/*<DiscountSection {...discountProduct}/>*/}
      <RecipesSliderSection recipes={posts} title="Рецепты"/>
      <TelegramPromoSection url={"http://instagram.com/instagram"}/>
      {/*<InstagramSection/>*/}
      <PartnersSection/>
      {cookiesModal.isShowed && showDelay ?
        <ModalWrapper show={cookiesModal.isShowed} {...cookiesModalProperties}>
          <Cookies close={cookiesModal.hideModal}/>
        </ModalWrapper> : ""}
    </>
  );
};

export default Index;
//
// const getProducts = async () => {
//   const products = await ProductsAPI.getProducts();
//   const discountProduct = await ProductsAPI.getDiscountProduct();
//   const categories = await ProductsAPI.getProductsCategories();
//   const newProducts = await ProductsAPI.getNewProducts();
//   return { products, discountProduct, categories, newProducts };
// };
//
// const getPosts = async () => await ArticlesAPI.getPosts("recipes");
//
// export const getServerSideProps = async () => {
//   const { products, discountProduct, categories, newProducts } = await getProducts();
//   const posts = await getPosts("recipes");
//   return { props: { products, discountProduct, categories, posts, newProducts } };
// };

const getData = async () => await DataAPI.getData();

// export const getServerSideProps = async () => {
//   const { products, discountProduct, productsCategories, recipes, newProducts } = await getData();
//   return { props: { products, discountProduct, productsCategories, recipes, newProducts } };
// };



export const getServerSideProps = async () => {
    // const promoContent = await APIBitrix.getData('content/main/promo-section/').then(res => res[0]);
    // const newProducts = await APIBitrix.getData('products/slider/').then(res => res.products);
    const categories = await APIBitrix.getData('products/categories/');
    const products = await APIBitrix.getData(`products/collection/2`)
    const posts = await APIBitrix.getData(`articles/collection/`);
    const { discountProduct } = await getData();
    // console.log(products, posts, newProducts, promoContent);
    return { props: {  discountProduct, products, categories, posts,  } };
};
