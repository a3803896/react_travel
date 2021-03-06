import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MoreSwiper from './MoreSwiper';
import arrowRightWarning from '../assets/img/arrowRightWarning.svg';
import spotGrey from '../assets/img/spot-grey.svg';

export default function RecentAct({ className, dataArray }) {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    let infoArr = dataArray.map((item) => {
      return {
        id: item.RestaurantID,
        img: item.Picture.PictureUrl1,
        title: item.RestaurantName,
        location: item.City,
        type: '美食',
      };
    });
    setInfo(infoArr);
  }, [dataArray]);
  return (
    <section className={`${className}`}>
      <div className='flex items-center justify-between mb-2 lg:mb-3 px-1 lg:px-4'>
        <h2 className='text-2xl lg:text-4xl leading-9 lg:leading-13 font-light'>一再回訪美食</h2>
        <Link to='/restaurant' className='text-warning-1 flex items-center select-none'>
          查看更多美食
          <img src={arrowRightWarning} className='w-4 h-4 ml-1' alt='查看更多' />
        </Link>
      </div>
      <div className=''>
        <MoreSwiper className='lg:hidden' info={info}></MoreSwiper>
        <div className='hidden lg:grid lg:grid-cols-4 lg:gap-x-7.5'>
          {info.map((item) => {
            return (
              <div className='info_card w-full pb-2.5' key={item.id}>
                <Link to={`/restaurantinfo/${item.id}`} className='block w-full h-50 rounded-5 overflow-hidden mb-2'>
                  <img className='info_card_img w-full h-full object-cover object-center' src={item.img} alt={item.title} />
                </Link>
                <Link to={`/restaurantinfo/${item.id}`} className='block'>
                  <h5 className='text-lg lg:text-5.5 lg:leading-8 font-bold text-second-47 ellipsis-1 mb-1'>{item.title}</h5>
                </Link>
                <div className='flex items-center'>
                  <img src={spotGrey} alt='地圖圖標' className='mr-1' />
                  <p className='text-second-100'>{item.location}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
