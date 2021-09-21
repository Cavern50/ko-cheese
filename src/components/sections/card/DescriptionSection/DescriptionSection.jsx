import React from "react";
import clsx from "clsx";

import Accordion from "components/common/Accordion/Accordion";
import { BackButton } from "components/buttons/BackButton/BackButton";
import { Thumbnails } from "components/common/Thumbnails/Thumbnails";
import { PurchaseControl } from "components/common/PurchaseControl/PurchaseControl";
import { ProductProperty } from "components/Product/ProductProperty/ProductProperty";
import { allTastes, windowSize, isClientSide, BASE_SITE_URL } from "constants.js";

import { ProductNutrient } from "components/Product/ProductNutrient/ProductNutrient";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./DescriptionSection.module.scss";


export const DescriptionSection = ({ id, product }) => {
  const defaults = {
    name: "",
    addition: "",
    detailText: "",
    info: [],
    nutritional: [],
    tastes: [],
    weight: 0,
    price: 0,
    gallery: [],
    status: false,
    count: 1,
    date: "",
    previewText: ""
  }
  const properties = {
    ...defaults,
    ...product
  }

  const cartProductsProps = {
    ...properties,
    cartCount : 1,
  }


  const {name, addition, detailText, info, nutritional, date, weight, previewText, price, tastes,  gallery, status, count} = properties;
  const isDesktop = isClientSide && windowSize >= 768;
  const productProperties =
      <div className={s.properties}>
        <div className={s.column}>
          {info.map(property => <ProductProperty key={property.id} {...property}/>)}
          <ProductProperty title="Вес" value={weight}/>
        </div>
        <div className={s.column}>
          {nutritional.map(property => <ProductProperty key={property.id} {...property}/>)}
        </div>
      </div>;

  return <>
    <BackButton/>
    <div className={s.container}>
      <div className={s.block}>
        {
          isClientSide ? windowSize >= 768 ?
              <Thumbnails gallery={gallery}/>
              :
              <Swiper
                  spaceBetween={15}
              >
                {gallery.map(el =>
                    <SwiperSlide key={el}>
                      <img className={s.slide} src={BASE_SITE_URL + el} alt={name}/>
                    </SwiperSlide>)}
              </Swiper> : ""
        }
        {isDesktop && productProperties}

      </div>
      <div className={s.info}>
        <h2 className={s.title}>
          {name}
          <br/>
          {addition}
        </h2>
        <div className={s.statuses}>
          <span className={clsx( s.status, status ? s.inStock : s.outStock)}>
            {status ? 'в наличии' : "нет в наличии"}{count > 0 && ` ${count}  шт `}
            {/*{date && `до ${date}`}*/}
          </span>
        </div>
        <span className={s.price}>{parseInt(price, 10)} руб.</span>
        {!isDesktop && productProperties}
        <p className={s.about}>{previewText}</p>

        <div className={s.nutrients}>
          {nutritional.map(nutrient => <ProductNutrient key={nutrient.id} {...nutrient}/>)}
        </div>
        {tastes.length && <>
          <span className={s.with}>С чем употребляют</span>
          <div className={s.tastes}>
            {tastes.map((taste) => allTastes[taste])}
          </div>
        </>}

        <PurchaseControl product={cartProductsProps} id={id} cart={false}/>

        <div className={s.description}>
          {
            detailText && <Accordion title={"Описание"}>
              <p>
                {detailText}
              </p>
            </Accordion>
          }

        </div>
      </div>
    </div>
  </>;
};
