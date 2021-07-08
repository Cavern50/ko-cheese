import React from 'react';
import Head from 'next/head';
import g from '../styles/Main.module.scss';

import { Wrapper } from '@components/layout/Wrapper/Wrapper';

import { OrderingSection } from '@components/sections/purchase/OrderingSection/OrderingSection';
import { CartSection } from '@components/sections/purchase/CartSection/CartSection';

const Purchase = () => {
  return (
    <>
      <Head></Head>
      <section>
        <Wrapper>
          <div className={g.flex}>
            <OrderingSection />
            <CartSection />
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Purchase;
