import React from 'react';
import { Link } from 'react-router-dom';
import MySwiper from '../components/MySwiper';

export default function Info() {
  const photo = [
    {
      id: 0,
      img: 'https://images.unsplash.com/photo-1627676569762-ea59379ed3b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
      discription: '苗栗龍系列活動',
    },
  ];
  return (
    <main className='flex-grow'>
      <div className='container px-4 lg:px-0 pt-6'>
        <div className='text-xs leading-5 mb-4'>
          <Link className='text-primary-3 mr-1' to='/'>
            首頁
          </Link>
          <span className='text-second-100 mr-1'>/</span>
          <Link className='text-primary-3 mr-1' to='/activity'>
            節慶活動
          </Link>
          <span className='text-second-100 mr-1'>/</span>
          <Link className='text-primary-3 mr-1' to='/activity'>
            苗栗縣
          </Link>
          <span className='text-second-100 mr-1'>/</span>
          <span className='text-second-100'>2021 苗栗龍系列活動</span>
        </div>
        <MySwiper className='mb-4' photos={photo} />
        <h2 className='text-2xl leading-9 font-light text-second-30 mb-2'>2021 苗栗龍系列活動</h2>
        <div className='flex items-center mb-4'>
          <div className='border border-info rounded-5 select-none px-3 py-1/2 mr-1.5 last:mr-0'>
            <p className='text-info text-sm'># 節慶活動</p>
          </div>
        </div>
        <div className=''>
          <h5 className='text-second-47 text-lg font-bold mb-2'>活動介紹：</h5>
          <p className='font-light leading-8 mb-7.5'>
            「火旁龍」就是苗栗行銷客家元宵節慶而迎龍的在地獨特民俗，亦是臺灣舞龍文化的代表。至1989年辦理迄今，獨特的客家苗栗火旁龍文化已成功吸引了全國民眾的目光，甚至引起國際注目，逐漸從早期的地方民俗活動，蛻變成為臺灣四大地方元宵節慶文化，而後成為「客庄十二節慶」元宵民俗活動。近年來，苗栗火旁龍活動已經成為展現客家龍文化的重要指標，以發展地方觀光旅遊，追求經濟發展，吸引觀光人潮，以龍文化造鎮與景點打造，行銷苗栗客家傳統龍文化。「苗栗火旁龍」系列活動依序期程，大抵可劃分為四大主題，分別為祥龍點睛˙舞龍競技、民俗踩街、火旁龍之夜、化龍返天暨客家特色商品展。每年的活動可謂推陳出新，目的都在於吸引遊客一同共襄盛舉。而近幾年為推展在地觀光國際化，並順應國際環境資源永續發展之潮流，「苗栗火旁龍」逐步朝向觀光化發展，並於民俗踩街及火旁龍之夜，邀請國內外的表演團體，連袂出席參與火旁龍年度盛事，精彩的表演、恍如置身國外嘉年華派對。活動日程
            110年2月19日-2月28日 客家龍神壇 地點：苗栗火車站西站廣場 110年2月20日 09:00-12:30 祥龍點睛、神龍祈福及貓裏客家龍競技 (改線上直播)
            地點：苗栗市玉清宮前廣場 110年2月26日 18:00-22:00 民俗踩街 (停辦) 地點：苗栗市市區 110年2月27日 17:00-22:00 龍之夜 (停辦) 地點：苗栗市經國路河濱公園
            110年2月28日 21:00-24:00 化龍返天 (改線上直播) 地點：苗栗市嘉盛五文昌廟※
            2021「龍之夜」活動受到疫情影響，將取消民俗踩街及龍之夜，詳情請參考苗栗火旁龍粉絲團公告。
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-7.5 bg-second-249 lg:bg-none -mx-4 lg:mx-0 px-4 lg:px-0 py-7.5 lg:py-0'>
          <ul className='bg-second-249'>
            <li className='flex mb-2'>
              <h5 className='flex-shrink-0 flex-grow-0 text-lg font-bold text-second-47'>活動時間：</h5>
              <p className='leading-7 text-second-47'>2021/02/19 00:00 - 2021/02/28 00:00</p>
            </li>
            <li className='flex mb-2'>
              <h5 className='flex-shrink-0 flex-grow-0 text-lg font-bold text-second-47'>聯絡電話：</h5>
              <p className='leading-7 text-second-47'>886-3-9545114</p>
            </li>
            <li className='flex mb-2'>
              <h5 className='flex-shrink-0 flex-grow-0 text-lg font-bold text-second-47'>主辦單位：</h5>
              <p className='leading-7 text-second-47'>苗栗市公所、苗栗市民代表會</p>
            </li>
            <li className='flex mb-2'>
              <h5 className='flex-shrink-0 flex-grow-0 text-lg font-bold text-second-47'>活動地點：</h5>
              <a
                href='https://www.google.com.tw/maps/search/苗栗火車站西站廣場'
                target='_blank'
                rel='noreferrer'
                className='leading-7 text-primary-3 underline'>
                苗栗火車站西站廣場
              </a>
            </li>
            <li className='flex mb-2'>
              <h5 className='flex-shrink-0 flex-grow-0 text-lg font-bold text-second-47'>官方網站：</h5>
              <a href='http://www.art-fruit.com.tw/2021/index.html' target='_blank' rel='noreferrer' className='leading-7 text-primary-3 underline'>
                http://www.art-fruit.com.tw/2021/index.html
              </a>
            </li>
            <li className='flex mb-2'>
              <h5 className='flex-shrink-0 flex-grow-0 text-lg font-bold text-second-47'>活動費用：</h5>
              <p className='leading-7 text-second-47'>免費。</p>
            </li>
            <li className='flex'>
              <h5 className='flex-shrink-0 flex-grow-0 text-lg font-bold text-second-47'>注意事項：</h5>
              <p className='leading-7 text-second-47'>小心火燭</p>
            </li>
          </ul>
          <div className=''>
            <div className='iframe_wrap mb-5'>
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
            <h5>周邊資訊：</h5>
          </div>
        </div>
      </div>
    </main>
  );
}
