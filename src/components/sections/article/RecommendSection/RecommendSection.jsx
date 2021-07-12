import React from 'react';

import { WrapperNarrow } from '@components/layout/WrapperNarrow/WrapperNarrow';
import { Product } from '@components/common/Product/Product';

import s from './RecommendSection.module.scss';

export const RecommendSection = ({products}) => {
  return (
    <WrapperNarrow>
      <div className={s.container}>
        <h2>Рекомендуем наши сыры</h2>
        <div className={s.recommend}>
          {products.map((product, i) => i < 3 && <Product {...product} additionClass='recommend'/>)}
        </div>
      </div>
    </WrapperNarrow>
  );
};


