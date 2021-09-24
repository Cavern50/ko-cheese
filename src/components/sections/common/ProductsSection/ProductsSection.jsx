import React from "react";

import { Product } from "components/Product/Product";
import { SubcategoryButton } from "components/buttons/SubcategoryButton/SubcategoryButton";
import { Tabs } from "components/layout/Tabs/Tabs";
import { TabButton } from "components/buttons/TabButton/TabButton";
import { Section } from "components/layout/Section/Section";
import { Wrapper } from "components/layout/Wrapper/Wrapper";
import { windowSize } from "constants.js";

import { useClientSide, useTabs } from "hooks.js";

import APIBitrix from "api/APIBitrix";
import s from "./ProductsSection.module.scss";


export const ProductsSection = ({ products, categories }) => {
  const { activeId: activeCategoryId, toggleActiveId: toggleActiveCategoryId } = useTabs(categories[0].id, false);
  const { activeId: activeSubcategoryId, toggleActiveId: toggleSubcategoryId } = useTabs(categories[0].subcategories[0].id, false);

  const [activeCategory, setActiveCategory] = React.useState(categories[0]);

  const [activeProducts, setActiveProducts] = React.useState(products);

  React.useEffect(() => {
    setActiveCategory(categories.find(({ id }) => id === activeCategoryId));
  }, [activeCategoryId]);

  React.useEffect(() => {
    activeCategory.subcategories && toggleSubcategoryId(activeCategory.subcategories[0].id);
  }, [activeCategory]);


  React.useEffect(() => {
    const getProducts = async () => {
      const requestId = activeCategory.subcategories ? activeSubcategoryId : activeCategory.id;
      const requestProducts = await APIBitrix.get(`products/collection/${requestId}`);
      setActiveProducts(requestProducts);
    };
    getProducts();
  }, [activeCategory, activeSubcategoryId]);

  const isClientSide = useClientSide();

  return (
    <Section>
      <Wrapper>
        <div className={s.header}>
          <Tabs>
            {
              categories.map(({ name, id }) => (
                <TabButton
                  key={id}
                  text={name}
                  index={id}
                  active={activeCategoryId}
                  toggleActive={toggleActiveCategoryId}
                />
              ))
            }
          </Tabs>
          {
            activeCategory.subcategories &&
            <div className={s.subcategories}>
              {
                activeCategory.subcategories.map(({ name, id }) => (
                  <SubcategoryButton
                    key={id}
                    id={id}
                    title={name}
                    active={activeSubcategoryId}
                    toggleActive={toggleSubcategoryId}
                    additionClass="mainButton"
                  />
                ))
              }
            </div>
          }
        </div>
        {
          activeProducts.length > 0 &&
          <div className={s.body}>
            {activeProducts.map((product) => <Product key={product.id} {...product} />)}
          </div>
        }

        {isClientSide && windowSize <= 1200 &&
        <button type="button" className={s.more}>Показать еще <span>(4)</span></button>}
      </Wrapper>
    </Section>

  );
};
