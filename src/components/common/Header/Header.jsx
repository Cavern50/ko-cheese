import React from "react";
import clsx from "clsx";
import Link from "next/link";

import { MainLogo } from "components/SVG/MainLogo";
import { Cart } from "components/modals/Cart/Cart";
import { Favorite } from "components/modals/Favorite/Favorite";

import { useModal } from "hooks";

import { useSpring, animated } from "react-spring";


import g from "styles/Main.module.scss";
import s from "./Header.module.scss";

const headerLinks = [
  { title: "Точки продаж", link: "/sale-points" },
  { title: "Доставка", link: "/delivery" },
  { title: "Вопросы", link: "/questions" },
  { logo: true },
  { title: "Ферма", link: "/farm" },
  { title: "Продукция", link: "/products" },
  { title: "Войти", link: "/" }
];

export const Header = ({ router }) => {

  const cartModal = useModal();
  const favoriteModal = useModal();
  const isPromoPage = router.pathname === "/";
  return (
    <>
      <header className={s.header}>
        <div className={g.wrapper}>
          <div className={clsx(s.container, isPromoPage ? s.border_accent : "")}>
            <nav className={s.nav}>
              {headerLinks.map((el, i) =>
                el.logo ? (
                  // eslint-disable-next-line react/no-array-index-key
                  <Link href="/" key={i}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                      className={clsx(
                        s.logo,
                        isPromoPage ? s.logo_accent : ""
                      )}
                    >
                      <MainLogo/>
                    </a>
                  </Link>
                ) : (
                  // eslint-disable-next-line react/no-array-index-key
                  <Link href={el.link} key={i}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                      className={clsx(
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
                className={clsx(s.button, isPromoPage ? s.button_accent : "")}
                onClick={() => favoriteModal.showModal()}
              >
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0493 3.63424L10.4686 4.28196L10.8885 3.6346C12.3803 1.33453 14.4578 0.883631 16.1377 1.52895C17.8493 2.18645 19.25 4.01976 19.25 6.51051C19.25 7.37032 18.7925 8.42411 18.0006 9.58141C17.219 10.7238 16.1593 11.8991 15.06 12.9882C13.9629 14.0752 12.8385 15.0645 11.9347 15.8362C11.6101 16.1134 11.3155 16.3611 11.0601 16.5759C10.9594 16.6606 10.8649 16.7401 10.7769 16.8144C10.664 16.9096 10.5592 16.9984 10.4658 17.0789C10.3671 16.9964 10.2561 16.9055 10.1369 16.8086C10.0097 16.7051 9.87042 16.5926 9.71965 16.4708C9.48358 16.2801 9.2193 16.0666 8.92885 15.8293C7.98374 15.057 6.80445 14.0673 5.65234 12.9798C4.4979 11.8901 3.38384 10.7144 2.56183 9.57177C1.72801 8.41274 1.25 7.36256 1.25 6.51051C1.25 4.0186 2.74286 2.17768 4.57391 1.51716C6.38163 0.865062 8.56776 1.34581 10.0493 3.63424Z"
                    stroke="#FAEEE2"
                  />
                </svg>
              </button>
              <button
                onClick={() => cartModal.showModal()}
                type="button"
                className={clsx(s.button, isPromoPage ? s.button_accent : "")}
              >
                <svg
                  width="15"
                  height="21"
                  viewBox="0 0 15 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="6.5"
                    width="14"
                    height="14"
                    stroke="#FFF3E7"
                  />
                  <path
                    d="M12 10V5.5C12 3.01472 9.98528 1 7.5 1V1C5.01472 1 3 3.01472 3 5.5V10"
                    stroke="#FFF3E7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <Cart closeModal={cartModal.hideModal} show={cartModal.isShowed}/>
      <Favorite closeModal={favoriteModal.hideModal} show={favoriteModal.isShowed}/>
    </>
  );
};
