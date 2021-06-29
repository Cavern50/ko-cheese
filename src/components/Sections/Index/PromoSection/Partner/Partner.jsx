import React from "react";
import s from './Partner.module.scss';
export const Partner = ({logo, link}) => {
   return (
      <a href={link} className={s.partner}>{logo}</a>
   );
};
