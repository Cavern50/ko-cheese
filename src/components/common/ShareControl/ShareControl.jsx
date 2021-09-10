import React from "react";
import { BackButton } from "components/buttons/BackButton/BackButton";
import { Mail, Telegram, Vk } from "components/SVG/ArticleIcons";

import s from "./ShareControl.module.scss";

export const ShareControl = ({ back }) => (
  <div className={s.sticky}>
    <div className={s.controls}>
      {back && <BackButton additionClass="share"/>}
      <div className={s.share}>
        <button type="button" className={s.social}>
          <Vk/>
        </button>
        <button type="button" className={s.social}>
          <Telegram/>
        </button>
        <button type="button" className={s.social}>
          <Mail/>
        </button>
      </div>
    </div>
  </div>

);

