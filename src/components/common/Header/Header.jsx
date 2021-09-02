import React from "react";
import clsx from "clsx";
import Link from "next/link";
import {
  cartChangeModalState,
  favoriteChangeModalState
} from "redux/slices/modals";


import { MainLogo } from "components/SVG/MainLogo";


import { Wrapper } from "components/layout/Wrapper/Wrapper";
import { FavoriteIcon, CartIcon } from "components/SVG/Icons";
import { useDispatch } from "react-redux";
import s from "./Header.module.scss";

const headerLinks = [
  { title: "Каталог", link: "/products" },
  { title: "Доставка", link: "/delivery" },
  { title: "Пункты продаж", link: "/sale-points" },
  { logo: true },
  { title: "Наше производство", link: "/farm" },
  { title: "Вопросы", link: "/questions" },
  { title: "Войти", link: "/login" }
];

export const Header = ({ router }) => {

  const dispatch = useDispatch();

  const favoriteModalHandler = () => {
    dispatch(favoriteChangeModalState(true));
  };

  const cartModalHandler = () => {
    dispatch(cartChangeModalState(true));
  };

  const isPromoPage = router.pathname === "/";

  return (
    <>
      <header className={s.header}>
        <Wrapper>
          <div className={clsx(s.container, isPromoPage ? s.border_accent : "")}>
            <nav className={s.nav}>
              {headerLinks.map((el, i) =>
                el.logo ? (
                  <Link href="/" key={i}>
                    <a className={clsx(
                      s.logo,
                      isPromoPage ? s.logo_accent : ""
                    )}
                    >
                      <MainLogo/>
                    </a>
                  </Link>
                ) : (
                  <Link href={el.link} key={i}>
                    <a className={clsx(
                      s.link,
                      isPromoPage ? s.link_accent : ""
                    )}
                    >
                      {el.title}
                    </a>
                  </Link>
                )
              )}
            </nav>
            <div className={s.control}>
              <button
                type="button"
                className={clsx(s.button, s.favorite, isPromoPage && s.button_accent)}
                onClick={favoriteModalHandler}
              >
                <FavoriteIcon className={clsx(s.favIcon, isPromoPage && s.favIcon__accent)}/>
              </button>
              <button
                type="button"
                className={clsx(s.button, isPromoPage && s.button_accent)}
                onClick={cartModalHandler}
              >
                <CartIcon className={clsx(s.cardIcon, isPromoPage && s.cardIcon__accent)}/>
              </button>
            </div>
          </div>
        </Wrapper>
      </header>
    </>
  );
};
