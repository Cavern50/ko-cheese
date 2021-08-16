import React from "react";
import { ProfileSteps } from "components/common/Profile/ProfileSteps/ProfileSteps";
import { OrderHeader } from "components/common/Order/OrderHeader/OrderHeader";
import { Order } from "components/common/Order/Order";
import s from "./ProfileReturn.module.scss";

export const ProfileReturn = () => {
  console.log(1);
  return (
    <>
      <ProfileSteps/>
      <Order controls/>
    </>
  );
};

