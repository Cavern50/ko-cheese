import React from "react";
import { OrderHeader } from "components/common/Order/OrderHeader/OrderHeader";
import ProductsAPI from "api/ProductsAPI";
import { OrderItem } from "components/common/Order/OrderItem/OrderItem";
import { FormContainer } from "components/forms/FormContainer/FormContainer";

import { OrderControls } from "components/common/Order/OrderControls/OrderControls";
import s from "./Order.module.scss";

export const Order = ({ children, controls }) => {

  const [products, setProducts] = React.useState([]);

  const getItems = async () => await ProductsAPI.getProducts();

  React.useEffect(() => {
    getItems().then(items => setProducts(items));
  }, []);
  
  const getOrders = (controlPanel, props) => products.length && products.map((order, i) => i < 2 &&
      <OrderItem controls={controlPanel} key={order.id} {...order} {...props}/>);


  return (
    <div className={s.container}>
      <OrderHeader/>
      {controls ?
        <FormContainer initialValues={{ "order-item": false }}>
          {(formProps) => (
            <>
              {getOrders(true, formProps)}
              <OrderControls formProps={formProps}/>
            </>
          )}
        </FormContainer>
        :
        getOrders(false)}
    </div>
  );
};

