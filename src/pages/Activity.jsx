import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import MyDropdown from '../components/MyDropdown';
import MyPegination from '../components/MyPegination';
import MyDatePicker from '../components/MyDatePicker';
import search from '../assets/img/search30.svg';
import festvalImg from '../assets/img/節慶活動.png';
import bikeImg from '../assets/img/自行車活動.png';
import tourImg from '../assets/img/遊憩活動.png';
import cultureImg from '../assets/img/產業文化活動.png';
import yearImg from '../assets/img/年度活動.png';
import seasonalImg from '../assets/img/四季活動.png';
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
const filters = [
  { img: festvalImg, title: '節慶活動' },
  { img: bikeImg, title: '自行車活動' },
  { img: tourImg, title: '遊憩活動' },
  { img: cultureImg, title: '產業文化活動' },
  { img: yearImg, title: '年度活動' },
  { img: seasonalImg, title: '四季活動' },
];

export default function Activity() {
  const titleRef = useRef();
  const [date, setDate] = useState('');
  const [optionValue, setOptionValue] = useState(options[0].value);
  const [filter, setFilter] = useState('');
  function scrollToTitle() {
    if (window.innerWidth < 992) {
      titleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    const yOffset = -80;
    const element = titleRef.current;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
  function clickHandler(title) {
    if (title === filter) return setFilter('');
    setFilter(title);
  }
  return (
    <main className='flex-grow pb-9'>
      <div className='container px-4 lg:px-0 pt-6 lg:pt-15'>
        <div className='text-xs leading-5 lg:text-base lg:leading-7 mb-4 lg:mb-7.5'>
          <Link className='text-primary-3 mr-1 lg:mr-2' to='/'>
            首頁
          </Link>
          <span className='text-second-100 mr-1 lg:mr-2'>/</span>
          <span className='text-second-100'>節慶活動</span>
        </div>
        <div className='flex justify-between flex-col lg:flex-row mb-6 lg:mb-15'>
          <MyDropdown
            className='w-full lg:w-60 mb-2 lg:mb-0 flex-shrink-0 flex-grow-0'
            options={options}
            optionValue={optionValue}
            setOptionValue={setOptionValue}
            placeHolder=''
          />
          <MyDatePicker className='activity_datepicker' date={date} setDate={setDate} />
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
        <section className='mb-6'>
          <h2 className='font-light text-2xl lg:text-4xl leading-9 lg:leading-13 text-second-30 mb-4 lg:mb-3 pl-1 lg:pl-2.5'>熱門主題</h2>
          {/* 搜尋後加上 searched */}
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-7.5 gap-y-3'>
            {filters.map((item) => {
              return (
                <div
                  onClick={() => clickHandler(item.title)}
                  key={item.title}
                  className={`${
                    filter === '' ? 'selected' : filter === item.title ? 'selected-exact' : ''
                  } filterCard flex justify-center items-center h-20 lg:h-31 bg-cover bg-center cursor-pointer`}
                  style={{ backgroundImage: `url(${item.img})` }}>
                  <p className='text-white lg:text-2xl lg:leading-9 font-bold select-none'>{item.title}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className=''>
          <div className='flex items-baseline mb-4 lg:mb-3 pl-1 lg:pl-2.5'>
            <h2 ref={titleRef} className='font-light text-2xl lg:text-4xl leading-9 lg:leading-13 text-second-30 mr-2'>
              搜尋結果
            </h2>
            <p className='text-sm lg:text-lg leading-5 lg:leading-6 font-light text-second-30'>
              共有 <span className='text-info'> 240 </span> 筆
            </p>
          </div>
          <MyPegination
            datas={[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
              40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
              76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109,
              110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138,
              139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
              25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
              61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
              97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126,
              127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150,
            ]}
            itemsPerPage={20}
            scrollup={scrollToTitle}
          />
        </section>
      </div>
    </main>
  );
}
