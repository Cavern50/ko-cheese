import React from 'react';
import clsx from 'clsx';
import { Product } from '@components/common/Product/Product';

import s from './ProductsSection.module.scss';
import g from 'src/styles/Main.module.scss';
import { SubcategoryButton } from '@components/common/Buttons/SubcategoryButton/SubcategoryButton';
import { TabButton } from '@components/common/Buttons/TabButton/TabButton';
import { useTabs } from 'src/hooks';

const categories = [
  {
    title: 'Сыры',
    href: '/'
  },
  {
    title: 'Молоко',
    href: '/'
  },
  {
    title: 'Десерты',
    href: '/'
  }
];

const subCategories = [
  {
    title: 'Свежие',
    href: '/'
  },
  {
    title: 'Мягкие',
    href: '/'
  },
  {
    title: 'Твердые',
    href: '/'
  },
  {
    title: 'С белой плесенью',
    href: '/'
  },
  {
    title: 'С голубой плесенью',
    href: '/'
  },
  {
    title: 'Коровий',
    href: '/'
  },
  {
    title: 'Козий',
    href: '/'
  }
];

export const ProductsSection = ({ products }) => {
  
  const tabsCategory = useTabs(0);
  const tabsSubCategory = useTabs();

  return (
    <section className={clsx(s.products)}>
      <div className={clsx(g.wrapper)}>
        <div className={clsx(s.header)}>
          <div className={clsx(s.categories)}>
            {categories.map((category, i) => (
              <TabButton
                key={i}
                text={category.title}
                index={i}
                active={tabsCategory.active}
                toggleActive={tabsCategory.toggleActive}
              />
            ))}
          </div>
          <div className={clsx(s.subcategories)}>
            {subCategories.map((subcategory, i) => (
              <SubcategoryButton
                key={i}
                id={i}
                title={subcategory.title}
                active={tabsSubCategory.active}
                setActive={tabsSubCategory.toggleActive}
              />
            ))}
          </div>
        </div>
        <div className={clsx(s.body)}>
          {products && products.map((product) => <Product key={product.id} {...product} />)}
        </div>
      </div>
    </section>
  );
};
