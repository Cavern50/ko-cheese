import React from "react";

import 'styles/global.scss';

import 'swiper/swiper.scss';
import { Header } from 'components/common/Header/Header';
import { Main } from 'components/layout/Main/Main';
import { Footer } from 'components/common/Footer/Footer';

export default function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Header router={router} />
      <Main router={router}>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  );
}
