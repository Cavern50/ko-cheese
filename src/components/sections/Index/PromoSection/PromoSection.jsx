import React from "react";
import clsx from "clsx";
import g from "styles/Main.module.scss";
import { AbLogo, UsachevLogo, VkusWillLogo } from "components/SVG/PartnersSVG";
import s from "./PromoSection.module.scss";
import { Partner } from "./Partner/Partner";

const partners = [
   {
      link: "/",
      logo: <AbLogo />,
   },
   {
      link: "/",
      logo: <UsachevLogo />,
   },
   {
      link: "/",
      logo: <VkusWillLogo />,
   },
];

export const PromoSection = () => (
      <section className={s.promo}>
         <div className={g.wrapper}>
            <h1 className={s.title}>
               Магазин натуральных{" "}
               <span className={g.italic}>молочных продуктов</span> <br />ручной
               работы
            </h1>
            <span className={s.link}>
               С доставкой по Москве и Московской области
            </span>
            <div className={s.footer}>
               <span className={s.remark}>теперь в магазинах</span>
               <div className={s.container}>
                  <div className={s.block} />
                  <div className={s.partners}>
                     {partners.map((logo, i) => (
                        <Partner {...logo} key={i} />
                     ))}
                  </div>
                  <div className={s.block}>
                     <a href="/" target="_blank" className={s.inst}>
                        <svg
                           width="39"
                           height="39"
                           viewBox="0 0 39 39"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M19.4985 0C14.1982 0 13.5376 0.0255938 11.4633 0.113344C9.38048 0.215719 7.9716 0.538688 6.72848 1.02131C5.42741 1.51249 4.24913 2.28152 3.27576 3.27478C2.27973 4.24588 1.51027 5.42482 1.02229 6.7275C0.539664 7.97062 0.216695 9.3795 0.11432 11.4623C0.0204766 13.5379 0.000976562 14.1972 0.000976562 19.4976C0.000976562 24.7979 0.0265703 25.4585 0.11432 27.5328C0.216695 29.6095 0.539664 31.0245 1.02229 32.2676C1.51347 33.5687 2.2825 34.747 3.27576 35.7203C4.24685 36.7164 5.42579 37.4858 6.72848 37.9738C7.9716 38.4503 9.38657 38.7794 11.4633 38.8818C13.5389 38.9756 14.1982 38.9951 19.4985 38.9951C24.7989 38.9951 25.4594 38.9695 27.5338 38.8818C29.6105 38.7794 31.0255 38.4491 32.2686 37.9738C33.5697 37.4826 34.7479 36.7136 35.7213 35.7203C36.7186 34.7503 37.4883 33.5711 37.9748 32.2676C38.4513 31.0245 38.7804 29.6095 38.8828 27.5328C38.9766 25.4572 38.9961 24.7979 38.9961 19.4976C38.9961 14.1972 38.9705 13.5367 38.8828 11.4623C38.7804 9.38559 38.4501 7.96331 37.9748 6.7275C37.4836 5.42644 36.7146 4.24815 35.7213 3.27478C34.7513 2.27747 33.572 1.50781 32.2686 1.02131C31.0255 0.538688 29.6105 0.215719 27.5338 0.113344C25.4582 0.0195 24.7989 0 19.4985 0ZM19.4985 3.51C24.7038 3.51 25.3254 3.53559 27.3826 3.62334C29.2802 3.71231 30.3137 4.02919 30.9999 4.29731C31.8482 4.61044 32.6159 5.10882 33.2473 5.75616C33.8935 6.38482 34.39 7.15083 34.7 7.99744C34.9681 8.68359 35.285 9.71709 35.374 11.6147C35.4617 13.6719 35.4873 14.2947 35.4873 19.4988C35.4873 24.7028 35.4617 25.3256 35.3667 27.3829C35.2643 29.2805 34.9474 30.314 34.6805 31.0001C34.3112 31.9154 33.8993 32.5553 33.2192 33.2475C32.5858 33.8908 31.8185 34.3868 30.9718 34.7002C30.2942 34.9684 29.2461 35.2852 27.3412 35.3742C25.273 35.462 24.6636 35.4876 19.4449 35.4876C14.2262 35.4876 13.6181 35.462 11.5474 35.3669C9.64982 35.2645 8.60291 34.9477 7.91676 34.6807C6.99051 34.3115 6.35554 33.8995 5.67548 33.2195C4.98932 32.5333 4.55301 31.8801 4.21663 30.9721C3.94363 30.2945 3.63163 29.2463 3.53048 27.3414C3.46101 25.2976 3.4281 24.6638 3.4281 19.4695C3.4281 14.2777 3.46101 13.6427 3.53048 11.5733C3.63163 9.66834 3.94363 8.62266 4.21663 7.94259C4.55301 7.01513 4.99054 6.38137 5.67548 5.69522C6.35432 5.01638 6.99051 4.57762 7.91676 4.23394C8.60291 3.96703 9.62423 3.65016 11.5291 3.55509C13.5974 3.48075 14.2067 3.45394 19.4181 3.45394L19.4985 3.51ZM19.4985 9.49041C18.1839 9.48993 16.8821 9.7485 15.6675 10.2514C14.4528 10.7542 13.3492 11.4915 12.4196 12.4211C11.49 13.3506 10.7528 14.4543 10.2499 15.6689C9.74704 16.8836 9.48847 18.1854 9.48895 19.5C9.48847 20.8146 9.74704 22.1164 10.2499 23.3311C10.7528 24.5457 11.49 25.6494 12.4196 26.5789C13.3492 27.5085 14.4528 28.2458 15.6675 28.7486C16.8821 29.2515 18.1839 29.5101 19.4985 29.5096C20.8132 29.5101 22.115 29.2515 23.3296 28.7486C24.5443 28.2458 25.6479 27.5085 26.5775 26.5789C27.507 25.6494 28.2443 24.5457 28.7472 23.3311C29.25 22.1164 29.5086 20.8146 29.5081 19.5C29.5086 18.1854 29.25 16.8836 28.7472 15.6689C28.2443 14.4543 27.507 13.3506 26.5775 12.4211C25.6479 11.4915 24.5443 10.7542 23.3296 10.2514C22.115 9.7485 20.8132 9.48993 19.4985 9.49041ZM19.4985 25.9996C15.9057 25.9996 12.9989 23.0929 12.9989 19.5C12.9989 15.9071 15.9057 13.0004 19.4985 13.0004C23.0914 13.0004 25.9981 15.9071 25.9981 19.5C25.9981 23.0929 23.0914 25.9996 19.4985 25.9996ZM32.2515 9.09066C32.2509 9.71181 32.0037 10.3073 31.5642 10.7463C31.1248 11.1853 30.529 11.4319 29.9079 11.4319C29.6007 11.4319 29.2966 11.3714 29.0129 11.2538C28.7291 11.1363 28.4713 10.964 28.2541 10.7469C28.0369 10.5297 27.8647 10.2719 27.7471 9.98811C27.6296 9.70435 27.5691 9.40023 27.5691 9.09309C27.5691 8.78596 27.6296 8.48184 27.7471 8.19808C27.8647 7.91433 28.0369 7.6565 28.2541 7.43933C28.4713 7.22215 28.7291 7.04988 29.0129 6.93234C29.2966 6.81481 29.6007 6.75431 29.9079 6.75431C31.1961 6.75431 32.2515 7.80244 32.2515 9.09066Z"
                              fill="#FFF3E7"
                           />
                        </svg>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );