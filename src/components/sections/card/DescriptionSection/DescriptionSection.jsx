import React from "react";
import clsx from "clsx";
import parse from "html-react-parser";

import Accordion from "components/common/Accordion/Accordion";
import { BackButton } from "components/buttons/BackButton/BackButton";
import { Thumbnails } from "components/common/Thumbnails/Thumbnails";
import { PurchaseControl } from "components/common/PurchaseControl/PurchaseControl";
import { ProductProperty } from "components/Product/ProductProperty/ProductProperty";
import { allTastes, windowSize, BASE_SITE_URL } from "constants.js";

import { ProductNutrient } from "components/Product/ProductNutrient/ProductNutrient";
import { Swiper, SwiperSlide } from "swiper/react";
import { useClientSide } from "hooks";
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
    previewText: "",
    quantity: 1,
  };
  const properties = {
    ...defaults,
    ...product
  };

  const {
    name,
    addition,
    detailText,
    info,
    nutritional,
    weight,
    previewText,
    price,
    tastes,
    gallery,
    status,
    count
  } = properties;
  const isClientSide = useClientSide();
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
          isClientSide && windowSize >= 768 ?
            <Thumbnails gallery={gallery}/>
            :
            <Swiper
              spaceBetween={15}
            >
              {gallery.map(el =>
                <SwiperSlide key={el}>
                  <img className={s.slide} src={BASE_SITE_URL + el} alt={name}/>
                </SwiperSlide>)}
            </Swiper>
        }
        {isClientSide && windowSize >= 768 && productProperties}

      </div>
      <div className={s.info}>
        <h2 className={s.title}>
          {name}
          <br/>
          {addition}
        </h2>
        <div className={s.statuses}>
          <span className={clsx(s.status, status ? s.inStock : s.outStock)}>
            {status ? "в наличии" : "нет в наличии"}{count > 0 && ` ${count}  шт `}
            {/*{date && `до ${date}`}*/}
          </span>
        </div>
        <span className={s.price}>{parseInt(price, 10)} руб.</span>
        {!isClientSide && windowSize <= 768 && productProperties}
        <p className={s.about}>{parse(previewText)}</p>

        {/*<div className={s.nutrients}>*/}
        {/*  {nutritional.map(nutrient => <ProductNutrient key={nutrient.id} {...nutrient}/>)}*/}
        {/*</div>*/}
        {tastes.length && <>
          <span className={s.with}>С чем употребляют</span>
          <div className={s.tastes}>
            {tastes.map((taste, index) => <span key={index} title="Подпись вкуса">{allTastes[taste]}</span>)}
          </div>
        </>}

        <PurchaseControl product={properties} id={id} cart={false}/>
        {
          detailText &&
          <div className={s.description}>
            <Accordion title={"Описание"}>
              {parse(detailText)}
            </Accordion>
          </div>
        }
      </div>
    </div>
  </>;
};
