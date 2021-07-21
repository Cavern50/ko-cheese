import React from "react";
import s from "./ProfileBody.module.scss";

export const ProfileBody = ({title, children}) => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </div>
  );
};

