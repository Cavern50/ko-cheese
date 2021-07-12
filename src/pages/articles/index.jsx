import React from 'react';
import Head from 'next/head';

import { Wrapper } from '@components/layout/Wrapper/Wrapper';
import { H1 } from '@components/layout/H1/H1';
import { RecipesSection } from '@components/sections/recipes/RecipesSection';
import ArticlesAPI from '../../api/ArticlesAPI';

const Index = (props) => {
  return (
    <>
      <Head></Head>
      <Wrapper>
        <H1>Культура потребления</H1>
        <RecipesSection {...props}/>
      </Wrapper>
    </>
  );
};

export default Index;

const getCategories = async () => {
  return await ArticlesAPI.getCategories();
};

const getPosts = async () => {
  return await ArticlesAPI.getPosts('recipes');
};


export const getServerSideProps = async () => {
  const categories = await getCategories();
  const items = await getPosts('recipes');
  return { props: { categories, items } };
};

