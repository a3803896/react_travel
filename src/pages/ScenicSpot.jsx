import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MyDropdown from '../components/MyDropdown';
import search from '../assets/img/search30.svg';
import natureImg from '../assets/img/自然風景.png';
import factoryImg from '../assets/img/觀光工廠.png';
import playImg from '../assets/img/遊憩.png';
import farmingImg from '../assets/img/休閒農業.png';
import ecologyImg from '../assets/img/生態.png';
import hotspringImg from '../assets/img/溫泉.png';
import historicImg from '../assets/img/古蹟.png';
const options = [
  { value: '全部縣市', label: '全部縣市' },
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

export default function ScenicSpot() {
  const [optionValue, setOptionValue] = useState(options[0].value);
  return (
    <main className='flex-grow'>
      <div className='container px-4 lg:px-0 pt-6 lg:pt-15'>
        <div className='text-xs leading-5 lg:text-base lg:leading-7 mb-4 lg:mb-7.5'>
          <Link className='text-primary-3 mr-1 lg:mr-2' to='/'>
            首頁
          </Link>
          <span className='text-second-100 mr-1 lg:mr-2'>/</span>
          <span className='text-second-100'>探索景點</span>
        </div>
        <div className='flex items-center justify-between flex-col lg:flex-row mb-6 lg:mb-15'>
          <MyDropdown
            className='w-full lg:w-60 mb-2 lg:mb-0 flex-shrink-0 flex-grow-0'
            options={options}
            optionValue={optionValue}
            setOptionValue={setOptionValue}
            placeHolder=''
          />
          <input
            type='text'
            placeholder='你想去哪裡？請輸入關鍵字'
            className='border border-second-229 bg-second-249 rounded-md w-full lg:w-auto flex-grow placeholder-second-158 leading-7 text-second-47 focus:outline-none px-7.5 py-3 mb-2 lg:mb-0 lg:mx-4'
          />
          <button className='bg-primary-1 rounded-md flex items-center justify-center w-full lg:w-60 flex-shrink-0 flex-grow-0 py-2.5'>
            <img src={search} alt='搜尋icon' className='mr-2.5' />
            <p className='text-white leading-7 flex justify-between items-center' style={{ width: '63px' }}>
              <span>搜</span>
              <span>尋</span>
            </p>
          </button>
        </div>
        <div className='mb-6'>
          <h2 className='font-light text-2xl lg:text-4xl leading-9 lg:leading-13 text-second-30 mb-4 lg:mb-3 lg:pl-2.5'>熱門主題</h2>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-7.5 gap-y-3'>
            <div className='flex justify-center items-center h-20 lg:h-31 bg-cover cursor-pointer rounded-3xl' style={{ backgroundImage: `url(${natureImg})` }}>
              <p className='text-white lg:text-2xl lg:leading-9 font-bold'>自然風景類</p>
            </div>
            <div
              className='flex justify-center items-center h-20 lg:h-31 bg-cover cursor-pointer rounded-3xl'
              style={{ backgroundImage: `url(${factoryImg})` }}>
              <p className='text-white lg:text-2xl lg:leading-9 font-bold'>觀光工廠類</p>
            </div>
            <div className='flex justify-center items-center h-20 lg:h-31 bg-cover cursor-pointer rounded-3xl' style={{ backgroundImage: `url(${playImg})` }}>
              <p className='text-white lg:text-2xl lg:leading-9 font-bold'>遊憩類</p>
            </div>
            <div
              className='flex justify-center items-center h-20 lg:h-31 bg-cover cursor-pointer rounded-3xl'
              style={{ backgroundImage: `url(${farmingImg})` }}>
              <p className='text-white lg:text-2xl lg:leading-9 font-bold'>休閒農業類</p>
            </div>
            <div
              className='flex justify-center items-center h-20 lg:h-31 bg-cover cursor-pointer rounded-3xl'
              style={{ backgroundImage: `url(${ecologyImg})` }}>
              <p className='text-white lg:text-2xl lg:leading-9 font-bold'>生態類</p>
            </div>
            <div
              className='flex justify-center items-center h-20 lg:h-31 bg-cover cursor-pointer rounded-3xl'
              style={{ backgroundImage: `url(${hotspringImg})` }}>
              <p className='text-white lg:text-2xl lg:leading-9 font-bold'>溫泉類</p>
            </div>
            <div
              className='flex justify-center items-center h-20 lg:h-31 bg-cover cursor-pointer rounded-3xl'
              style={{ backgroundImage: `url(${historicImg})` }}>
              <p className='text-white lg:text-2xl lg:leading-9 font-bold'>古蹟類</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
