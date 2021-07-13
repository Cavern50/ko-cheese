import React from "react";

import { Product } from "components/common/Product/Product";
import { SubcategoryButton } from "components/common/Buttons/SubcategoryButton/SubcategoryButton";
import { Tabs } from "components/layout/Tabs/Tabs";
import { TabButton } from "components/common/Buttons/TabButton/TabButton";
import { Section } from "components/layout/Section/Section";
import { Wrapper } from "components/layout/Wrapper/Wrapper";

import { useTabs } from "hooks";

import s from "./ProductsSection.module.scss";


export const ProductsSection = ({ products, categories: { categories, subcategories } }) => {
  console.log(categories);
  const { activeId, toggleActiveId } = useTabs(1, false);
  const tabsSubCategory = useTabs(1, false);

  return (
    <Section>
      <Wrapper>
        <div className={s.header}>
          <Tabs>
            {categories.map(({ title, id }, i) => (
              <TabButton
                key={id}
                text={title}
                index={id}
                active={activeId}
                toggleActive={toggleActiveId}
              />
            ))}
          </Tabs>
          <div className={s.subcategories}>
            {subcategories.map((subcategory, i) => (
              <SubcategoryButton
                key={i}
                id={i}
                title={subcategory.title}
                active={tabsSubCategory.activeId}
                setActive={tabsSubCategory.toggleActiveId}
              />
            ))}
          </div>
        </div>
        <div className={s.body}>
          {products && products.map((product) => <Product key={product.id} {...product} />)}
        </div>
      </Wrapper>
    </Section>

  );
};
