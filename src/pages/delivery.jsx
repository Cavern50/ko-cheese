import React from 'react';
import Head from 'next/head';

import { Wrapper } from '@components/layout/Wrapper/Wrapper';
import { H1 } from '@components/layout/H1/H1';
import { DeliverySection } from '@components/sections/delivery/DeliverySection';

const Delivery = () => {
  return (
    <>
      <Head></Head>
      <Wrapper>
        <H1>Доставка и оплата</H1>
        <DeliverySection />
      </Wrapper>
    </>
  );
};

export default Delivery;
