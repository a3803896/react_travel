import React, { useState } from 'react';
import spotYellow from '@/assets/img/spot-yellow.svg';
import MyDropdown from '@/components/MyDropdown';
const options = [
  { value: 'one', label: '一' },
  { value: 'two', label: '二', className: 'myOptionClassName' },
  {
    type: 'group',
    name: '第一分組',
    items: [{ value: 'three', label: '三' }],
  },
];

export default function Home() {
  const [optionValue, setOptionValue] = useState('');
  return (
    <main>
      <div className='container px-4 pt-1.5'>
        <section>
          <div className='mb-8'>
            <h1 className='text-second-30 font-light text-2.5xl leading-10 text-center mb-3'>
              探索<span className='inline-block border-b-2 border-highlight leading-9'>台灣之美</span>
              <br />
              讓我們更親近這片土地
            </h1>
            <h2 className='flex justify-center items-center'>
              <img src={spotYellow} alt='' />
              <span className='text-second-100 text-sm leading-5 mr-1'>台灣旅遊景點導覽</span>
              <span className='text-second-100 text-xs font-bold playfair'>Taiwan Travel Guide</span>
            </h2>
          </div>
          <div>
            <MyDropdown options={options} optionValue={optionValue} setOptionValue={setOptionValue} />
          </div>
        </section>
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
