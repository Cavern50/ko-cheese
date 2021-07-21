import React from "react";

import { Product } from "components/common/Product/Product";
import { Section } from "components/layout/Section/Section";

import s from "./RecommendSection.module.scss";

export const RecommendSection = ({ products }) => (
  <Section>
      <h2>Рекомендуем наши сыры</h2>
      <div className={s.recommend}>
        {products.map((product, i) => i < 3 && <Product key={product.id} {...product} additionClass='recommend'/>)}
      </div>
  </Section>
);


