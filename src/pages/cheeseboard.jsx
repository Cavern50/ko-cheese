import React from 'react';
import { IntroSection } from 'components/sections/farm/IntroSection/IntroSection';
import { FarmContentLargeSection } from 'components/sections/farm/FarmContentLargeSection/FarmContentLargeSection';
import { FarmContentSmallSection } from 'components/sections/farm/FarmContentSmallSection/FarmContentSmallSection';
import { GallerySection } from 'components/sections/farm/GallerySection/GallerySection';
import DataAPI from '../api/DataAPI';

const Cheeseboard = ({ farmCategories, resolvedUrl, cheeseboard }) => {
  console.log(cheeseboard, resolvedUrl, cheeseboard);
  return (
    <>
      <IntroSection categories={farmCategories} url={resolvedUrl} pageData={cheeseboard}/>
      <FarmContentSmallSection pageData={cheeseboard} firstItem="left"/>
      {cheeseboard.gallery && <GallerySection pageData={cheeseboard}/>}
      <FarmContentLargeSection pageData={cheeseboard}/>
    </>
  );
};


export default Cheeseboard;

// const getCategories = async () => await FarmAPI.getFarmCategories();
// const getPageData = async (url) => await FarmAPI.getPage(url);

const getData = async () => await DataAPI.getData();

export const getServerSideProps = async ({ resolvedUrl }) => {
  // const categories = await getCategories();
  // const pageData = await getPageData(resolvedUrl.slice(1));
  const { cheeseboard } = await getData();
  const { farmCategories } = await getData();
  return { props: { resolvedUrl, farmCategories, cheeseboard } };
};

