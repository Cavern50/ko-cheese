import React from "react";
import s from "components/common/Profile/ProfileBody/ProfileBody.module.scss";
import clsx from "clsx";

export const ProfileBody = ({ children, title, id }) => {
  return (
    <div className={s.container}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

