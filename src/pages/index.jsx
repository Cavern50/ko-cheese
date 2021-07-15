import React from "react";
import Head from "next/head";

import { PromoSection } from "components/sections/Index/PromoSection/PromoSection";
import { NewTastesSection } from "components/sections/common/NewTastesSection/NewTastesSection";
import { ProductsSection } from "components/sections/common/ProductsSection/ProductsSection";
import { DiscountSection } from "components/sections/common/DiscountSection/DiscountSection";
import { RecipesSliderSection } from "components/sections/common/RecipesSliderSection/RecipesSliderSection";
import { InstagramPromoSection } from "components/sections/index/InstagramPromoSection/InstagramPromoSection";
import { InstagramSection } from "components/sections/index/InstagramSection/InstagramSection";
import { Cookies } from "components/modals/Cookies/Cookies";

import { useModal } from "hooks";

import ProductsAPI from "api/ProductsAPI";
import ArticlesAPI from "api/ArticlesAPI";

const Index = ({ products, categories, posts }) => {
  const cookiesModal = useModal(true);
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <PromoSection/>
      <NewTastesSection/>
      <ProductsSection products={products} categories={categories}/>
      <DiscountSection/>
      <RecipesSliderSection recipes={posts} title="Рецепты"/>
      <InstagramPromoSection url={"http://instagram.com/instagram"}/>
      <InstagramSection/>
      {cookiesModal.isShowed && <Cookies close={cookiesModal.hideModal}/>}
    </>
  );
};

export default Index;

// eslint-disable-next-line no-return-await
const getProducts = async () => await ProductsAPI.getProducts();

// eslint-disable-next-line no-return-await
const getProductsCategories = async () => await ProductsAPI.getProductsCategories();

// eslint-disable-next-line no-return-await
const getPosts = async () => await ArticlesAPI.getPosts('recipes');

export const getServerSideProps = async () => {
  const products = await getProducts();
  const { categories } = await getProductsCategories();
  const posts = await getPosts('recipes');
  return { props: { products, categories, posts } };
};
