import React from "react";
import Head from "next/head";

import { PromoSection } from "components/sections/index/PromoSection/PromoSection";
import { NewTastesSection } from "components/sections/common/NewTastesSection/NewTastesSection";
import { ProductsSection } from "components/sections/common/ProductsSection/ProductsSection";
import { DiscountSection } from "components/sections/common/DiscountSection/DiscountSection";
import { RecipesSliderSection } from "components/sections/common/RecipesSliderSection/RecipesSliderSection";
import { InstagramPromoSection } from "components/sections/index/InstagramPromoSection/InstagramPromoSection";
import { InstagramSection } from "components/sections/index/InstagramSection/InstagramSection";
import { ModalWrapper } from "components/modals/ModalWrapper/ModalWrapper";
import { Cookies } from "components/modals/Cookies/Cookies";

import { useModal } from "hooks";

import DataAPI from "api/DataAPI";
import ArticlesAPI from "api/ArticlesAPI";

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

const Index = ({ products, discountProduct, productsCategories, recipes, newProducts }) => {
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
      <PromoSection/>
      <NewTastesSection products={newProducts}/>
      <ProductsSection products={products} categories={productsCategories}/>
      <DiscountSection {...discountProduct}/>
      <RecipesSliderSection recipes={recipes} title="Рецепты"/>
      <InstagramPromoSection url={"http://instagram.com/instagram"}/>
      <InstagramSection/>
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

export const getServerSideProps = async () => {
  const { products, discountProduct, productsCategories, recipes, newProducts } = await getData();
  return { props: { products, discountProduct, productsCategories, recipes, newProducts } };
};