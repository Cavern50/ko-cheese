import React from "react";
import clsx from "clsx";

import Accordion from "@components/common/Accordion/Accordion";

import { BackButton } from "@components/common/BackButton/BackButton";
import { Thumbnails } from "@components/pages/card/Thumbnails/Thumbnails";
import { PurchaseControl } from "@components/pages/card/PurchaseControl/PurchaseControl";

import { allTastes } from "src/constants";

import s from "./DescriptionSection.module.scss";
import g from "src/styles/Main.module.scss";


export const DescriptionSection = ({ id, product }) => {
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
                  {product.statuses.map(({status, name, count, date}) => (
                     <span className={clsx(g.status, g[status])} key={name}>
                        {name}
                        {count && ` ${count}  шт `}
                        {date && `до ${date}`}
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

      </section>
   );
};
