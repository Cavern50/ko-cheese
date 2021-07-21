import React from "react";

import { Step } from "components/common/Step/Step";
import { WrapperNarrow } from "components/layout/WrapperNarrow/WrapperNarrow";
import s from "./StepsSection.module.scss";


export const StepsSection = ({ stages }) => {
  const { promo, steps } = stages;
  return (
    <section className={s.section}>
      <WrapperNarrow>
        <h2>Этапы</h2>
        <img className={s.promo} src={promo} alt=""/>
        <div>
          {steps.map((step, index) => <Step index={index} {...step}/>)}
        </div>
      </WrapperNarrow>
    </section>
  );
};


