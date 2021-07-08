import React from 'react';

import { Tabs } from '@components/layout/Tabs/Tabs';
import { TabButton } from '@components/common/Buttons/TabButton/TabButton';
import { SubcategoryButton } from '@components/common/Buttons/SubcategoryButton/SubcategoryButton';

import { useTabs } from 'src/hooks';

const recipesCategories = [
  {
    id: 1,
    title: 'Рецепты',
    subcategories: [
      {
        id: 1,
        title: 'Горячие блюда'
      },
      {
        id: 2,
        title: 'Холодные блюда'
      },
      {
        id: 3,
        title: 'Закуски'
      },
      {
        id: 4,
        title: 'Блюда'
      }
    ]
  },
  {
    id: 2,
    title: 'Блюда',
    subcategories: [
        {
          id: 1,
          title: 'Закуски'
        },
        {
          id: 2,
          title: 'Блюда'
        }
      ]
  },
  {
    id: 3,
    title: 'Советы',
    subcategories: [
        {
          id: 1,
          title: 'Горячие советы'
        },
        {
          id: 2,
          title: 'Вредные советы'
        }
      ]
  }
];

const category = {
    id: 1,
    items: {
        
    }
}

export const RecipesSection = () => {
  const { activeId, toggleActiveId } = useTabs(recipesCategories[0].id, false);
  const [activeCategory, setActiveCategory] = React.useState(initialState);
  const [activeSubCategory, setActiveCategory] = React.useState(initialState);

  React.useEffect(() => {
    // setActiveCategory()
  }, [activeId]);

  React.useEffect(() => {
      
}, [activeId, activeCategory]);

  return (
    <>
      <Tabs>
        {recipesCategories.map(({ title, id }) => (
          <TabButton
            key={id}
            index={id}
            text={title}
            active={activeId}
            toggleActive={toggleActiveId}
          />
        ))}
      </Tabs>
      <div className={s.subcategories}>{<SubcategoryButton />}</div>
    </>
  );
};
