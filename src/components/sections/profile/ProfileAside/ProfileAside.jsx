import React from "react";
import { ProfileButton } from "components/common/Buttons/ProfileButton/ProfileButton";
import s from "./ProfileAside.module.scss";

const navigationButtons = [{
  id: 1,
  text: "Заказы",
  action: ""
}, {
  id: 2,
  text: "Адреса доставки",
  action: ""
}, {
  id: 3,
  text: "Личные данные",
  action: ""
}, {
  id: 4,
  text: "Отправка отзыва",
  action: ""
}, {
  id: 5,
  text: "Программа лояльности",
  action: ""
}, {
  id: 6,
  text: "Возврат товара",
  action: ""
}];

export const ProfileAside = () => {
  const [active, setActive] = React.useState(0);
  return (
    <aside>
      <nav className={s.nav}>
        {navigationButtons.map(({ id, text }) => (
          <ProfileButton
            active={active}
            setActive={setActive}
            id={id}
          >
            {text}
          </ProfileButton>
        ))}
      </nav>
    </aside>
  );
};


