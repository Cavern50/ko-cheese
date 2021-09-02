import React from "react";

import { Tabs } from "components/layout/Tabs/Tabs";
import { TabButton } from "components/buttons/TabButton/TabButton";
import { SubcategoryButton } from "components/buttons/SubcategoryButton/SubcategoryButton";
import { Recipe } from "components/common/Recipe/Recipe";

import { useTabs } from "hooks";

import ArticlesAPI from "api/ArticlesAPI";

import s from "./RecipesSection.module.scss";

export const RecipesSection = ({ categories, items }) => {


  const { activeId: activeCategoryId, toggleActiveId: toggleCategoryId } = useTabs(categories[0].id, false);
  const { activeId: activeSubCategoryId, toggleActiveId: toggleSubCategoryId } = useTabs(categories[0].subcategories[0].id, false);


  const [activeCategory, setActiveCategory] = React.useState(categories[0]);
  const [activeCategoryItems, setActiveCategoryItems] = React.useState(items);


  const getPosts = async (url) => await ArticlesAPI.getPosts(url);


  React.useEffect(() => {
    setActiveCategory(categories.find(category => category.id === activeCategoryId));
    toggleSubCategoryId(activeCategory.subcategories[0].id);
  }, [activeCategoryId]);

  React.useEffect(() => {
    getPosts(activeCategory.url).then(res => setActiveCategoryItems(res));
  }, [activeCategory]);


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
          <SubcategoryButton key={id} title={title} id={id} active={activeSubCategoryId} toggleActive={toggleSubCategoryId}/>)}
      </div>
      <div className={s.posts}>
        {activeCategoryItems.length > 0 && activeCategoryItems.map((post, i) => <Recipe key={i} {...post} />)}
      </div>
    </>
  );
};



