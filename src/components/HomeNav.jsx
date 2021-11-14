import React, { useState } from 'react';
import { useHistory } from 'react-router';
import spotYellow from '../assets/img/spot-yellow.svg';
import search from '../assets/img/search30.svg';
import MyDropdown from '../components/MyDropdown';
const options = [
  { value: '探索景點', label: '探索景點' },
  { value: '節慶活動', label: '節慶活動' },
  { value: '品嚐美食', label: '品嚐美食' },
];
export default function HomeNav({ className }) {
  const history = useHistory();
  const [optionValue, setOptionValue] = useState('探索景點');
  const [keyword, setKeyword] = useState('');
  function goSearch() {
    if (!keyword) {
      history.push(`/${optionValue === '探索景點' ? 'scenic' : optionValue === '節慶活動' ? 'activity' : 'restaurant'}`);
    } else {
      history.push(`/${optionValue === '探索景點' ? 'scenic' : optionValue === '節慶活動' ? 'activity' : 'restaurant'}?city=全部縣市&q=${keyword}`);
    }
  }
  return (
    <section className={`${className} lg:flex lg:justify-between lg:px-95px`}>
      <div className='mb-8 lg:mb-0'>
        <h1 className='text-second-30 font-light text-2.5xl lg:text-5xl leading-10 lg:leading-17.5 text-center lg:text-left mb-3'>
          探索<span className='inline-block border-b-2 border-highlight leading-tight'>台灣之美</span>
          <br />
          讓我們更親近這片土地
        </h1>
        <h2 className='flex justify-center lg:justify-start items-center lg:items-end'>
          <img src={spotYellow} alt='黃色地圖pin' className='self-center' />
          <span className='text-second-100 text-sm lg:text-xl leading-5 mr-1'>台灣旅遊景點導覽</span>
          <span className='text-second-100 text-xs lg:text-lg lg:leading-6 font-bold playfair'>Taiwan Travel Guide</span>
        </h2>
      </div>
      <div className='lg:w-350px'>
        <MyDropdown className='mb-2' options={options} optionValue={optionValue} setOptionValue={setOptionValue} placeHolder='' />
        <input
          onInput={(e) => setKeyword(e.target.value.trim())}
          type='text'
          placeholder='你想去哪裡？請輸入關鍵字'
          className='border border-second-229 bg-second-249 rounded-md w-full placeholder-second-158 leading-7 text-second-47 focus:outline-none px-7.5 py-3 mb-2'
        />
        <button onClick={goSearch} className='bg-primary-1 rounded-md flex items-center justify-center w-full py-2.5'>
          <img src={search} alt='搜尋icon' className='mr-2.5' />
          <p className='text-white leading-7 flex justify-between items-center' style={{ width: '63px' }}>
            <span>搜</span>
            <span>尋</span>
          </p>
        </button>
      </div>
    </section>
  );
}
