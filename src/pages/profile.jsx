import React from "react";
import { ProfileHeader } from "components/sections/profile/ProfileHeader/ProfileHeader";
import { ProfileAside } from "components/sections/profile/ProfileAside/ProfileAside";
import { Wrapper } from "components/layout/Wrapper/Wrapper";
import { ProfileBody } from "components/sections/profile/ProfileBody/ProfileBody";
import { ProfilePersonal } from "components/sections/profile/ProfilePersonal/ProfilePersonal";
import { ProfileWrapper } from "components/sections/profile/ProfileWrapper/ProfileWrapper";

const Profile = () => {
  console.log(1);
  return (
    <Wrapper>
      <ProfileHeader/>
      <ProfileWrapper>
        <ProfileAside/>
        <ProfileBody title={"Личные данные"}>
          <ProfilePersonal/>
        </ProfileBody>
      </ProfileWrapper>
    </Wrapper>
  );
};

export default Profile;