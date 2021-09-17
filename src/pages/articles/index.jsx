import React from 'react';
import Head from 'next/head';

import { Wrapper } from 'components/layout/Wrapper/Wrapper';
import { H1 } from 'components/layout/H1/H1';
import { RecipesSection } from 'components/sections/recipes/RecipesSection';
import DataAPI from 'api/DataAPI';
import APIBitrix from "api/APIBitrix";

const Index = ({ categories, items }) => (
    <>
      <Head>
        <title>Статьи</title>
      </Head>
      <Wrapper>
        <H1>Культура потребления</H1>
        <RecipesSection categories={categories} items={items}/>
      </Wrapper>
    </>
  );

export default Index;

// const getCategories = async () => await ArticlesAPI.getCategories();
//
// const getPosts = async () => await ArticlesAPI.getPosts('recipes');
// //
//
// export const getServerSideProps = async () => {
//   const categories = await getCategories();
//   const items = await getPosts('recipes');
//   return { props: { categories, items } };
// };


// const getData = async () => await DataAPI.getData();
//
// export const getServerSideProps = async () => {
//   // const categories = await getCategories();
//   // const pageData = await getPageData(resolvedUrl.slice(1));
//   const { articlesCategories, recipes } = await getData();
//   return { props: { articlesCategories, recipes } };
// };
//

export const getServerSideProps = async () => {

    // const categories = await getCategories();
    // const items = await getPosts("recipes");
    const categories = await APIBitrix.getData('articles/categories/');
    const items = await APIBitrix.getData(`articles/collection/${categories[0].subcategories[0].id}`)
    // console.log(categories[0].id);
    return { props: { categories, items } };
};