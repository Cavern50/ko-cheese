import React from "react";
import Head from "next/head";

import { ProductsSection } from "components/sections/common/ProductsSection/ProductsSection";
import { NewTastesSection } from "components/sections/common/NewTastesSection/NewTastesSection";
import { DiscountSection } from "components/sections/common/DiscountSection/DiscountSection";
import { Discount } from "components/common/Discount/Discount";
import { useModal } from "hooks";
import { Wrapper } from "components/layout/Wrapper/Wrapper";


import { H1 } from "components/layout/H1/H1";
import DataAPI from "api/DataAPI";

const Products = ({ products, newProducts, discountProduct, productsCategories }) => {
  const discountModal = useModal(true, false);
  return (
    <>
      <Head/>
      <Wrapper>
        {discountModal.isShowed && (
          <Discount
            text="Вам представлена скидка на перый заказ 10%"
            close={discountModal.hideModal}
          />
        )}
        <H1>Продукция</H1>
      </Wrapper>
      <ProductsSection products={products} categories={productsCategories}/>
      <NewTastesSection products={newProducts}/>
      <DiscountSection {...discountProduct}/>
    </>
  );
};

export default Products;
//
// const getProducts = async () => {
//   const newProducts = await ProductsAPI.getNewProducts();
//   const products = await ProductsAPI.getProducts();
//   const productsCategories = await ProductsAPI.getProductsCategories();
//   const discountProduct = await ProductsAPI.getDiscountProduct();
//
//   return { products, newProducts, productsCategories, discountProduct };
// };
//
//
// export const getServerSideProps = async () => {
//   const { products, newProducts, productsCategories, discountProduct } = await getProducts();
//   return { props: { products, discountProduct, newProducts, productsCategories } };
// };


const getData = async () => await DataAPI.getData();

export const getServerSideProps = async () => {
  // const categories = await getCategories();
  // const pageData = await getPageData(resolvedUrl.slice(1));
  const { products, newProducts, discountProduct, productsCategories } = await getData();
  return { props: { products, newProducts, discountProduct, productsCategories } };
};

