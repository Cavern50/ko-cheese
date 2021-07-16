import React from "react";
import FarmAPI from "api/FarmAPI";
import { IntroSection } from "components/sections/farm/IntroSection/IntroSection";
import { FarmContentLargeSection } from "components/sections/farm/FarmContentLargeSection/FarmContentLargeSection";
import { FarmContentSmallSection } from "components/sections/farm/FarmContentSmallSection/FarmContentSmallSection";
import {GallerySection} from "components/sections/farm/GallerySection/GallerySection";

const Cheeseboard = ({ categories, resolvedUrl, pageData }) => (
    <>
      <IntroSection categories={categories} url={resolvedUrl} pageData={pageData}/>
      <FarmContentSmallSection pageData={pageData} firstItem="left"/>
      {pageData.gallery && <GallerySection pageData={pageData}/>}
      <FarmContentLargeSection pageData={pageData}/>
    </>
  );

export default Cheeseboard;

const getCategories = async () => await FarmAPI.getFarmCategories();
const getPageData = async (url) => await FarmAPI.getPage(url);

export const getServerSideProps = async ({ resolvedUrl }) => {
  const categories = await getCategories();
  const pageData = await getPageData(resolvedUrl.slice(1));
  return { props: { resolvedUrl, categories, pageData } };
};

