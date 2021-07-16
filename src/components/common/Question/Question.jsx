import React from "react";
import Accordion from "components/common/Accordion/Accordion";
import s from './Question.module.scss';

export const Question = ({question, children}) => {
  return (
    <Accordion title={question}>
      <p className={s.answer}>{children}</p>
    </Accordion>
  );
};

