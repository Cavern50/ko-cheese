import React from "react";
import Head from "next/head";

import { ProductsSection } from "components/sections/common/ProductsSection/ProductsSection";
import { NewTastesSection } from "components/sections/common/NewTastesSection/NewTastesSection";
import { DiscountSection } from "components/sections/common/DiscountSection/DiscountSection";
import { Discount } from "components/common/Discount/Discount";
import { useModal } from "hooks";
import { Wrapper } from "components/layout/Wrapper/Wrapper";


import { H1 } from "components/layout/H1/H1";
import ProductsAPI from "api/ProductsAPI";
import NewProductsAPI from "api/NewProductsAPI";

const Products = ({ products, newProducts, discountProduct, categories }) => {
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
      <ProductsSection products={products} categories={categories}/>
      <NewTastesSection products={newProducts}/>
      <DiscountSection {...discountProduct}/>
    </>
  );
};

export default Products;

const getProducts = async () => await ProductsAPI.getProducts();
const getProductsCategories = async () => await ProductsAPI.getProductsCategories();
const getNewProducts = async () => await NewProductsAPI.getNewProducts();
const getDiscountProduct = async () => await ProductsAPI.getDiscountProduct();

export const getServerSideProps = async () => {
  const products = await getProducts();
  const newProducts = await getNewProducts();
  const discountProduct = await getDiscountProduct();
  const { categories } = await getProductsCategories();
  return { props: { products, discountProduct, newProducts, categories } };
};
