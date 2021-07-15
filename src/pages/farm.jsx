import React from "react";
import FarmAPI from "api/FarmAPI";

import { IntroSection } from "components/sections/farm/IntroSection";

const Farm = ({ categories, resolvedUrl, pageData }) => {
  return (
    <IntroSection categories={categories} url={resolvedUrl}/>
  );
};
export default Farm;

const getCategories = async () => await FarmAPI.getFarmCategories();
const getPageData = async (url) => await FarmAPI.getPage(url);

export const getServerSideProps = async ({resolvedUrl}) => {
  const categories = await getCategories();
  const pageData = await getPageData(resolvedUrl.slice(1));
  return { props: { resolvedUrl, categories, pageData } };
};

