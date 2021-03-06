import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function MySwiper({ className, photos }) {
  let clearPhotos = photos.filter((item) => item.img);
  return (
    <Swiper className={`${className} scenicSwiper`} pagination={true} navigation={true}>
      {clearPhotos.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <img src={item.img} alt={item.discription} />
            <Link to={`/scenicinfo/${item.id}`} className='absolute z-10 text-white lg:text-2.5xl lg:leading-10 font-bold'>
              {item.title || ''}
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
