import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import MySwiper from '../components/MySwiper';
import MoreSwiper from '../components/MoreSwiper';
import axios from 'axios';
import getAuthorizationHeader from '../plugins/getAuthorizationHeader';
import nearbyScenic from '../assets/img/nearby-scene30.svg';
import nearbyEvent from '../assets/img/nearby-event30.svg';
import nearbyFood from '../assets/img/nearby-food30.svg';
import arrowRightWarning from '../assets/img/arrowRightWarning.svg';
import spotGrey from '../assets/img/spot-grey.svg';
import noImg from '../assets/img/no-image-icon.PNG';

const countries = [
  { value: 'Taipei', label: '臺北市' },
  { value: 'NewTaipei', label: '新北市' },
  { value: 'Taoyuan', label: '桃園市' },
  { value: 'Taichung', label: '臺中市' },
  { value: 'Tainan', label: '臺南市' },
  { value: 'Kaohsiung', label: '高雄市' },
  { value: 'Keelung', label: '基隆市' },
  { value: 'Hsinchu', label: '新竹市' },
  { value: 'HsinchuCounty', label: '新竹縣' },
  { value: 'MiaoliCounty', label: '苗栗縣' },
  { value: 'ChanghuaCounty', label: '彰化縣' },
  { value: 'NantouCounty', label: '南投縣' },
  { value: 'YunlinCounty', label: '雲林縣' },
  { value: 'ChiayiCounty', label: '嘉義縣' },
  { value: 'Chiayi', label: '嘉義市' },
  { value: 'PingtungCounty', label: '屏東縣' },
  { value: 'YilanCounty', label: '宜蘭縣' },
  { value: 'HualienCounty', label: '花蓮縣' },
  { value: 'TaitungCounty', label: '臺東縣' },
  { value: 'KinmenCounty', label: '金門縣' },
  { value: 'PenghuCounty', label: '澎湖縣' },
  { value: 'LienchiangCounty', label: '連江縣' },
];

export default function ActivityInfo() {
  // data
  const { id } = useParams();
  const [detail, setDetail] = useState({ Position: {} });
  const [info, setInfo] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [country, setCountry] = useState('');
  const [engCity, setEngCity] = useState('');
  // mounted
  useEffect(() => {
    getDetail();
    getInfo();
  }, [id, country]);
  // methods
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function transFormat(value) {
    return ('0' + value).slice(-2);
  }
  function formatDate(time) {
    let date = new Date(time);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let days = date.getDate();
    let hours = date.getHours();
    let mins = date.getMinutes();
    return year + '/' + transFormat(month) + '/' + transFormat(days) + ' ' + transFormat(hours) + ':' + transFormat(mins);
  }
  function getDetail() {
    axios
      .get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=ScenicSpotID%20eq%20'${id}'&$format=JSON`, {
        headers: getAuthorizationHeader(),
      })
      .then((res) => {
        setDetail(res.data[0]);
        setCountry(res.data[0].City);
        setPhoto([
          {
            id: 0,
            img: res.data[0].Picture?.PictureUrl1,
            discription: res.data[0].Picture?.PictureDescription1,
          },
          {
            id: 1,
            img: res.data[0].Picture?.PictureUrl2,
            discription: res.data[0].Picture?.PictureDescription2,
          },
          {
            id: 2,
            img: res.data[0].Picture?.PictureUrl3,
            discription: res.data[0].Picture?.PictureDescription3,
          },
        ]);
      });
  }
  function getInfo() {
    if (!country) return;
    let targetObj = countries.find((item) => item.label === country);
    setEngCity(targetObj.value);
    axios
      .get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${targetObj.value}?$orderby=UpdateTime&$top=25&$format=JSON`, {
        headers: getAuthorizationHeader(),
      })
      .then(function (res) {
        let targetArr = res.data.filter((item) => item.ID !== id);
        targetArr = shuffle(targetArr).map((item) => {
          return {
            id: item.ScenicSpotID,
            img: item.Picture.PictureUrl1 || noImg,
            title: item.ScenicSpotName,
            location: item.City,
            type: '景點',
          };
        });
        setInfo(targetArr.slice(0, 4));
      });
  }
  // template
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
          <Link className='text-primary-3 mr-1 lg:mr-2' to={`/scenic?city=${engCity}`}>
            {detail.City}
          </Link>
          <span className='text-second-100 mr-1 lg:mr-2'>/</span>
          <span className='text-second-100'>{detail.ScenicSpotName}</span>
        </div>
        <MySwiper className='mb-4 lg:mb-7.5' photos={photo} />
        <h2 className='text-2xl lg:text-4xl leading-9 lg:leading-13 font-light text-second-30 mb-2 lg:mb-3'>{detail.ScenicSpotName}</h2>
        <div className='flex items-center mb-4 lg:mb-7.5'>
          {detail.Class1 && (
            <div className='border border-info rounded-5 select-none px-3 lg:px-4 py-1/2 mr-1.5 lg:mr-2 last:mr-0'>
              <p className='text-info text-sm lg:text-xl'># {detail.Class1}</p>
            </div>
          )}
          {detail.Class2 && (
            <div className='border border-info rounded-5 select-none px-3 lg:px-4 py-1/2 mr-1.5 lg:mr-2 last:mr-0'>
              <p className='text-info text-sm lg:text-xl'># {detail.Class2}</p>
            </div>
          )}
          {detail.Class3 && (
            <div className='border border-info rounded-5 select-none px-3 lg:px-4 py-1/2 mr-1.5 lg:mr-2 last:mr-0'>
              <p className='text-info text-sm lg:text-xl'># {detail.Class3}</p>
            </div>
          )}
        </div>
        <div className='mb-7.5 lg:mb-15'>
          <h5 className='text-second-47 text-lg lg:text-xl font-bold mb-2 lg:mb-2.5'>景點介紹：</h5>
          <p className='font-light leading-8 lg:text-lg lg:leading-8'>{detail.DescriptionDetail}</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-7.5 bg-second-249 lg:bg-transparent -mx-4 lg:mx-0 px-4 lg:px-0 py-7.5 lg:py-0 mb-15'>
          <ul className='bg-second-249 self-start lg:p-7.5'>
            <li className='flex mb-2 lg:mb-3'>
              <h5 className='flex-shrink-0 flex-grow-0 text-lg lg:text-xl font-bold text-second-47'>開放時間：</h5>
              <p className='leading-7 lg:text-lg text-second-47'>{detail.OpenTime}</p>
            </li>
            <li className='flex mb-2 lg:mb-3'>
              <h5 className='flex-shrink-0 flex-grow-0 text-lg lg:text-xl font-bold text-second-47'>服務電話：</h5>
              <p className='leading-7 lg:text-lg text-second-47'>{detail.Phone}</p>
            </li>
            <li className='flex mb-2 lg:mb-3'>
              <h5 className='flex-shrink-0 flex-grow-0 text-lg lg:text-xl font-bold text-second-47'>景點地址：</h5>
              <a
                href={`https://www.google.com.tw/maps/search/${detail.Address}`}
                target='_blank'
                rel='noreferrer'
                className='leading-7 lg:text-lg text-primary-3 underline'>
                {detail.Address}
              </a>
            </li>
            <li className='flex mb-2 lg:mb-3'>
              <h5 className='flex-shrink-0 flex-grow-0 text-lg lg:text-xl font-bold text-second-47'>官方網站：</h5>
              <a href={detail.WebsiteUrl} target='_blank' rel='noreferrer' className='leading-7 lg:text-lg text-primary-3 underline'>
                {detail.WebsiteUrl}
              </a>
            </li>
            <li className='flex mb-2 lg:mb-3'>
              <h5 className='flex-shrink-0 flex-grow-0 text-lg lg:text-xl font-bold text-second-47'>票價資訊：</h5>
              <p className='leading-7 lg:text-lg text-second-47'>{detail.TicketInfo}</p>
            </li>
            <li className='flex'>
              <h5 className='flex-shrink-0 flex-grow-0 text-lg lg:text-xl font-bold text-second-47'>注意事項：</h5>
              <p className='leading-7 lg:text-lg text-second-47'>{detail.Remarks}</p>
            </li>
          </ul>
          <div className=''>
            <div className='iframe_wrap mb-5 lg:mb-8'>
              <iframe
                key={detail.Position.PositionLat}
                className='iframe_inner'
                title='map'
                style={{ border: 0 }}
                width='auto'
                height='auto'
                loading='lazy'
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDfyXzEmwduts3D4J5mKNPqV4BOoyrgbb0
                &q=${detail.Position.PositionLat},${detail.Position.PositionLon}`}></iframe>
            </div>
            <h5 className='text-lg lg:text-xl font-bold mb-5'>周邊資訊：</h5>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-2 lg:gap-y-0 lg:gap-x-7.5'>
              <Link
                to={`/scenic?lat=${detail.Position.PositionLat}&long=${detail.Position.PositionLon}`}
                className='flex flex-col items-center justify-center border border-second-229 rounded-md py-2 lg:py-6'>
                <img src={nearbyScenic} alt='' className='mb-1/2' />
                <p className='font-bold leading-7 text-primary-1'>附近景點</p>
              </Link>
              <Link
                to={`/activity?lat=${detail.Position.PositionLat}&long=${detail.Position.PositionLon}`}
                className='flex flex-col items-center justify-center border border-second-229 rounded-md py-2 lg:py-6'>
                <img src={nearbyEvent} alt='' className='mb-1/2' />
                <p className='font-bold leading-7 text-primary-1'>附近活動</p>
              </Link>
              <Link
                to={`/restaurant?lat=${detail.Position.PositionLat}&long=${detail.Position.PositionLon}`}
                className='flex flex-col items-center justify-center border border-second-229 rounded-md py-2 lg:py-6'>
                <img src={nearbyFood} alt='' className='mb-1/2' />
                <p className='font-bold leading-7 text-primary-1'>附近美食</p>
              </Link>
            </div>
          </div>
        </div>
        {info.length > 0 && (
          <section className=''>
            <div className='flex items-center justify-between mb-2 lg:mb-3 px-1 lg:px-4'>
              <h2 className='text-2xl lg:text-4xl leading-9 lg:leading-13 font-light'>
                還有這些<span className='hidden lg:inline'>不能錯過的景點</span>
              </h2>
              <Link to='/sceneic' className='text-warning-1 flex items-center select-none'>
                查看更多景點
                <img src={arrowRightWarning} className='w-4 h-4 ml-1' alt='查看更多' />
              </Link>
            </div>
            <div className=''>
              <MoreSwiper className='lg:hidden' info={info}></MoreSwiper>
              <div className='hidden lg:grid lg:grid-cols-4 lg:gap-x-7.5'>
                {info.map((item) => {
                  return (
                    <div className='info_card w-full pb-2.5' key={item.id}>
                      <Link to={`/scenicinfo/${item.id}`} className='block w-full h-50 rounded-5 overflow-hidden mb-2'>
                        <img className='info_card_img w-full h-full object-cover object-center' src={item.img} alt={item.title} />
                      </Link>
                      <Link to={`/scenicinfo/${item.id}`} className='block'>
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
        )}
      </div>
    </main>
  );
}
