import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MoreSwiper from './MoreSwiper';
import arrowRightWarning from '../assets/img/arrowRightWarning.svg';
import spotGrey from '../assets/img/spot-grey.svg';

export default function RecentAct({ className }) {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    setInfo([
      {
        id: 0,
        img: 'https://images.unsplash.com/photo-1636420401372-a11d0391dfe4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
        title: '龜山島牛奶海',
        location: '宜蘭縣',
      },
    ]);
  }, []);
  return (
    <section className={`${className}`}>
      <div className='flex items-center justify-between mb-2 lg:mb-3 px-1 lg:px-4'>
        <h2 className='text-2xl lg:text-4xl leading-9 lg:leading-13 font-light'>熱門打卡景點</h2>
        <Link to='/activity' className='text-warning-1 flex items-center select-none'>
          查看更多景點
          <img src={arrowRightWarning} className='w-4 h-4 ml-1' alt='查看更多' />
        </Link>
      </div>
      <div className=''>
        <MoreSwiper className='lg:hidden' info={info}></MoreSwiper>
        <div className='hidden lg:grid lg:grid-cols-4 lg:gap-x-7.5'>
          {info.map((item) => {
            return (
              <div className='w-full pb-2.5' key={item.id}>
                <img className='w-full h-50 object-cover object-center rounded-5 mb-2' src={item.img} alt={item.title} />
                <h5 className='text-lg lg:text-5.5 lg:leading-8 font-bold text-second-47 ellipsis-1 mb-1'>{item.title}</h5>
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
