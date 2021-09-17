import React from "react";
import clsx from "clsx";

import Accordion from "components/common/Accordion/Accordion";
import { BackButton } from "components/buttons/BackButton/BackButton";
import { Thumbnails } from "components/common/Thumbnails/Thumbnails";
import { PurchaseControl } from "components/common/PurchaseControl/PurchaseControl";
import { ProductProperty } from "components/Product/ProductProperty/ProductProperty";
import { allTastes, windowSize, isClientSide } from "constants.js";

import g from "styles/Main.module.scss";
import { ProductNutrient } from "components/Product/ProductNutrient/ProductNutrient";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./DescriptionSection.module.scss";


export const DescriptionSection = ({ id, product }) => {
  const { info, nutritional } = product.properties;
  const isDesktop = isClientSide && windowSize >= 768;
  const productProperties =
    <div className={s.properties}>
      <div className={s.column}>
        {info.map(property => <ProductProperty key={property.id} {...property}/>)}
        <ProductProperty title="Вес" value={product.weight}/>
      </div>
      <div className={s.column}>
        {nutritional.map(property => <ProductProperty key={property.id} {...property}/>)}
      </div>
    </div>;
  console.log(isDesktop);
  return <>
    <BackButton/>
    <div className={s.container}>
      <div className={s.block}>
        {
          isClientSide ? windowSize >= 768 ?
            <Thumbnails gallery={product.gallery}/>
            :
            <Swiper
              spaceBetween={15}
            >
              {product.gallery.map(el =>
                <SwiperSlide key={el}>
                  <img className={s.slide} src={el} alt={product.name}/>
                </SwiperSlide>)}
            </Swiper> : ""
        }
        {isDesktop && productProperties}

      </div>
      <div className={s.info}>
        <h2 className={s.title}>
          {product.name}
          <br/>
          {product.addition}
        </h2>
        <div className={clsx(s.statuses)}>
          {product.statuses.map(({ status, name, count, date }) => <span className={clsx(g.status, g[status])}
                                                                         key={name}>
                      {name}
            {count && ` ${count}  шт `}
            {date && `до ${date}`}
                   </span>)}
        </div>
        <span className={clsx(s.price)}>{product.price} руб.</span>
        {!isDesktop && productProperties}
        <p className={clsx(s.about)}>{product.about}</p>

        <div className={s.nutrients}>
          {nutritional.map(nutrient => <ProductNutrient key={nutrient.id} {...nutrient}/>)}
        </div>
        {product.tastes?.length && <>
          <span className={clsx(s.with)}>С чем употребляют</span>
          <div className={clsx(s.tastes)}>
            {product.tastes.map((taste) => allTastes[taste])}
          </div>
        </>}

        <PurchaseControl product={product} id={id} cart={false}/>

        <div className={clsx(s.description)}>
          <Accordion title={"Описание"}>
            <p>
              {product.description}
            </p>
          </Accordion>
        </div>
      </div>
    </div>
  </>;
};
