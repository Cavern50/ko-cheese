import React from "react";
import s from "components/sections/profile/ProfileOrders/ProfileOrders.module.scss";
import { ProfileControls } from "components/common/Profile/ProfileControls/ProfileControls";
import { Order} from "components/Order/Order";

export const ProfileOrders = () => {
  return (
    <>
      <ProfileControls/>
      <Order controls/>
    </>
  );
};

