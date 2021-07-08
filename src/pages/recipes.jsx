import React from 'react';
import Head from 'next/head';

import { Wrapper } from '@components/layout/Wrapper/Wrapper';
import { H1 } from '@components/layout/H1/H1';
import { RecipesSection } from '@components/sections/recipes/RecipesSection';
const Recipes = () => {
  return (
    <>
      <Head></Head>
      <Wrapper>
        <H1>Культура потребления</H1>
        <RecipesSection/>
      </Wrapper>
    </>
  );
};

export default Recipes;
