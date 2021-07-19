import React from "react";
import Head from "next/head";

import { PromoSection } from "components/sections/Index/PromoSection/PromoSection";
import { NewTastesSection } from "components/sections/common/NewTastesSection/NewTastesSection";
import { ProductsSection } from "components/sections/common/ProductsSection/ProductsSection";
import { DiscountSection } from "components/sections/common/DiscountSection/DiscountSection";
import { RecipesSliderSection } from "components/sections/common/RecipesSliderSection/RecipesSliderSection";
import { InstagramPromoSection } from "components/sections/index/InstagramPromoSection/InstagramPromoSection";
import { InstagramSection } from "components/sections/index/InstagramSection/InstagramSection";
import { ModalWrapper } from "components/modals/ModalWrapper/ModalWrapper";
import { Cookies } from "components/modals/Cookies/Cookies";

import { useModal } from "hooks";

import ProductsAPI from "api/ProductsAPI";
import NewProductsAPI from "api/NewProductsAPI";
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

const Index = ({ products, discountProduct, categories, posts, newProducts }) => {
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
      <ProductsSection products={products} categories={categories}/>
      <DiscountSection {...discountProduct}/>
      <RecipesSliderSection recipes={posts} title="Рецепты"/>
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
const getProducts = async () => {
  const products = await ProductsAPI.getProducts();
  const discountProduct = await ProductsAPI.getDiscountProduct();
  const categories = await ProductsAPI.getProductsCategories();
  return { products, discountProduct, categories };
};

const getNewProducts = async () => await NewProductsAPI.getNewProducts();
const getPosts = async () => await ArticlesAPI.getPosts("recipes");

export const getServerSideProps = async () => {
  const { products, discountProduct, categories } = await getProducts();
  const posts = await getPosts("recipes");
  const newProducts = await getNewProducts();
  return { props: { products, discountProduct, categories, posts, newProducts } };
};
