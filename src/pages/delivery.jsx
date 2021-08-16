import React from 'react';
import Head from 'next/head';

import { Wrapper } from 'components/layout/Wrapper/Wrapper';
import { H1 } from 'components/layout/H1/H1';
import { DeliverySection } from 'components/sections/delivery/DeliverySection';
import DeliveryAPI from "api/DeliveryAPI";

const Delivery = ({deliveryData}) => (
    <>
      <Head />
      <Wrapper>
        <H1>Доставка и оплата</H1>
        <DeliverySection deliveryData={deliveryData.delivery} />
      </Wrapper>
    </>
  );

export default Delivery;

// eslint-disable-next-line no-return-await
const getDeliveryData = async () => await DeliveryAPI.getDeliveryData();


export const getServerSideProps = async () => {
  const deliveryData = await getDeliveryData();
  return { props: { deliveryData } };
};