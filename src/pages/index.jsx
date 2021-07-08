import React from 'react';
import Head from 'next/head';

import { PromoSection } from '../components/sections/index/PromoSection/PromoSection';
import { NewTastesSection } from '../components/sections/common/NewTastesSection/NewTastesSection';
import { ProductsSection } from '../components/sections/common/ProductsSection/ProductsSection';
import { DiscountSection } from '@components/sections/common/DiscountSection/DiscountSection';
import { RecipesSliderSection } from '@components/sections/index/RecipesSliderSection/RecipesSliderSection';
import { InstagramPromoSection } from '@components/sections/index/InstagramPromoSection/InstagramPromoSection';
import { InstagramSection } from '@components/sections/index/InstagramSection/InstagramSection';
import { Cookies } from '@components/modals/Cookies/Cookies';

import { useModal } from 'src/hooks';

import ProductsAPI from 'src/api/ProductsAPI';


const Index = ({ products }) => {
  const cookiesModal = useModal(true);
  return (
    <>
      <Head></Head>
      <PromoSection />
      <NewTastesSection />
      <ProductsSection products={products} />
      <DiscountSection />
      <RecipesSliderSection />
      <InstagramPromoSection url={'http://instagram.com/instagram'} />
      <InstagramSection />
      {cookiesModal.isShowed && <Cookies close={cookiesModal.hideModal}/>}
    </>
  );
};

export default Index;

const getProducts = async () => {
  const products = await ProductsAPI.getProducts();
  return products;
};

export const getServerSideProps = async () => {
  const products = await getProducts();
  return { props: { products } };
};
