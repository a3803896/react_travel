import React, { useState, useRef, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import qs from 'querystring';
import axios from 'axios';
import getAuthorizationHeader from '../plugins/getAuthorizationHeader';
import MyDropdown from '../components/MyDropdown';
import MyPegination from '../components/MyPegination';
import searchIcon from '../assets/img/search30.svg';
import localImg from '../assets/img/地方特產.png';
import chinesefoodImg from '../assets/img/中式美食.png';
import dessertImg from '../assets/img/甜點冰品.png';
import foreignImg from '../assets/img/異國料理.png';
import giftImg from '../assets/img/伴手禮.png';
import veganImg from '../assets/img/素食.png';
import emptyImg from '../assets/img/empty.png';
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
  { img: localImg, title: '地方特產' },
  { img: chinesefoodImg, title: '中式美食' },
  { img: dessertImg, title: '甜點冰品' },
  { img: foreignImg, title: '異國料理' },
  { img: giftImg, title: '伴手禮' },
  { img: veganImg, title: '素食' },
];

export default function Restaurant() {
  let history = useHistory();
  let { search } = useLocation();
  // data
  const titleRef = useRef();
  const [keyword, setKeyword] = useState('');
  const [optionValue, setOptionValue] = useState(options[0].value);
  const [filter, setFilter] = useState('');
  const [searchRes, setSearchRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  // mounted
  useEffect(() => {
    if (!search) return;
    searchHandler();
  }, [search]);
  useEffect(() => {
    if (!search) return;
    let filteredArr;
    if (filter === '') {
      filteredArr = searchRes;
    } else {
      filteredArr = searchRes.filter((item) => item.Class === filter);
    }
    setFilteredRes(filteredArr);
  }, [filter, searchRes]);
  // methods
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
  function replaceUrl() {
    history.replace(`/restaurant?city=${optionValue}&q=${keyword}`);
  }
  function searchHandler() {
    setIsEmpty(false);
    let keyObj = qs.decode(search.slice(1));
    let city = keyObj.city === '全部縣市' ? '' : keyObj.city === undefined ? '' : `/${keyObj.city}`;
    let { q, lat, long } = keyObj;
    q = q || '';
    setKeyword(q);
    setOptionValue(keyObj.city || '全部縣市');
    axios
      .get(
        `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant${city}?$filter=contains(Description%2C'${q}')%20or%20contains(RestaurantName%2C'${q}')%20or%20contains(Address%2C'${q}')&$orderby=RestaurantName&$top=240${
          lat && long ? `&$spatialFilter=nearby(${lat}%2C%20${long}%2C%20${2000})` : ''
        }&$format=JSON`,
        {
          headers: getAuthorizationHeader(),
        }
      )
      .then((res) => {
        let targetArr = res.data.map((item) => ({ ...item, type: '美食' }));
        setSearchRes(targetArr);
        if (targetArr.length === 0) setIsEmpty(true);
      })
      .catch(() => {
        setIsEmpty(true);
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
          <span className='text-second-100'>品嚐美食</span>
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
            value={keyword}
            onInput={(e) => setKeyword(e.target.value.trim())}
            type='text'
            placeholder='你想去哪裡？請輸入關鍵字'
            className='border border-second-229 bg-second-249 rounded-md w-full lg:w-auto flex-grow placeholder-second-158 leading-7 text-second-47 focus:outline-none px-7.5 py-3 mb-2 lg:mb-0 lg:mx-4'
          />
          <button onClick={replaceUrl} className='bg-primary-1 rounded-md flex items-center justify-center w-full lg:w-60 flex-shrink-0 flex-grow-0 py-2.5'>
            <img src={searchIcon} alt='搜尋icon' className='mr-2.5' />
            <p className='text-white leading-7 flex justify-between items-center' style={{ width: '63px' }}>
              <span>搜</span>
              <span>尋</span>
            </p>
          </button>
        </div>
        <section className='mb-6'>
          <h2 className='font-light text-2xl lg:text-4xl leading-9 lg:leading-13 text-second-30 mb-4 lg:mb-3 pl-1 lg:pl-2.5'>熱門主題</h2>
          <div className={`${searchRes.length ? 'searched' : ''} grid grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-7.5 gap-y-3`}>
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
              共有 <span className='text-info'> {filteredRes.length} </span> 筆
            </p>
          </div>
          {isEmpty ? (
            <img src={emptyImg} alt='搜尋結果為 0' className='mx-auto mt-15 lg:mt-20' />
          ) : (
            <MyPegination datas={filteredRes} itemsPerPage={20} scrollup={scrollToTitle} />
          )}
        </section>
      </div>
    </main>
  );
}
