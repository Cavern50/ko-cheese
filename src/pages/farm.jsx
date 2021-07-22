import React from "react";

import { IntroSection } from "components/sections/farm/IntroSection/IntroSection";
import { FarmContentLargeSection } from "components/sections/farm/FarmContentLargeSection/FarmContentLargeSection";
import { FarmContentSmallSection } from "components/sections/farm/FarmContentSmallSection/FarmContentSmallSection";
import { GallerySection } from "components/sections/farm/GallerySection/GallerySection";
import DataAPI from '../api/DataAPI';

const Farm = ({ farmCategories, resolvedUrl, farm }) => (
  <>
    <IntroSection categories={farmCategories} url={resolvedUrl} pageData={farm}/>
    <FarmContentLargeSection pageData={farm}/>
    <FarmContentSmallSection pageData={farm} firstItem="right"/>
    {farm.gallery && <GallerySection pageData={farm}/>}
  </>
);

export default Farm;

// const getCategories = async () => await FarmAPI.getFarmCategories();
// const getPageData = async (url) => await FarmAPI.getPage(url);
//
// export const getServerSideProps = async ({ resolvedUrl }) => {
//   const categories = await getCategories();
//   const pageData = await getPageData(resolvedUrl.slice(1));
//   return { props: { resolvedUrl, categories, pageData } };
// };

const getData = async () => await DataAPI.getData();

export const getServerSideProps = async ({ resolvedUrl }) => {
  // const categories = await getCategories();
  // const pageData = await getPageData(resolvedUrl.slice(1));
  const { farm, farmCategories } = await getData();
  return { props: { resolvedUrl, farmCategories, farm } };
};

