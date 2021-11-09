import React from 'react';
import HomeNav from '../components/HomeNav';
import MySwiper from '../components/MySwiper';
import RecentAct from '../components/RecentAct';

export default function Home() {
  return (
    <main className='flex-grow'>
      <div className='container px-4 pt-1.5 lg:pt-20'>
        <HomeNav className='mb-8 lg:mb-14' />
        <MySwiper className='mb-9' />
        <RecentAct />
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
