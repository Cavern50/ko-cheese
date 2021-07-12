import React from 'react';

import { Tabs } from '@components/layout/Tabs/Tabs';
import { TabButton } from '@components/common/Buttons/TabButton/TabButton';
import { SubcategoryButton } from '@components/common/Buttons/SubcategoryButton/SubcategoryButton';
import { Recipe} from '@components/common/Recipe/Recipe';

import { useTabs } from 'src/hooks';

import ArticlesAPI from '../../../api/ArticlesAPI';

import s from './RecipesSection.module.scss';

export const RecipesSection = ({ categories, items }) => {


  const { activeId: activeCategoryId, toggleActiveId: toggleCategoryId } = useTabs(categories[0].id, false);
  const { activeId: activeSubCategoryId, toggleActiveId: toggleSubCategoryId } = useTabs(categories[0].subcategories[0].id, false);


  const [activeCategory, setActiveCategory] = React.useState(categories[0]);
  const [activeCategoryItems, setActiveCategoryItems] = React.useState(items.posts);


  const getPosts = async (url) => {
    return await ArticlesAPI.getPosts(url);
  };


  React.useEffect(() => {
    setActiveCategory(categories.find(category => category.id === activeCategoryId));
    toggleSubCategoryId(activeCategory.subcategories[0].id);
  }, [activeCategoryId]);

  React.useEffect(() => {
    getPosts(activeCategory.url).then(res => setActiveCategoryItems(res.posts));
  }, [activeCategory])

  console.log(activeCategoryItems);

  return (
    <>
      <Tabs>
        {categories.map(({ title, id }) => (
          <TabButton
            key={id}
            index={id}
            text={title}
            active={activeCategoryId}
            toggleActive={toggleCategoryId}
          />
        ))}
      </Tabs>
      <div className={s.subcategories}>
        {categories.find(category => category.id === activeCategoryId).subcategories.map(({ title, id }) =>
          <SubcategoryButton title={title} id={id} active={activeSubCategoryId} setActive={toggleSubCategoryId}/>)}
      </div>
      <div className={s.posts}>
        {activeCategoryItems.length > 0 && activeCategoryItems.map(post => <Recipe {...post} />)}
      </div>
    </>
  );
};


// const getCategories = async () => {
//   return await ArticlesAPI.getCategories();
// };
//
// const getRecipes = async () => {
//   return await ArticlesAPI.getRecipes();
// };
//
// export const getServerSideProps = async () => {
//   const categories = await getCategories();
//   const recipes = await getRecipes();
//   return { props: { categories, recipes } };
// };


