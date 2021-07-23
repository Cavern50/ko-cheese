import React from "react";
import { MainLogo } from "components/SVG/MainLogo";
import Link from "next/link";
import { AsapLogoSvg } from "components/SVG/AsapLogoSVG";
import { Wrapper } from "components/layout/Wrapper/Wrapper";
import { formatPhone } from "functions.js";
import s from "./Footer.module.scss";

const footerLinks = [
  { title: "Доставка", link: "/delivery" },
  { title: "Продукция", link: "/products" },
  { title: "О нас", link: "/farm" },
  { title: "Точки продаж", link: "/sale-points" },
  { title: "Рецепты", link: "/articles" }
];

export const Footer = () => (
  <footer className={s.footer}>
    <Wrapper>
      <div className={s.container}>
        <div className={s.block}>
          <nav className={s.menu}>
            {footerLinks.map(({ title, link }) =>
              (
                <Link href={link} key={link}>
                  <a className={s.link}>
                    <h2 className={s.title}>{title}</h2>
                  </a>
                </Link>
              )
            )}
          </nav>
          <a href="mailto:" className={s.contact}>
            Написать нам
          </a>
        </div>
        <div className={s.block}>
          <nav className={s.menu}>
            <a className={s.link} href="https://instagram.com/instagram"><h3 className={s.title}>Instagram</h3></a>
            <a className={s.link} href="https://facebook.com"><h3 className={s.title}>Facebook</h3></a>
          </nav>
          <div className={s.info}>
            <address className={s.address}>
              Смоленская область, Кардымовский район, село Каменка ООО "Красная горка", ОГРН 1136733008763, ИНН
              6722041039
            </address>
            <div className={s.contacts}>
              <a href={`tel:${formatPhone("8 (800) 250-58-24")}`} className={s.contact}>8 (800) 250-58-24</a>
              <a href="mailto:sales@koico.ru" className={s.contact}>sales@koico.ru</a>
            </div>

          </div>
        </div>
      </div>
      <div className={s.corp}>
        {
          <Link href="/">
            <a className={s.logo}>
              <MainLogo/>
            </a>
          </Link>
        }
        <div>
          <span>© Pty Ltd and Wild Game Resources</span>
          <span>Australia Pty Ltd</span>
          <span>Terms & Conditions</span>
        </div>
        <a
          href="https://asap-ag.ru"
          target="_blank"
          className={s.asap} rel="noreferrer"
        >
          <AsapLogoSvg/>
        </a>
      </div>
    </Wrapper>
  </footer>
);
