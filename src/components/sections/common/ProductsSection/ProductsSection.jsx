import React from "react";

import { Product } from "components/Product/Product";
import { SubcategoryButton } from "components/buttons/SubcategoryButton/SubcategoryButton";
import { Tabs } from "components/layout/Tabs/Tabs";
import { TabButton } from "components/buttons/TabButton/TabButton";
import { Section } from "components/layout/Section/Section";
import { Wrapper } from "components/layout/Wrapper/Wrapper";
import { windowSize } from "constants.js";

import { useTabs } from "hooks";

import s from "./ProductsSection.module.scss";
import APIBitrix from "api/APIBitrix";
import axios from "axios";


export const ProductsSection = ({ products, categories }) => {
  const { activeId: activeCategoryId, toggleActiveId: toggleActiveCategoryId } = useTabs(categories[0].id, false);
  const { activeId: activeSubcategoryId, toggleActiveId: toggleSubcategoryId } = useTabs(categories[0].subcategories[0].id, false);

  const [activeCategory, setActiveCategory] = React.useState(categories[0]);

  const [activeProducts, setActiveProducts] = React.useState(products);

  // const [activeSubcategory, setActiveSubcategory] = React.useState(categories[0].subcategories);

  React.useEffect(() => {
    setActiveCategory(categories.find(({ id }) => id === activeCategoryId));
  }, [activeCategoryId]);

  React.useEffect(() => {
    activeCategory.subcategories && toggleSubcategoryId(activeCategory.subcategories[0].id);
  }, [activeCategory]);


  React.useEffect(() => {
    const getProducts = async () => {
      const requestProducts = await APIBitrix.getData(`products/collection/${activeSubcategoryId}`);
      setActiveProducts(requestProducts);
    };

    getProducts();

  }, [activeSubcategoryId]);


  return (
    <Section>
      <Wrapper>
        <div className={s.header}>
          <Tabs>
            {categories.map(({ name, id }) => (
              <TabButton
                key={id}
                text={name}
                index={id}
                active={activeCategoryId}
                toggleActive={toggleActiveCategoryId}
              />
            ))}
          </Tabs>
          <div className={s.subcategories}>
            {activeCategory.subcategories && activeCategory.subcategories.map(({ name, id }) => (
              <SubcategoryButton
                key={id}
                id={id}
                title={name}
                active={activeSubcategoryId}
                toggleActive={toggleSubcategoryId}
                additionClass="mainButton"
              />
            ))}
          </div>
        </div>
        <div className={s.body}>
          {activeProducts && activeProducts.map((product) => <Product key={product.id} {...product} />)}
        </div>
        {windowSize <= 1200 && <button type="button" className={s.more}>Показать еще <span>(4)</span></button>}
      </Wrapper>
    </Section>

  );
};
