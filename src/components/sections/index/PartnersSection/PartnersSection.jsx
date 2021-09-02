import React from "react";
import { Section } from "components/layout/Section/Section";
import { Wrapper } from "components/layout/Wrapper/Wrapper";
import { Partner } from "components/common/Partner/Partner";
import s from "./PartnersSection.module.scss";

const partners = [
  "static/img/content/partners/azbuka.png",
  "static/img/content/partners/vkuswill.png",
  "static/img/content/partners/globus.png",
  "static/img/content/partners/metro.png",
  "static/img/content/partners/carousel.png",
  "static/img/content/partners/auchan.png",
  "static/img/content/partners/gorunich.png",
  "static/img/content/partners/coffee.png"
];

export const PartnersSection = () => (
  <Section>
    <Wrapper>
      <h2 className={s.title}>Партнеры</h2>
      <div className={s.grid}>
        {partners.map((partner) => (
          <Partner key={partner} url={partner} />
        ))}
      </div>
    </Wrapper>
  </Section>
);
