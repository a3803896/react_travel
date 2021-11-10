import React, { useState, useEffect } from 'react';
import HomeNav from '../components/HomeNav';
import MySwiper from '../components/MySwiper';
import RecentAct from '../components/RecentAct';
import HotScenic from '../components/HotScenic';
import GoodFood from '../components/GoodFood';

export default function Home() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    setPhotos([
      {
        id: 0,
        img: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
        title: '新北市 | 不厭亭',
        discription: '新北市不厭亭',
      },
    ]);
  }, []);
  return (
    <main className='flex-grow'>
      <div className='container px-4 pt-1.5 lg:px-0 lg:pt-20'>
        <HomeNav className='mb-8 lg:mb-14' />
        <MySwiper photos={photos} className='mb-9' />
        <RecentAct className='mb-9' />
        <HotScenic className='mb-9' />
        <GoodFood className='mb-9' />
      </div>
    </main>
  );
}

// import axios from 'axios';
// import getAuthorizationHeader from './plugins/getAuthorizationHeader';
// // 取資料
// function getData() {
//   axios
//     .get('https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/Station?$top=10&$format=JSON', {
//       // 欲呼叫之API網址(此範例為台鐵車站資料)
//       headers: getAuthorizationHeader(),
//     })
//     .then(function (response) {
//       console.log(response.data);
//     });
// }
