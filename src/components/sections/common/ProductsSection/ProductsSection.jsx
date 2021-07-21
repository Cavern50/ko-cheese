import React from "react";

import { Product } from "components/common/Product/Product";
import { SubcategoryButton } from "components/common/Buttons/SubcategoryButton/SubcategoryButton";
import { Tabs } from "components/layout/Tabs/Tabs";
import { TabButton } from "components/common/Buttons/TabButton/TabButton";
import { Section } from "components/layout/Section/Section";
import { Wrapper } from "components/layout/Wrapper/Wrapper";

import { useTabs } from "hooks";

import s from "./ProductsSection.module.scss";


export const ProductsSection = ({ products, categories }) => {
  const { activeId: activeCategoryId, toggleActiveId: toggleActiveCategoryId } = useTabs(categories[0].id, false);
  const { activeId: activeSubcategoryId, toggleActiveId: toggleSubcategoryId } = useTabs(categories[0].subcategories[0].id, false);

  const [activeCategory, setActiveCategory] = React.useState(categories[0]);
  const [activeSubcategory, setActiveSubcategory] = React.useState(categories[0].subcategories);

  React.useEffect(() => {
    setActiveCategory(categories.find(({ id }) => id === activeCategoryId));
  }, [activeCategoryId]);

  React.useEffect(() => {
    toggleSubcategoryId(activeCategory.subcategories[0].id);
  }, [activeCategory]);
  return (
    <Section>
      <Wrapper>
        <div className={s.header}>
          <Tabs>
            {categories.map(({ title, id }) => (
              <TabButton
                key={id}
                text={title}
                index={id}
                active={activeCategoryId}
                toggleActive={toggleActiveCategoryId}
              />
            ))}
          </Tabs>
          <div className={s.subcategories}>
            {activeCategory.subcategories.map(({ title, id }) => (
              <SubcategoryButton
                key={id}
                id={id}
                title={title}
                active={activeSubcategoryId}
                toggleActive={toggleSubcategoryId}
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
