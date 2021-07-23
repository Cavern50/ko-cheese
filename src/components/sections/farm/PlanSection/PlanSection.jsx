import React from "react";
import { Section } from "components/layout/Section/Section";
import { Wrapper } from "components/layout/Wrapper/Wrapper";
import { H1 } from "components/layout/H1/H1";
import parse from "html-react-parser";
import s from "./PlanSection.module.scss";

export const PlanSection = ({ pageData }) => {
  console.log(pageData);
  const { plan: { image, list } } = pageData;
  return (
    <Section>
      <Wrapper>
        <H1>План фермы</H1>
      </Wrapper>
      <div className={s.wrapper}>
        <Wrapper>
          <div className={s.container}>
            <img src={image} alt="" className={s.image}/>
            {parse(list)}
          </div>
        </Wrapper>
      </div>
    </Section>
  );
};

