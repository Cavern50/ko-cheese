import React from 'react';
import clsx from 'clsx';
import Head from 'next/head';

import { ProductsSection } from '@components/sections/common/ProductsSection/ProductsSection';
import { NewTastesSection } from '@components/sections/common/NewTastesSection/NewTastesSection';
import { DiscountSection } from '@components/sections/common/DiscountSection/DiscountSection';
import { Discount } from '@components/common/Discount/Discount';
import { useModal } from 'src/hooks';
import { Wrapper } from '@components/layout/Wrapper/Wrapper';

import axios from 'axios';

import { H1 } from '@components/layout/H1/H1';

const Products = ({ products }) => {
  const discountModal = useModal(true);
  return (
    <>
      <Head></Head>
      <Wrapper>
        {discountModal.isShowed && (
          <Discount
            text="Вам представлена скидка на перый заказ 10%"
            close={discountModal.hideModal}
          />
        )}
        <H1>Продукция</H1>
      </Wrapper>
      <ProductsSection products={products}/>
      <NewTastesSection/>
      <DiscountSection/>
    </>
  );
};

export default Products;

const request = async () => {
  const { data } = await axios.get('http://localhost:3001/data');
  return data;
};

export const getServerSideProps = async () => {
  const products = await request();
  return { props: { products } };
};
