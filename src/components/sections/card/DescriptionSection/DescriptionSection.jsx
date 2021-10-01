import React from "react";
import clsx from "clsx";
import parse from "html-react-parser";

import Accordion from "components/common/Accordion/Accordion";
import { BackButton } from "components/buttons/BackButton/BackButton";
import { Thumbnails } from "components/common/Thumbnails/Thumbnails";
import { PurchaseControl } from "components/common/PurchaseControl/PurchaseControl";
import { ProductProperty } from "components/Product/ProductProperty/ProductProperty";
import { allTastes, windowSize, BASE_SITE_URL } from "constants.js";
import SwiperCore, {
  Pagination
} from "swiper/core";

import { ProductNutrient } from "components/Product/ProductNutrient/ProductNutrient";
import { Swiper, SwiperSlide } from "swiper/react";
import { useClientSide } from "hooks";
import s from "./DescriptionSection.module.scss";

const defaults = {
  name: "",
  addition: "",
  detailText: "",
  info: [],
  discount: "10%",
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
  composition: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece o\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.\"\nf classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. \"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
};

export const DescriptionSection = ({ id, product }) => {
  SwiperCore.use([Pagination]);
  console.log(product);
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
    composition,
    discount,
    tastes,
    gallery,
    status,
    count
  } = properties;

  const newPrice = parseInt(price, 10) - parseInt(price, 10) * parseInt(discount, 10) / 100;

  const isClientSide = useClientSide();
  const productProperties =
    <div className={s.properties}>
      <div className={s.column}>
        {info.map(property => <ProductProperty key={property.id} {...property}/>)}
        <ProductProperty title="Вес" value={weight}/>
      </div>
    </div>;
  return (
    <>
      <BackButton/>
      <div className={s.container}>
        <div className={s.block}>
          {
            isClientSide && windowSize >= 768 ?
              <Thumbnails gallery={gallery}/>
              :
              <div className={s.slider}>
                <Swiper
                  className="swiper-product"
                  spaceBetween={15}
                  pagination
                >
                  {gallery.map(el =>
                    <SwiperSlide key={el}>
                      <img className={s.slide} src={BASE_SITE_URL + el} alt={name}/>
                    </SwiperSlide>)}
                </Swiper>
              </div>
          }
          {isClientSide && windowSize >= 768 && productProperties}

        </div>
        <div className={s.info}>
          <h2 className={s.title}>
            {name}
            <br/>
            {addition}
          </h2>
          {
            discount &&
            <div className={s.discount}>
              <span>На этот заказ у вас скидка </span>
              <span>-{discount}</span>
            </div>
          }
          <div className={s.statuses}>
          <span className={clsx(s.status, status && count > 0 ? s.inStock : s.outStock)}>
            {status && count > 0 ? "в наличии" : "нет в наличии"}
            {/*{count > 0 && ` ${count}  шт `}*/}
            {/*{date && `до ${date}`}*/}
          </span>
          </div>
          <div className={s.price}>
            {
              newPrice &&
              <span className={s.newPrice}>{newPrice} руб.</span>
            }
            <span className={newPrice ? s.oldPrice : s.commonPrice}>{parseInt(price, 10)} руб.</span>
          </div>
          <span className={s.weight}>{weight} г.</span>
          {
            isClientSide && windowSize <= 768 &&
            productProperties
          }
          <p className={s.about}>{parse(previewText)}</p>
          <div className={s.nutrients}>
            {nutritional.map(nutrient => <ProductNutrient key={nutrient.id} {...nutrient}/>)}
          </div>
          {/*{*/}
          {/*  tastes.length && <>*/}
          {/*  <span className={s.with}>С чем употребляют</span>*/}
          {/*  <div className={s.tastes}>*/}
          {/*    {tastes.map((taste, index) => <span key={index} title="Подпись вкуса">{allTastes[taste]}</span>)}*/}
          {/*  </div>*/}
          {/*</>*/}
          {/*}*/}
          <PurchaseControl product={properties} id={id} cart={false}/>
          <div className={s.composition}>
            {
              composition &&
              <Accordion title={"Состав"}>
                {parse(composition)}
              </Accordion>
            }
            {
              detailText &&
              <Accordion title={"Описание"}>
                {parse(detailText)}
              </Accordion>
            }
          </div>
        </div>
      </div>
    </>
  );
};
