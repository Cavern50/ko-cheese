import React from "react";
import { ProfileButton } from "components/buttons/ProfileButton/ProfileButton";
import s from "./ProfileAside.module.scss";

export const ProfileAside = ({ categories, active, setActive }) => {

  return (
    <aside className={s.wrapper}>
      <nav className={s.nav}>
        {categories.map(({ id, title }) => (
          <ProfileButton
            active={active}
            setActive={setActive}
            key={id}
            id={id}
          >
            {title}
          </ProfileButton>
        ))}
      </nav>
    </aside>
  );
};


