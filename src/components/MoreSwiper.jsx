import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import spotGrey from '../assets/img/spot-grey.svg';

export default function MoreSwiper({ className, info }) {
  return (
    <Swiper slidesPerView={'auto'} spaceBetween={30} className={`${className} more_swiper`}>
      {info.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <div className='w-full pb-2.5'>
              <img className='w-full h-40 object-cover object-center rounded-5 mb-2' src={item.img} alt={item.title} />
              <h5 className='text-lg text-second-47 ellipsis-1 mb-1'>{item.title}</h5>
              <div className='flex items-center'>
                <img src={spotGrey} alt='地圖圖標' className='mr-1' />
                <p className='text-second-100'>{item.location}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
