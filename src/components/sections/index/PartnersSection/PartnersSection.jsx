import React from "react";
import s from "./PartnersSection.module.scss";
import { Section } from "components/layout/Section/Section";
import { Wrapper } from "components/layout/Wrapper/Wrapper";

export const PartnersSection = () => {
  return (
    <Section>
      <Wrapper>
        <h2 className={s.title}>Партнеры</h2>
      </Wrapper>
    </Section>
  );
};

