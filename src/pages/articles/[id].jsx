import React from 'react';
import Head from 'next/head';
import { Wrapper } from '@components/layout/Wrapper/Wrapper';
import { IntroSection } from '@components/sections/article/IntroSection/IntroSection';
import { RecommendSection } from '@components/sections/article/RecommendSection/RecommendSection';
import ProductsAPI from '../../api/ProductsAPI';

const Article = ({products}) => {
  return (
    <>
      <Head></Head>
      <Wrapper>
        <IntroSection/>
        <RecommendSection products={products}/>
      </Wrapper>;
    </>
  );
};

export default Article;


const getProducts = async () => {
  return await ProductsAPI.getProducts();
};

export const getServerSideProps = async () => {
  const  products  = await getProducts();

  return { props: { products } };
};
