import React from 'react';
import Head from 'next/head';

import { SalePointsSection } from '@components/sections/sale-points/SalePointsSection';

const SalePoints = () => {
  return (
    <>
      <Head></Head>
      <SalePointsSection />
    </>
  );
};

export default SalePoints;
