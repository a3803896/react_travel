import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MySwiper from '../components/MySwiper';
import MoreSwiper from '../components/MoreSwiper';
import nearbyScenic from '../assets/img/nearby-scene30.svg';
import nearbyEvent from '../assets/img/nearby-event30.svg';
import nearbyFood from '../assets/img/nearby-food30.svg';
import arrowRightWarning from '../assets/img/arrowRightWarning.svg';
import spotGrey from '../assets/img/spot-grey.svg';

export default function ActivityInfo() {
  const photo = [
    {
      id: 0,
      img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
      discription: '金都餐廳',
    },
  ];
  const [info, setInfo] = useState([]);
  useEffect(() => {
    setInfo([
      {
        id: 0,
        img: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        title: '其他南投縣在地餐廳精選',
        location: '南投縣',
      },
    ]);
  }, []);
  return (
    <main className='flex-grow'>
      <div className='container px-4 lg:px-0 pt-6'>
        <div className='text-xs leading-5 lg:text-base lg:leading-7 mb-4 lg:mb-7.5'>
          <Link className='text-primary-3 mr-1 lg:mr-2' to='/'>
            首頁
          </Link>
          <span className='text-second-100 mr-1 lg:mr-2'>/</span>
          <Link className='text-primary-3 mr-1 lg:mr-2' to='/restaurant'>
            在地美食
          </Link>
          <span className='text-second-100 mr-1 lg:mr-2'>/</span>
          <Link className='text-primary-3 mr-1 lg:mr-2' to='/restaurant'>
            南投縣
          </Link>
          <span className='text-second-100 mr-1 lg:mr-2'>/</span>
          <span className='text-second-100'>金都餐廳</span>
        </div>
        <MySwiper className='mb-4 lg:mb-7.5' photos={photo} />
        <h2 className='text-2xl lg:text-4xl leading-9 lg:leading-13 font-light text-second-30 mb-2 lg:mb-3'>金都餐廳</h2>
        <div className='flex items-center mb-4 lg:mb-7.5'>
          <div className='border border-info rounded-5 select-none px-3 lg:px-4 py-1/2 mr-1.5 lg:mr-2 last:mr-0'>
            <p className='text-info text-sm lg:text-xl'># 中式美食</p>
          </div>
        </div>
        <div className='mb-7.5 lg:mb-15'>
          <h5 className='text-second-47 text-lg lg:text-xl font-bold mb-2 lg:mb-2.5'>餐廳介紹：</h5>
          <p className='font-light leading-8 lg:text-lg lg:leading-8'>
            埔里金都餐廳於1994年創立於美麗的台灣中心埔里，1995年起創意取材埔里名酒研發推出紹興宴，揚名台北中華美食展，此後，不斷結合地方鄉土農特產，持續研發新健康美食與主題饗宴(日月潭邵族宴、水果宴、梅宴、茭白筍大餐、珍菇水筍宴、養生御膳、百花宴、香草宴、香米喜宴、原鄉風味餐、2003時尚蕃茄宴…等)，更榮耀承辦聖文森總理及五國元首國宴，成功的在台灣捲起金都美食風！精采展現台灣美食新風情，成為台灣中部旅遊線首選最佳的美食餐廳，並連續四年榮獲優經濟部選拔為質餐廳之殊榮。
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-7.5 bg-second-249 lg:bg-transparent -mx-4 lg:mx-0 px-4 lg:px-0 py-7.5 lg:py-0 mb-15'>
          <ul className='bg-second-249 self-start lg:p-7.5'>
            <li className='flex mb-2 lg:mb-3'>
              <h5 className='flex-shrink-0 flex-grow-0 text-lg lg:text-xl font-bold text-second-47'>營業時間：</h5>
              <p className='leading-7 lg:text-lg text-second-47'>上午11:00~14:30下午17:00~21:00</p>
            </li>
            <li className='flex mb-2 lg:mb-3'>
              <h5 className='flex-shrink-0 flex-grow-0 text-lg lg:text-xl font-bold text-second-47'>聯絡電話：</h5>
              <p className='leading-7 lg:text-lg text-second-47'>886-3-9545114</p>
            </li>
            <li className='flex mb-2 lg:mb-3'>
              <h5 className='flex-shrink-0 flex-grow-0 text-lg lg:text-xl font-bold text-second-47'>餐廳地址：</h5>
              <a
                href='https://www.google.com.tw/maps/search/南投縣埔里鎮信義路236號'
                target='_blank'
                rel='noreferrer'
                className='leading-7 lg:text-lg text-primary-3 underline'>
                南投縣埔里鎮信義路236號
              </a>
            </li>
            <li className='flex mb-2 lg:mb-3'>
              <h5 className='flex-shrink-0 flex-grow-0 text-lg lg:text-xl font-bold text-second-47'>官方網站：</h5>
              <a href='http://www.jindu1994.com/' target='_blank' rel='noreferrer' className='leading-7 lg:text-lg text-primary-3 underline'>
                http://www.jindu1994.com/
              </a>
            </li>
          </ul>
          <div className=''>
            <div className='iframe_wrap mb-5 lg:mb-8'>
              {/* <iframe
                className='iframe_inner'
                title='321'
                style={{ border: 0 }}
                width='auto'
                height='auto'
                loading='lazy'
                src='https://www.google.com/maps/embed/v1/place?key=AIzaSyDfyXzEmwduts3D4J5mKNPqV4BOoyrgbb0
                &q=Space+Needle,Seattle+WA'></iframe> */}
            </div>
            <h5 className='text-lg lg:text-xl font-bold mb-5'>周邊資訊：</h5>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-2 lg:gap-y-0 lg:gap-x-7.5'>
              <button className='flex flex-col items-center justify-center border border-second-229 rounded-md py-2 lg:py-6'>
                <img src={nearbyScenic} alt='' className='mb-1/2' />
                <p className='font-bold leading-7 text-primary-1'>附近景點</p>
              </button>
              <button className='flex flex-col items-center justify-center border border-second-229 rounded-md py-2 lg:py-6'>
                <img src={nearbyEvent} alt='' className='mb-1/2' />
                <p className='font-bold leading-7 text-primary-1'>附近景點</p>
              </button>
              <button className='flex flex-col items-center justify-center border border-second-229 rounded-md py-2 lg:py-6'>
                <img src={nearbyFood} alt='' className='mb-1/2' />
                <p className='font-bold leading-7 text-primary-1'>附近景點</p>
              </button>
            </div>
          </div>
        </div>
        <section className='mb-9'>
          <div className='flex items-center justify-between mb-2 lg:mb-3 px-1 lg:px-4'>
            <h2 className='text-2xl lg:text-4xl leading-9 lg:leading-13 font-light'>
              還有這些不能錯過<span className='hidden lg:inline'>的美食</span>
            </h2>
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
                    <Link to='/' className='block w-full h-50 rounded-5 overflow-hidden mb-2'>
                      <img className='info_card_img w-full h-full object-cover object-center' src={item.img} alt={item.title} />
                    </Link>
                    <Link to='/' className='block'>
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
      </div>
    </main>
  );
}
