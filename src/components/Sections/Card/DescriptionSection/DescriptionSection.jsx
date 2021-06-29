import React from "react";
import clsx from "clsx";

import Accordion from "@components/Common/Accordion/Accordion";
import { Slider } from "@components/Common/Slider/Slider";
import { Product } from "@components/Common/Product/Product";
import { BackButton } from "@components/Common/BackButton/BackButton";
import { Thumbnails } from "@components/Pages/Card/Thumbnails/Thumbnails";
import { PurchaseControl } from "@components/Pages/Card/PurchaseControl/PurchaseControl";

import { allStatus, allTastes } from "src/constants";

import s from "./DescriptionSection.module.scss";
import g from "src/styles/Main.module.scss";

const sliderParams = {
   slider: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 0,
      slideClass: "product_slide",
   },
   nav: {
      counter: false,
   },
};

export const DescriptionSection = ({ id, product, products }) => {
   return (
      <section>
         <BackButton />
         <div className={s.container}>
            <Thumbnails gallery={product.gallery} />
            <div className={s.info}>
               <h2 className={s.title}>
                  {product.name}
                  <br />
                  {product.addition}
               </h2>
               <div className={clsx(s.statuses)}>
                  {product.allStatus.map((status) => (
                     <span className={clsx(g[status.name])} key={status.name}>
                        {allStatus[status.name].title}
                        {status.count && ` ${status.count}  шт `}
                        {status.date && `до ${status.date}`}
                     </span>
                  ))}
               </div>
               <span className={clsx(s.price)}>{product.price} руб.</span>
               <p className={clsx(s.description)}>{product.description}</p>
               {product.tastes?.length && (
                  <>
                     <span className={clsx(s.with)}>С чем употребляют</span>
                     <div className={clsx(s.tastes)}>
                        {product.tastes.map((taste) => allTastes[taste])}
                     </div>
                  </>
               )}

               <PurchaseControl id={id} />
               <div className={clsx(s.about)}>
                  <Accordion title={"Состав"}>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos minus delectus totam dolores inventore
                        labore itaque. Eos id dolore a quam aliquid nesciunt
                        vitae non explicabo dignissimos reprehenderit laboriosam
                        earum consequuntur labore, fugit enim dolor voluptatibus
                        quidem fuga at ipsam ab? Illum adipisci temporibus
                        veniam cum sint
                     </p>
                  </Accordion>
                  <Accordion title={"Описание"}>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos minus delectus totam dolores inventore
                        labore itaque. Eos id dolore a quam aliquid nesciunt
                        vitae non explicabo dignissimos reprehenderit laboriosam
                        earum consequuntur labore, fugit enim dolor voluptatibus
                        quidem fuga at ipsam ab? Illum adipisci temporibus
                        veniam cum sint
                     </p>
                  </Accordion>
               </div>
            </div>
         </div>
         <div className={clsx(s.products)}>
            <Slider
               title={"Сырная продукция"}
               slides={products}
               params={sliderParams}
            >
               <Product additionClass={"card_slider"} />
            </Slider>
         </div>
      </section>
   );
};
