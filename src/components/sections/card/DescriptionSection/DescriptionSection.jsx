import React from "react";
import clsx from "clsx";

import Accordion from "components/common/Accordion/Accordion";

import { BackButton } from "components/common/Buttons/BackButton/BackButton";
import { Thumbnails } from "components/common/Thumbnails/Thumbnails";
import { PurchaseControl } from "components/common/PurchaseControl/PurchaseControl";
import { ProductProperty } from "components/common/ProductProperty/ProductProperty";
import { allTastes , mainModalProperties } from "constants.js";
import { useModal } from "hooks";
import g from "styles/Main.module.scss";
import { ProductNutrient } from "components/common/ProductNutrient/ProductNutrient";
import { Subscribe } from "components/modals/Subscribe/Subscribe";
import { ModalWrapper } from "components/modals/ModalWrapper/ModalWrapper";
import s from "./DescriptionSection.module.scss";


export const DescriptionSection = ({ id, product }) => {
  const { info, nutritional } = product.properties;
  const subscribeModal = useModal();
  const subscribeHandler = () => {
    subscribeModal.showModal();
  };
  return (

    <>
      <BackButton/>
      <div className={s.container}>
        <div className={s.block}>
          <Thumbnails gallery={product.gallery}/>
          <div className={s.properties}>
            <div className={s.column}>
              {info.map(property => <ProductProperty key={property.id} {...property}/>)}
              <ProductProperty title="Вес" value={product.weight}/>
            </div>
            <div className={s.column}>
              {nutritional.map(property => <ProductProperty key={property.id} {...property}/>)}
            </div>
          </div>
        </div>
        <div className={s.info}>
          <h2 className={s.title}>
            {product.name}
            <br/>
            {product.addition}
          </h2>
          <div className={clsx(s.statuses)}>
            {product.statuses.map(({ status, name, count, date }) => (
              <span className={clsx(g.status, g[status])} key={name}>
                        {name}
                {count && ` ${count}  шт `}
                {date && `до ${date}`}
                     </span>
            ))}
          </div>
          <span className={clsx(s.price)}>{product.price} руб.</span>

          <p className={clsx(s.about)}>{product.about}</p>

          <div className={s.nutrients}>
            {nutritional.map(nutrient => <ProductNutrient key={nutrient.id} {...nutrient}/>)}
          </div>
          {product.tastes?.length && (
            <>
              <span className={clsx(s.with)}>С чем употребляют</span>
              <div className={clsx(s.tastes)}>
                {product.tastes.map((taste) => allTastes[taste])}
              </div>
            </>
          )}

          <PurchaseControl id={id} cart={false} subscribeHandler={subscribeHandler}/>

          <div className={clsx(s.description)}>
            <Accordion title={"Описание"}>
              <p>
                {product.description}
              </p>
            </Accordion>
          </div>

        </div>
      </div>
      {subscribeModal.isShowed &&
      <ModalWrapper closeModal={subscribeModal.hideModal} show={subscribeModal.isShowed} {...mainModalProperties}>
        <Subscribe closeModal={subscribeModal.hideModal}/>
      </ModalWrapper>
      }
    </>

  );
};
