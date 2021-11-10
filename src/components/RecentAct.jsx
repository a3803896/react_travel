import React from 'react';
import { Link } from 'react-router-dom';
import arrowRightWarning from '../assets/img/arrowRightWarning.svg';
import spotGrey from '../assets/img/spot-grey.svg';
import arrowRightPrimary from '../assets/img/arrowRightPrimary.svg';

export default function RecentAct({ className }) {
  return (
    <section className={`${className}`}>
      <div className='flex items-center justify-between mb-2 lg:mb-3 px-1 lg:px-4'>
        <h2 className='text-2xl lg:text-4xl leading-9 lg:leading-13 font-light'>近期活動</h2>
        <Link to='/activity' className='text-warning-1 flex items-center select-none'>
          查看更多活動
          <img src={arrowRightWarning} className='w-4 h-4 ml-1' alt='查看更多' />
        </Link>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-7.5 gap-y-4 lg:gap-y-3'>
        <div className='activity_card flex lg:border lg:border-second-229 lg:rounded-xl lg:overflow-hidden'>
          <div className='w-22.5 h-15 lg:w-40 lg:h-40 overflow-hidden rounded-lg lg:rounded-none flex-grow-0 flex-shrink-0 self-center'>
            <img
              className='activity_card_logo w-full h-full object-cover'
              src='https://images.unsplash.com/photo-1549534077-1b4f31dd59ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
              alt='日月潭花火音樂嘉年華'
            />
          </div>
          <div className='flex-grow flex flex-col lg:bg-second-249 pl-4 pr-1 lg:px-7.5 lg:py-4'>
            <div className='lg:flex-grow'>
              <p className='text-second-100 mb-3/4 lg:mb-1 text-xs lg:text-base'>2021/10/30 - 2021/11/13</p>
              <Link to='/info' className='block mb-1/4 lg:mb-0'>
                <h5 className='text-second-47 font-bold lg:text-1.5xl lg:leading-8 ellipsis-2'>2021 日月潭花火音樂嘉年華</h5>
              </Link>
            </div>
            <div className='flex justify-between items-center'>
              <p className='flex items-center text-second-100 text-xs lg:text-base'>
                <img src={spotGrey} alt='南投縣' className='hidden lg:block mr-1' /> 南投縣
              </p>
              <Link to='/info' className='justify-center text-primary-1 hidden lg:flex'>
                詳細介紹
                <img src={arrowRightPrimary} alt='' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
