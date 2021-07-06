import '../styles/global.scss';
import 'swiper/swiper.scss';

import { Header } from '@components/common/Header/Header';
import { Main } from '@components/layout/Main/Main';
import { Footer } from '@components/common/Footer/Footer';

// This default export is required in a new `pages/_app.js` file.
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
