import React from "react";
import Collapsible from "react-collapsible";
import clsx from "clsx";
import s from "./Accordion.module.scss";

const Accordion = ({ title, children, button, additionClasses = "" }) => {
  const { triggerClass, contentClass } = additionClasses;
  return (
    <div className={s.tab}>
      <Collapsible
        triggerClassName={clsx(s.trigger, s[triggerClass])}
        triggerOpenedClassName={clsx(s.trigger, s[triggerClass], s.trigger_open)}
        triggerTagName={"h3"}
        contentInnerClassName={clsx(s.content, s[contentClass])}
        trigger={title}
        transitionTime={300}
      >
        {children}
        {button && <button type={"button"} className={s.button}>Отправить заявку</button>}
      </Collapsible>
    </div>
  );
};

export default Accordion;
