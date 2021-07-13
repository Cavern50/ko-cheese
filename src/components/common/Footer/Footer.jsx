import React from "react";
import g from "styles/Main.module.scss";
import { MainLogo } from "components/SVG/MainLogo";

import Link from "next/link";
import clsx from "clsx";
import { AsapLogoSvg } from "components/SVG/AsapLogoSVG";
import s from "./Footer.module.scss";

export const Footer = () => (
  <footer className={clsx(s.footer)}>
    <div className={clsx(g.wrapper)}>
      <div className={clsx(s.container)}>
        <div className={clsx(s.block)}>
          <nav className={clsx(s.menu)}>
            <h2 className={clsx(s.link)}>
              <a href="/">Магазин</a>
            </h2>
            <h2 className={clsx(s.link)}>
              <a href="/">Доставка</a>
            </h2>
            <h2 className={clsx(s.link)}>
              <a href="/">О нас</a>
            </h2>
            <h2 className={clsx(s.link)}>
              <a href="/">Продукция</a>
            </h2>
            <h2 className={clsx(s.link)}>
              <a href="/">Рецепты</a>
            </h2>
          </nav>
          <a href="mailto:" className={clsx(s.contact)}>
            Написать нам
          </a>
        </div>
        <div className={clsx(s.block)}>
          <nav className={clsx(s.menu)}>
            <h3 className={clsx(s.link)}>
              <a href="/">Точки продаж</a>
            </h3>
            <h3 className={clsx(s.link)}>
              <a href="/">Контакты</a>
            </h3>
            <h3 className={clsx(s.link, s.social)}>
              <a href="/">Instagram</a>
            </h3>
            <h3 className={clsx(s.link, s.social)}>
              <a href="/">Facebook</a>
            </h3>
          </nav>
          <div className={clsx(s.info)}>
            <address className={clsx(s.address)}>
              Смоленская область, Кардымовский район, село Каменка ООО "Красная горка", ОГРН 1136733008763, ИНН
              6722041039
            </address>
            <div className={clsx(s.contacts)}>
              <a href="tel:" className={clsx(s.contact)}>
                8 (800) 250-58-24
              </a>
              <a href="mailto:" className={clsx(s.contact)}>
                sales@koico.ru
              </a>
            </div>
            <a
              href="https://asap-ag.ru"
              target="_blank"
              className={clsx(s.asap)} rel="noreferrer"
            >
              <AsapLogoSvg/>
            </a>
          </div>
        </div>
      </div>
      <div className={clsx(s.corp)}>
        {
          <Link href="/">
            <a>
              <MainLogo/>
            </a>
          </Link>
        }
        <span>© Pty Ltd and Wild Game Resources</span>
        <span>Australia Pty Ltd</span>
        <span>Terms & Conditions</span>
      </div>
    </div>
  </footer>
);
