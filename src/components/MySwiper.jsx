import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function MySwiper({ className }) {
  return (
    <Swiper className={`${className}`} pagination={true} navigation={true}>
      <SwiperSlide>
        <img
          src='https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
          alt='新北市不厭亭相片'
        />
        <p className='absolute z-10 text-white lg:text-2.5xl lg:leading-10 font-bold'>新北市 | 不厭亭</p>
      </SwiperSlide>
    </Swiper>
  );
}
