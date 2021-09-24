import React from "react";
import Head from "next/head";

import { PromoSection } from "components/sections/index/PromoSection/PromoSection";
import { NewTastesSection } from "components/sections/common/NewTastesSection/NewTastesSection";
import { ProductsSection } from "components/sections/common/ProductsSection/ProductsSection";
import { DiscountSection } from "components/sections/common/DiscountSection/DiscountSection";
import { RecipesSliderSection } from "components/sections/common/RecipesSliderSection/RecipesSliderSection";
import { TelegramPromoSection } from "components/sections/index/TelegramPromoSection/TelegramPromoSection";
import { InstagramSection } from "components/sections/index/InstagramSection/InstagramSection";
import { ModalWrapper } from "components/modals/ModalWrapper/ModalWrapper";
import { Cookies } from "components/modals/Cookies/Cookies";

import { useModal } from "hooks";

import ProductsAPI from "api/ProductsAPI";
import { PartnersSection } from "components/sections/index/PartnersSection/PartnersSection";
import APIBitrix from "api/APIBitrix";

const cookiesModalProperties = {
  animation: {
    animationShow: "moveFromBottom",
    animationHide: "moveToBottom"
  },
  classes: {
    boxClass: "cookiesBox",
    containerClass: "cookiesContainer"
  }
};

const Index = ({ promoContent, products, discountProduct, categories, posts, newProducts }) => {

  const cookiesModal = useModal(true, false);
  const [showDelay, setShowDelay] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setShowDelay(true);
    }, 5000);
  }, []);
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <PromoSection {...promoContent}/>
      <NewTastesSection newProducts={newProducts}/>
      <ProductsSection products={products} categories={categories}/>
      {/*<DiscountSection {...discountProduct}/>*/}
      <RecipesSliderSection recipes={posts} title="Рецепты"/>
      <TelegramPromoSection url={"http://instagram.com/instagram"}/>
      <InstagramSection/>
      <PartnersSection/>
      {cookiesModal.isShowed && showDelay ?
        <ModalWrapper show={cookiesModal.isShowed} closeModal={cookiesModal.hideModal} {...cookiesModalProperties}>
          <Cookies close={cookiesModal.hideModal}/>
        </ModalWrapper> : ""}
    </>
  );
};

export default Index;

export const getServerSideProps = async () => {
  const promoContent = await APIBitrix.get("content/main/promo-section/").then(res => res[0]);
  const categories = await APIBitrix.get("products/categories/");
  const products = await APIBitrix.get(`products/collection/${categories[0].subcategories[0].id}`);
  const newProducts = await APIBitrix.get("products/slider/").then(res => res.products);
  const posts = await APIBitrix.get(`articles/collection/`);
  // const discountProduct = await ProductsAPI.getDiscountProduct();
  return { props: { products, discountProduct, categories, posts, newProducts, promoContent } };
};
