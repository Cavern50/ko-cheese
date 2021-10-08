import React from "react";

import { IntroSection } from "components/sections/farm/IntroSection/IntroSection";
import { FarmContentLargeSection } from "components/sections/farm/FarmContentLargeSection/FarmContentLargeSection";
import { FarmContentSmallSection } from "components/sections/farm/FarmContentSmallSection/FarmContentSmallSection";
import { GallerySection } from "components/sections/farm/GallerySection/GallerySection";
import { PlanSection } from "components/sections/farm/PlanSection/PlanSection";
import Head from "next/head";
import DataAPI from '../api/DataAPI';

const Farm = ({ farmCategories, resolvedUrl, farm }) => (
  <>
    <Head>
      <title>Ферма</title>
    </Head>
    <IntroSection categories={farmCategories} url={resolvedUrl} pageData={farm}/>
    <FarmContentLargeSection pageData={farm}/>
    <FarmContentSmallSection pageData={farm} firstItem="right"/>
    {farm.gallery && <GallerySection pageData={farm}/>}
    {<PlanSection pageData={farm}/>}
  </>
);

export default Farm;

const getData = async () => await DataAPI.getData();

export const getServerSideProps = async ({ resolvedUrl }) => {
  const { farm, farmCategories } = await getData();
  return { props: { resolvedUrl, farmCategories, farm } };
};

