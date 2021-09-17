import React from "react";

import { Tabs } from "components/layout/Tabs/Tabs";
import { TabButton } from "components/buttons/TabButton/TabButton";
import { SubcategoryButton } from "components/buttons/SubcategoryButton/SubcategoryButton";
import { Recipe } from "components/common/Recipe/Recipe";

import { useTabs } from "hooks";

import ArticlesAPI from "api/ArticlesAPI";

import APIBitrix from "api/APIBitrix";
import s from "./RecipesSection.module.scss";

export const RecipesSection = ({ categories, items }) => {

  const { id: categoryId, subcategories: subCategoryId } = categories[0];
  const { activeId: activeCategoryId, toggleActiveId: toggleCategoryId } = useTabs(categoryId, false);
  const { activeId: activeSubCategoryId, toggleActiveId: toggleSubCategoryId } = useTabs(subCategoryId[0].id, false);

  const [activeCategory, setActiveCategory] = React.useState(categories[0]);
  const [activePosts, setActivePosts] = React.useState(items);

  React.useEffect(() => {
    setActiveCategory(categories.find(category => category.id === activeCategoryId));
    console.log(activeSubCategoryId);
  }, [activeCategoryId]);


  React.useEffect(() => {
    toggleSubCategoryId(activeCategory.subcategories ? activeCategory.subcategories[0].id : activeCategory.id);
  }, [activeCategory]);

  React.useEffect(() => {
    const getPosts = async () => {
      const posts = await APIBitrix.getData(`articles/collection/${activeSubCategoryId}`);
      console.log(activeCategoryId);
      setActivePosts(posts);
    };

    getPosts();
    
  }, [activeSubCategoryId]);

  // React.useEffect(() => {
  //   getPosts(activeCategory.url).then(res => setActiveCategoryItems(res));
  //   // const testApi = async () => await axios.get(`http://192.168.1.141/api/articles/getPreviewsByCategory/${activeCategoryId}`).then(res => setActiveCategoryItems(res.data.list));
  //   // testApi();
  // }, [activeCategory]);


  // React.useEffect(() => {
  //   const getPosts = async () => {
  //     const posts = await APIBitrix.getData('')
  //   }
  // }, [activeCategoryId, activeSubCategoryId]);

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
        {
          activeCategory.subcategories && activeCategory.subcategories.map(({ name, id }) =>
            <SubcategoryButton
              key={id}
              title={name}
              id={id}
              active={activeSubCategoryId}
              toggleActive={toggleSubCategoryId}/>)
        }
      </div>
      <div className={s.posts}>
        {activePosts.length ? activePosts.map((post, i) =>
          <Recipe
            key={i}
            isPreview {...post} />) : ""}
      </div>
    </>
  );
};



