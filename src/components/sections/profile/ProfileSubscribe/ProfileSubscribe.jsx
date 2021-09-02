import React from "react";
import { ProfileControls } from "components/common/Profile/ProfileControls/ProfileControls";
import { Order } from "components/Order/Order";

export const ProfileSubscribe = () => {
  return (
    <div>
      <ProfileControls/>
      <Order subscribe/>
    </div>
  );
};

