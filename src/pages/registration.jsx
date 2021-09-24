import React from "react";
import { H1 } from "components/layout/H1/H1";
import { Wrapper } from "components/layout/Wrapper/Wrapper";
import { RegSection } from "components/sections/auth/RegSection/RegSection";

const Registration = () => {
  return (
    <Wrapper>
      <H1 additionClass="profile">Личный кабинет</H1>
      <RegSection/>
    </Wrapper>
  );
};

export default Registration;