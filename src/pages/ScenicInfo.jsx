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
      img: 'https://images.unsplash.com/photo-1636562335966-cd8243556822?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
      discription: '羅東林業文化園區',
    },
  ];
  const [info, setInfo] = useState([]);
  useEffect(() => {
    setInfo([
      {
        id: 0,
        img: 'https://images.unsplash.com/reserve/Pu9MTKTuWOi7dDqIyZqA_urbex-ppc-062.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80',
        title: '龜山島牛奶海',
        location: '宜蘭縣',
      },
    ]);
  }, []);
  return (
    <main className='flex-grow pb-9'>
      <div className='container px-4 lg:px-0 pt-6 lg:pt-15'>
        <div className='text-xs leading-5 lg:text-base lg:leading-7 mb-4 lg:mb-7.5'>
          <Link className='text-primary-3 mr-1 lg:mr-2' to='/'>
            首頁
          </Link>
          <span className='text-second-100 mr-1 lg:mr-2'>/</span>
          <Link className='text-primary-3 mr-1 lg:mr-2' to='/scenic'>
            探索景點
          </Link>
          <span className='text-second-100 mr-1 lg:mr-2'>/</span>
          <Link className='text-primary-3 mr-1 lg:mr-2' to='/scenic'>
            宜蘭縣
          </Link>
          <span className='text-second-100 mr-1 lg:mr-2'>/</span>
          <span className='text-second-100'>羅東林業文化園區</span>
        </div>
        <MySwiper className='mb-4 lg:mb-7.5' photos={photo} />
        <h2 className='text-2xl lg:text-4xl leading-9 lg:leading-13 font-light text-second-30 mb-2 lg:mb-3'>羅東林業文化園區</h2>
        <div className='flex items-center mb-4 lg:mb-7.5'>
          <div className='border border-info rounded-5 select-none px-3 lg:px-4 py-1/2 mr-1.5 lg:mr-2 last:mr-0'>
            <p className='text-info text-sm lg:text-xl'># 自然風景類</p>
          </div>
        </div>
        <div className='mb-7.5 lg:mb-15'>
          <h5 className='text-second-47 text-lg lg:text-xl font-bold mb-2 lg:mb-2.5'>景點介紹：</h5>
          <p className='font-light leading-8 lg:text-lg lg:leading-8'>
            日治時期台灣有三大林場，分別是：八仙山林場、阿里山林場以及太平山林場。從太平山林場所砍伐的檜木、扁柏等木材，都會運送到羅東出張所和貯木池進行存放，而羅東出張所經過規劃後，成為現今的羅東林業文化園區。羅東林業文化區坐落於羅東市區附近，交通十分方便，園內規劃有貯木池、森林鐵路、竹林車站、蒸汽火車頭、綠林和步道等，從這些設備、建築物中發現當年的林業發展多麼蓬勃，又是多麼地熱鬧，同時也讓人不禁感慨，許多珍貴的檜木消逝在太平山中。隨著林業發展的轉型，可以看見昔日風華的貯木池，零散放著當時砍伐的檜木，如今，貯木池不再具有貯木的功能，而是成為水鳥和魚兒們的天堂。在園區中散步，彷彿進入一座秘密花園，園內種植滿滿茂密的樹木，不時聽見鳥兒的叫聲，空氣中帶有芬多精與淡淡的檜木香，舒服的環境，令人不禁停下腳步，感受內心的寧靜。
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-7.5 bg-second-249 lg:bg-transparent -mx-4 lg:mx-0 px-4 lg:px-0 py-7.5 lg:py-0 mb-15'>
          <ul className='bg-second-249 self-start lg:p-7.5'>
            <li className='flex mb-2 lg:mb-3'>
              <h5 className='flex-shrink-0 flex-grow-0 text-lg lg:text-xl font-bold text-second-47'>開放時間：</h5>
              <p className='leading-7 lg:text-lg text-second-47'>06:00-19:00</p>
            </li>
            <li className='flex mb-2 lg:mb-3'>
              <h5 className='flex-shrink-0 flex-grow-0 text-lg lg:text-xl font-bold text-second-47'>服務電話：</h5>
              <p className='leading-7 lg:text-lg text-second-47'>886-3-9545114</p>
            </li>
            <li className='flex mb-2 lg:mb-3'>
              <h5 className='flex-shrink-0 flex-grow-0 text-lg lg:text-xl font-bold text-second-47'>景點地址：</h5>
              <a
                href='https://www.google.com.tw/maps/search/宜蘭縣265羅東鎮中正北路118號'
                target='_blank'
                rel='noreferrer'
                className='leading-7 lg:text-lg text-primary-3 underline'>
                宜蘭縣265羅東鎮中正北路118號
              </a>
            </li>
            <li className='flex mb-2 lg:mb-3'>
              <h5 className='flex-shrink-0 flex-grow-0 text-lg lg:text-xl font-bold text-second-47'>官方網站：</h5>
              <a href='https://www.facebook.com/lfcgexhibition/' target='_blank' rel='noreferrer' className='leading-7 lg:text-lg text-primary-3 underline'>
                https://www.facebook.com/lfcgexhibition/
              </a>
            </li>
            <li className='flex mb-2 lg:mb-3'>
              <h5 className='flex-shrink-0 flex-grow-0 text-lg lg:text-xl font-bold text-second-47'>票價資訊：</h5>
              <p className='leading-7 lg:text-lg text-second-47'>免費，露營活動另計。</p>
            </li>
            <li className='flex'>
              <h5 className='flex-shrink-0 flex-grow-0 text-lg lg:text-xl font-bold text-second-47'>注意事項：</h5>
              <p className='leading-7 lg:text-lg text-second-47'>1、愛護大自然生物，並請維護環境整潔。2、夏季日照與冬季寒風甚強，請預作防範</p>
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
        <section className=''>
          <div className='flex items-center justify-between mb-2 lg:mb-3 px-1 lg:px-4'>
            <h2 className='text-2xl lg:text-4xl leading-9 lg:leading-13 font-light'>
              還有這些<span className='hidden lg:inline'>不能錯過的景點</span>
            </h2>
            <Link to='/scenic' className='text-warning-1 flex items-center select-none'>
              查看更多活動
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
