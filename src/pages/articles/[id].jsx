import React from "react";
import Head from "next/head";
import { Wrapper } from "components/layout/Wrapper/Wrapper";
import { WrapperNarrow } from "components/layout/WrapperNarrow/WrapperNarrow";
import { IntroSection } from "components/sections/article/IntroSection/IntroSection";
import { RecommendSection } from "components/sections/article/RecommendSection/RecommendSection";
import { StepsSection } from "components/sections/article/StepsSection/StepsSection";
import { RecipesSliderSection } from "components/sections/common/RecipesSliderSection/RecipesSliderSection";
import ProductsAPI from "api/ProductsAPI";
import ArticlesAPI from "api/ArticlesAPI";
import { windowSize } from "constants.js";
import { BackButton } from "components/buttons/BackButton/BackButton";
import axios from "axios";
import DataAPI from 'api/DataAPI';
import { ShareControl } from 'components/common/ShareControl/ShareControl';
import APIBitrix from "api/APIBitrix";

const Article = ({ products, article, posts }) => (
  <>
    <Head>
      <title>Страница рецепта</title>
    </Head>
    <Wrapper style={{ position: 'relative' }}>
        {windowSize > 768 && <ShareControl back/>}
        {windowSize < 768 && <BackButton/>}
      <WrapperNarrow>
        <IntroSection article={article}/>
        <RecommendSection products={products}/>
          {article.stages && <StepsSection stages={article.stages}/>}
          {windowSize < 768 && <ShareControl/>}
      </WrapperNarrow>
    </Wrapper>
    <Wrapper>
      <RecipesSliderSection recipes={posts} title="Другие рецепты"/>
    </Wrapper>
  </>
);


export default Article;

// // eslint-disable-next-line no-return-await
// const getProducts = async () => await ProductsAPI.getProducts();
// // eslint-disable-next-line no-return-await
// const getPost = async (url, id) => await ArticlesAPI.getPost(url, id);
// // eslint-disable-next-line no-return-await
// const getPosts = async (url) => await ArticlesAPI.getPosts(url);
//
// export const getServerSideProps = async ({ params }) => {
//   const products = await getProducts();
//   const article = await getPost("recipes", params.id);
//   const posts = await getPosts("recipes");
//   return { props: { products, article, posts } };
// };


const getData = async () => await DataAPI.getData();

// export const getServerSideProps = async ({ params }) => {
//   const { products, recipes } = await getData();
//   const article = recipes.find(recipe => params.id === recipe.id);
//   return { props: { recipes, products, article } };
// };


export const getServerSideProps = async ({ params }) => {
    const article = await APIBitrix.getData(`articles/item/${params.id}`).then(res => res);
    const posts = await APIBitrix.getData('articles/collection/');
    const products = await APIBitrix.getData(`products/collection/2`)
    // const { products } = await getData();
    // const article = await getPost("recipes", params.id);
    // const posts = await getPosts("recipes");
    return { props: { products, article, posts } };
};

