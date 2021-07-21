import React from "react";

import s from "./Cookies.module.scss";

export const Cookies = ({ close }) => (
  <>
    <p className={s.text}>
      Мы используем cookies, чтобы сайт работал корректно. Они помогают нам понять, как
      пользователи взаимодействуют с сайтом, чтобы улучшать его работу. Информация собирается
      анонимно. Нажимая кнопку ХОРОШО, вы разрешаете использование файлов cookie
    </p>
    <button type="button" className={s.ok} onClick={() => close()}>Хорошо</button>
  </>
);
