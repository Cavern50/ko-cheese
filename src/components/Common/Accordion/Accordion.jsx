import React from "react";
import Collapsible from "react-collapsible";
import clsx from "clsx";
import s from "./Accordion.module.scss";

const Accordion = ({ title, children }) => {
   return (
      <div className={clsx(s.tab)}>
         <Collapsible
            triggerClassName={clsx(s.trigger)}
            triggerOpenedClassName={clsx(s.trigger, s.trigger_open)}
            triggerTagName={"h3"}
            contentInnerClassName={clsx(s.content)}
            trigger={title}
            transitionTime={200}
         >
            {children}
         </Collapsible>
      </div>
   );
};

export default Accordion;
