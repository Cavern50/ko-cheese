import React from 'react';
import { IntroSection } from 'components/sections/farm/IntroSection/IntroSection';
import { FarmContentLargeSection } from 'components/sections/farm/FarmContentLargeSection/FarmContentLargeSection';
import { FarmContentSmallSection } from 'components/sections/farm/FarmContentSmallSection/FarmContentSmallSection';
import { GallerySection } from 'components/sections/farm/GallerySection/GallerySection';
import DataAPI from '../api/DataAPI';

const Cheeseboard = ({ farmCategories, resolvedUrl, cheeseBoard }) => {
  console.log(cheeseBoard, resolvedUrl, cheeseBoard);
  return (
    <>
      <IntroSection categories={farmCategories} url={resolvedUrl} pageData={cheeseBoard}/>
      <FarmContentSmallSection pageData={cheeseBoard} firstItem="left"/>
      {cheeseBoard.gallery && <GallerySection pageData={cheeseBoard}/>}
      <FarmContentLargeSection pageData={cheeseBoard}/>
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
  const { cheeseBoard } = await getData();
  const { farmCategories } = await getData();
  return { props: { resolvedUrl, farmCategories, cheeseBoard } };
};

