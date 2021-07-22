import React from 'react';
import FarmAPI from 'api/FarmAPI';
import { IntroSection } from 'components/sections/farm/IntroSection/IntroSection';
import { FarmContentLargeSection } from 'components/sections/farm/FarmContentLargeSection/FarmContentLargeSection';
import { FarmContentSmallSection } from 'components/sections/farm/FarmContentSmallSection/FarmContentSmallSection';
import { GallerySection } from 'components/sections/farm/GallerySection/GallerySection';
import DataAPI from '../api/DataAPI';

const Cheeseboard = ({ categories, resolvedUrl, pageData }) => (
  <>
    <IntroSection categories={categories} url={resolvedUrl} pageData={pageData}/>
    <FarmContentSmallSection pageData={pageData} firstItem="left"/>
    {pageData.gallery && <GallerySection pageData={pageData}/>}
    <FarmContentLargeSection pageData={pageData}/>
  </>
);

export default Cheeseboard;

// const getCategories = async () => await FarmAPI.getFarmCategories();
// const getPageData = async (url) => await FarmAPI.getPage(url);

const getData = async () => await DataAPI.getData();

export const getServerSideProps = async ({ resolvedUrl }) => {
  // const categories = await getCategories();
  // const pageData = await getPageData(resolvedUrl.slice(1));
  const { data } = await getData();
  const categories = data.farmCategories;
  const pageData = data[resolvedUrl.slice(1)];
  return { props: { resolvedUrl, categories, pageData } };
};

