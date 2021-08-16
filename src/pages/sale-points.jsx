import React from 'react';
import Head from 'next/head';

import { H1 } from 'components/layout/H1/H1';
import { SalePointsSection } from 'components/sections/sale-points/SalePointsSection';

const SalePoints = () => {
  return (
    <>
      <Head></Head>
      <H1>Точки продаж</H1>
      <SalePointsSection />
    </>
  );
};

export default SalePoints;
