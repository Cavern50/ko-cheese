import "../styles/global.scss";
import "swiper/swiper.scss";

import { Header } from "@components/common/Header/Header";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps, router }) {
   return (
      <>
         <Header promo={router.pathname === '/'}/>
         <Component {...pageProps} />
      </>
   );
}
