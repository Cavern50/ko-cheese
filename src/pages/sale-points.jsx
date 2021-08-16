import React from 'react';

import { H1 } from 'components/layout/H1/H1';
import { SalePointsSection } from 'components/sections/sale-points/SalePointsSection';

const SalePoints = () => {
  return (
    <>
      <H1>Точки продаж</H1>
      <SalePointsSection />
    </>
  );
};

export default SalePoints;
