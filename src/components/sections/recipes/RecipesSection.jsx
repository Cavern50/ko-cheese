import React from "react";

import { Tabs } from "components/layout/Tabs/Tabs";
import { TabButton } from "components/buttons/TabButton/TabButton";
import { SubcategoryButton } from "components/buttons/SubcategoryButton/SubcategoryButton";
import { Recipe } from "components/common/Recipe/Recipe";

import { useTabs } from "hooks";

import ArticlesAPI from "api/ArticlesAPI";

import axios from "axios";
import s from "./RecipesSection.module.scss";

export const RecipesSection = ({ categories, items }) => {

  console.log(categories);

  const { id: categoryId, subcategories: subCategoryId } = categories[0];
  const { activeId: activeCategoryId, toggleActiveId: toggleCategoryId } = useTabs(categoryId, false);
  const { activeId: activeSubCategoryId, toggleActiveId: toggleSubCategoryId } = useTabs(subCategoryId[0].id, false);

  const [activeCategory, setActiveCategory] = React.useState(categories[0]);
  const [activeCategoryItems, setActiveCategoryItems] = React.useState(items);

  React.useEffect(() => {
    console.log(activeCategory);
  });


  // const getPosts = async (url) => await ArticlesAPI.getPosts(url);

  // const getPosts = async (url) => await axios.get('')

  React.useEffect(() => {
    setActiveCategory(categories.find(category => category.id === activeCategoryId));
    activeCategory.subcategories && activeCategory.subcategories.length && toggleSubCategoryId(activeCategory.subcategories[0].id);
  }, [activeCategoryId]);


  React.useEffect(() => {
    // getPosts(activeCategory.url).then(res => setActiveCategoryItems(res));
    // const testApi = async () => await axios.get(`http://192.168.1.141/api/articles/getPreviewsByCategory/${activeCategoryId}`).then(res => setActiveCategoryItems(res.data.list));
    // testApi();
  }, [activeCategory]);


  return (
    <>
      <Tabs>
        {categories.map(({ name, id }) => (
          <TabButton
            key={id}
            index={id}
            text={name}
            active={activeCategoryId}
            toggleActive={toggleCategoryId}
          />
        ))}
      </Tabs>
      <div className={s.subcategories}>
        {categories.find(category => category.id === activeCategoryId).subcategories && categories.find(category => category.id === activeCategoryId).subcategories.map(({ name, id }) =>
          <SubcategoryButton key={id} title={name} id={id} active={activeSubCategoryId}
                             toggleActive={toggleSubCategoryId}/>)}
      </div>
      <div className={s.posts}>
        {activeCategoryItems && activeCategoryItems.length > 0 && activeCategoryItems.map((post, i) => <Recipe key={i} isPreview {...post} />)}
      </div>
    </>
  );
};



