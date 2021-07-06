import React from 'react';
import Head from 'next/head';
import g from '../styles/Main.module.scss';

import { OrderingSection } from '@components/sections/purchase/OrderingSection/OrderingSection';
import CartSection from '@components/sections/purchase/CartSection/CartSection';

const Purchase = () => {
  return (
    <>
      <Head></Head>
      <section>
        <div className={g.wrapper}>
          <div className={g.flex}>
            <OrderingSection />
            <CartSection />
          </div>
        </div>
      </section>
    </>
  );
};

export default Purchase;
