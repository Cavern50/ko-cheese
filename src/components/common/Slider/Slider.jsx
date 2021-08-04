import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { SliderNav } from "components/common/Slider/SliderNav/SliderNav";

import s from "./Slider.module.scss";

export const Slider = ({ children, slides, params, title }) => {
  SwiperCore.use([Navigation]);
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);
  const [currentCount, setCurrentCount] = React.useState(1);
  const allCount = Math.ceil(slides.length / params.slider.slidesPerView);
  const { sliderClass, slideClass, ...restParams } = params.slider;
  return (
    <div className={s.container}>
      {params.nav && <SliderNav
        title={title}
        prev={prevRef}
        next={nextRef}
        allCount={allCount}
        currentCount={currentCount}
        params={params.nav}
      />}
      <Swiper
        onInit={(swiper) => {
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.prevEl = prevRef.current;
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.update();
        }}
        navigation
        onSlideChange={(e) => setCurrentCount(++e.snapIndex)}
        speed={500}
        className={s[sliderClass]}
        {...restParams}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className={s[slideClass]}>
            {React.cloneElement(children, { ...slide })}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
