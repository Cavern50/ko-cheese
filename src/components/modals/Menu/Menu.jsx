import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { menuChangeModalState } from "redux/slices/modals";
import s from "./Menu.module.scss";

const headerLinks = [
  { title: "Каталог", link: "/products" },
  { title: "Доставка", link: "/delivery" },
  { title: "Статьи", link: "/articles" },
  { title: "Пункты продаж", link: "/sale-points" },
  { title: "Наше производство", link: "/farm" },
  { title: "Вопросы", link: "/questions" },
];

export const Menu = () => {
  const dispatch = useDispatch();
  const closeMenuModalHandler = () => {
    dispatch(menuChangeModalState(false));
  };
  return (
    <div className={s.container}>
      <div className={s.block}>
        {headerLinks.map(el =>
          <Link href={el.link} key={el.title}>
            <a className={s.link}>
              <h2 onClick={closeMenuModalHandler}>{el.title}</h2>
            </a>
          </Link>)}
      </div>
      <div className={s.block}/>
    </div>
  );
};

