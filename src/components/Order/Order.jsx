import React from "react";
import { OrderHeader } from "components/Order/OrderHeader/OrderHeader";
import ProductsAPI from "api/ProductsAPI";
import { OrderItem } from "components/Order/OrderItem/OrderItem";
import { FormContainer } from "components/forms/FormContainer/FormContainer";

import { OrderControls } from "components/Order/OrderControls/OrderControls";
import { SubscribeControls } from "components/Order/SubscribeControls/SubscribeControls";
import s from "components/Order/Order.module.scss";


const orderInfo = [
  {
    id: 1,
    label: "Номер заказа:",
    value: "234519"
  },
  {
    id: 2,
    label: "Дата:",
    value: "12.04.2021"
  },
  {
    id: 3,
    label: "Статус:",
    value: "Завершен",
    statusId: 25
  },
  {
    id: 4,
    label: "Товаров:",
    value: 2
  }, {
    id: 5,
    label: "Цена:",
    value: "2245 руб."
  }
];


export const Order = ({ controls, subscribe, data }) => {

  const [products, setProducts] = React.useState([]);

  const getItems = async () => await ProductsAPI.getProducts();

  React.useEffect(() => {
    getItems().then(items => setProducts(items));
  }, []);

  const getOrders = (controlPanel, props) => products.length ? products.map((order, i) => i < 2 &&
    <OrderItem controls={controlPanel} key={order.id} {...order} {...props}/>) : "";


  return (
    <div className={s.container}>
      <OrderHeader data={orderInfo}/>
      {controls ?
        <FormContainer initialValues={{}}>
          {(formProps) => (
            <>
              <div>
                {getOrders(true, formProps)}
              </div>
              <OrderControls formProps={formProps}/>
            </>
          )}
        </FormContainer>
        :
        <div>{getOrders(false)}</div>}
      {subscribe && <SubscribeControls/>}
    </div>
  );
};

