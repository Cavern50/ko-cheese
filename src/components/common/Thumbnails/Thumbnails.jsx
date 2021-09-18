import React from "react";
import clsx from "clsx";
import { BASE_SITE_URL } from "constants.js";
import s from "./Thumbnails.module.scss";

export const Thumbnails = ({ gallery }) => {
  const [activeMain, setActiveMain] = React.useState("");
  const [activeMini, setActiveMini] = React.useState(0);

  const switchImage = (image, i) => {
    setActiveMain(image);
    setActiveMini(i);
  };
  React.useEffect(() => {
    setActiveMain("");
    setActiveMini(0);
  }, [gallery]);
  return (
    <div className={s.container}>
      <div className={s.preview}>
        {gallery.map((image, i) => (
          <img
            className={clsx(s.mini, i === activeMini ? s.active : "")}
            src={BASE_SITE_URL + image}
            alt=""
            key={i}
            onClick={() => switchImage(image, i)}
          />
        ))}
      </div>
      <img className={s.main} src={BASE_SITE_URL + (activeMain || gallery[0])} alt=""/>
    </div>
  );
};
