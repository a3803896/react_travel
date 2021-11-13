import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getAuthorizationHeader from '../plugins/getAuthorizationHeader';
import HomeNav from '../components/HomeNav';
import MySwiper from '../components/MySwiper';
import RecentAct from '../components/RecentAct';
import HotScenic from '../components/HotScenic';
import GoodFood from '../components/GoodFood';

export default function Home() {
  // data
  const [photos, setPhotos] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [scenic, setScenic] = useState([]);
  const [food, setFood] = useState([]);
  // mounted
  useEffect(() => {
    getActvity();
    getScenic();
    getFood();
  }, []);
  // methods
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function getActvity() {
    axios
      .get(
        `https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$filter=month(StartTime)%20eq%20${
          new Date().getMonth() + 1
        }&$orderby=EndTime&$top=25&$format=JSON`,
        {
          headers: getAuthorizationHeader(),
        }
      )
      .then(function (res) {
        const resArr = shuffle(res.data.filter((item) => item.Picture.PictureUrl1));
        setRecentActivity(resArr.slice(0, 4));
      });
  }
  function getScenic() {
    const keyword = '秋天';
    axios
      .get(
        `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(DescriptionDetail%2C%27${keyword}%27)&$orderby=UpdateTime&$top=30&$format=JSON`,
        {
          headers: getAuthorizationHeader(),
        }
      )
      .then((res) => {
        const resArr = shuffle(res.data.filter((item) => item.Picture.PictureUrl1));
        let photosArr = shuffle(res.data.filter((item) => item.Picture.PictureUrl1));
        photosArr = photosArr.slice(0, 5).map((item) => {
          return {
            id: item.ID,
            img: item.Picture.PictureUrl1,
            discription: item.Name,
            title: `${item.City} | ${item.Name}`,
          };
        });
        setScenic(resArr.slice(0, 4));
        setPhotos(photosArr);
      });
  }
  function getFood() {
    const keyword = '熱門';
    axios
      .get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$filter=contains(Description%2C'${keyword}')&$orderby=UpdateTime&$format=JSON`, {
        headers: getAuthorizationHeader(),
      })
      .then((res) => {
        const resArr = shuffle(res.data.filter((item) => item.Picture.PictureUrl1));
        setFood(resArr.slice(0, 4));
      });
  }
  // template
  return (
    <main className='flex-grow pb-9'>
      <div className='container px-4 pt-1.5 lg:px-0 lg:pt-20'>
        <HomeNav className='mb-8 lg:mb-14' />
        <MySwiper photos={photos} className='mb-9' />
        <RecentAct dataArray={recentActivity} className='mb-9' />
        <HotScenic dataArray={scenic} className='mb-9' />
        <GoodFood dataArray={food} className='' />
      </div>
    </main>
  );
}
