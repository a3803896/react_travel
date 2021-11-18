import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import MyDropdown from '../components/MyDropdown';
import RoutePagination from '../components/RoutePagination';
import getAuthorizationHeader from '../plugins/getAuthorizationHeader';

const city_data = [
  { value: 'Taipei/臺北市', label: '臺北市' },
  { value: 'NewTaipei/新北市', label: '新北市' },
  { value: 'Taoyuan/桃園市', label: '桃園市' },
  { value: 'Taichung/臺中市', label: '臺中市' },
  { value: 'Tainan/臺南市', label: '臺南市' },
  { value: 'Kaohsiung/高雄市', label: '高雄市' },
  { value: 'Keelung/基隆市', label: '基隆市' },
  { value: 'HsinchuCounty/新竹縣', label: '新竹縣' },
  { value: 'MiaoliCounty/苗栗縣', label: '苗栗縣' },
  { value: 'ChanghuaCounty/彰化縣', label: '彰化縣' },
  { value: 'NantouCounty/南投縣', label: '南投縣' },
  { value: 'YunlinCounty/雲林縣', label: '雲林縣' },
  { value: 'ChiayiCounty/嘉義縣', label: '嘉義縣' },
  { value: 'Chiayi/嘉義市', label: '嘉義市' },
  { value: 'PingtungCounty/屏東縣', label: '屏東縣' },
  { value: 'YilanCounty/宜蘭縣', label: '宜蘭縣' },
  { value: 'HualienCounty/花蓮縣', label: '花蓮縣' },
  { value: 'TaitungCounty/臺東縣', label: '臺東縣' },
  { value: 'KinmenCounty/金門縣', label: '金門縣' },
  { value: 'PenghuCounty/澎湖縣', label: '澎湖縣' },
];
const town_data = {
  臺北市: ['中正區', '大同區', '中山區', '萬華區', '信義區', '松山區', '大安區', '南港區', '北投區', '內湖區', '士林區', '文山區'],
  新北市: [
    '板橋區',
    '新莊區',
    '泰山區',
    '林口區',
    '淡水區',
    '金山區',
    '八里區',
    '萬里區',
    '石門區',
    '三芝區',
    '瑞芳區',
    '汐止區',
    '平溪區',
    '貢寮區',
    '雙溪區',
    '深坑區',
    '石碇區',
    '新店區',
    '坪林區',
    '烏來區',
    '中和區',
    '永和區',
    '土城區',
    '三峽區',
    '樹林區',
    '鶯歌區',
    '三重區',
    '蘆洲區',
    '五股區',
  ],
  基隆市: ['仁愛區', '中正區', '信義區', '中山區', '安樂區', '暖暖區', '七堵區'],
  桃園市: ['桃園區', '中壢區', '平鎮區', '八德區', '楊梅區', '蘆竹區', '龜山區', '龍潭區', '大溪區', '大園區', '觀音區', '新屋區', '復興區'],
  新竹縣: ['竹北市', '竹東鎮', '新埔鎮', '關西鎮', '峨眉鄉', '寶山鄉', '北埔鄉', '橫山鄉', '芎林鄉', '湖口鄉', '新豐鄉', '尖石鄉', '五峰鄉'],
  新竹市: ['東區', '北區', '香山區'],
  苗栗縣: [
    '苗栗市',
    '通霄鎮',
    '苑裡鎮',
    '竹南鎮',
    '頭份鎮',
    '後龍鎮',
    '卓蘭鎮',
    '西湖鄉',
    '頭屋鄉',
    '公館鄉',
    '銅鑼鄉',
    '三義鄉',
    '造橋鄉',
    '三灣鄉',
    '南庄鄉',
    '大湖鄉',
    '獅潭鄉',
    '泰安鄉',
  ],
  臺中市: [
    '中區',
    '東區',
    '南區',
    '西區',
    '北區',
    '北屯區',
    '西屯區',
    '南屯區',
    '太平區',
    '大里區',
    '霧峰區',
    '烏日區',
    '豐原區',
    '后里區',
    '東勢區',
    '石岡區',
    '新社區',
    '和平區',
    '神岡區',
    '潭子區',
    '大雅區',
    '大肚區',
    '龍井區',
    '沙鹿區',
    '梧棲區',
    '清水區',
    '大甲區',
    '外埔區',
    '大安區',
  ],
  南投縣: ['南投市', '埔里鎮', '草屯鎮', '竹山鎮', '集集鎮', '名間鄉', '鹿谷鄉', '中寮鄉', '魚池鄉', '國姓鄉', '水里鄉', '信義鄉', '仁愛鄉'],
  彰化縣: [
    '彰化市',
    '員林鎮',
    '和美鎮',
    '鹿港鎮',
    '溪湖鎮',
    '二林鎮',
    '田中鎮',
    '北斗鎮',
    '花壇鄉',
    '芬園鄉',
    '大村鄉',
    '永靖鄉',
    '伸港鄉',
    '線西鄉',
    '福興鄉',
    '秀水鄉',
    '埔心鄉',
    '埔鹽鄉',
    '大城鄉',
    '芳苑鄉',
    '竹塘鄉',
    '社頭鄉',
    '二水鄉',
    '田尾鄉',
    '埤頭鄉',
    '溪州鄉',
  ],
  雲林縣: [
    '斗六市',
    '斗南鎮',
    '虎尾鎮',
    '西螺鎮',
    '土庫鎮',
    '北港鎮',
    '莿桐鄉',
    '林內鄉',
    '古坑鄉',
    '大埤鄉',
    '崙背鄉',
    '二崙鄉',
    '麥寮鄉',
    '臺西鄉',
    '東勢鄉',
    '褒忠鄉',
    '四湖鄉',
    '口湖鄉',
    '水林鄉',
    '元長鄉',
  ],
  嘉義縣: [
    '太保市',
    '朴子市',
    '布袋鎮',
    '大林鎮',
    '民雄鄉',
    '溪口鄉',
    '新港鄉',
    '六腳鄉',
    '東石鄉',
    '義竹鄉',
    '鹿草鄉',
    '水上鄉',
    '中埔鄉',
    '竹崎鄉',
    '梅山鄉',
    '番路鄉',
    '大埔鄉',
    '阿里山鄉',
  ],
  嘉義市: ['東區', '西區'],
  臺南市: [
    '中西區',
    '東區',
    '南區',
    '北區',
    '安平區',
    '安南區',
    '永康區',
    '歸仁區',
    '新化區',
    '左鎮區',
    '玉井區',
    '楠西區',
    '南化區',
    '仁德區',
    '關廟區',
    '龍崎區',
    '官田區',
    '麻豆區',
    '佳里區',
    '西港區',
    '七股區',
    '將軍區',
    '學甲區',
    '北門區',
    '新營區',
    '後壁區',
    '白河區',
    '東山區',
    '六甲區',
    '下營區',
    '柳營區',
    '鹽水區',
    '善化區',
    '大內區',
    '山上區',
    '新市區',
    '安定區',
  ],
  高雄市: [
    '楠梓區',
    '左營區',
    '鼓山區',
    '三民區',
    '鹽埕區',
    '前金區',
    '新興區',
    '苓雅區',
    '前鎮區',
    '小港區',
    '旗津區',
    '鳳山區',
    '大寮區',
    '鳥松區',
    '林園區',
    '仁武區',
    '大樹區',
    '大社區',
    '岡山區',
    '路竹區',
    '橋頭區',
    '梓官區',
    '彌陀區',
    '永安區',
    '燕巢區',
    '田寮區',
    '阿蓮區',
    '茄萣區',
    '湖內區',
    '旗山區',
    '美濃區',
    '內門區',
    '杉林區',
    '甲仙區',
    '六龜區',
    '茂林區',
    '桃源區',
    '那瑪夏區',
  ],
  屏東縣: [
    '屏東市',
    '潮州鎮',
    '東港鎮',
    '恆春鎮',
    '萬丹鄉',
    '長治鄉',
    '麟洛鄉',
    '九如鄉',
    '里港鄉',
    '鹽埔鄉',
    '高樹鄉',
    '萬巒鄉',
    '內埔鄉',
    '竹田鄉',
    '新埤鄉',
    '枋寮鄉',
    '新園鄉',
    '崁頂鄉',
    '林邊鄉',
    '南州鄉',
    '佳冬鄉',
    '琉球鄉',
    '車城鄉',
    '滿州鄉',
    '枋山鄉',
    '霧台鄉',
    '瑪家鄉',
    '泰武鄉',
    '來義鄉',
    '春日鄉',
    '獅子鄉',
    '牡丹鄉',
    '三地門鄉',
  ],
  宜蘭縣: ['宜蘭市', '羅東鎮', '蘇澳鎮', '頭城鎮', '礁溪鄉', '壯圍鄉', '員山鄉', '冬山鄉', '五結鄉', '三星鄉', '大同鄉', '南澳鄉'],
  花蓮縣: ['花蓮市', '鳳林鎮', '玉里鎮', '新城鄉', '吉安鄉', '壽豐鄉', '秀林鄉', '光復鄉', '豐濱鄉', '瑞穗鄉', '萬榮鄉', '富里鄉', '卓溪鄉'],
  臺東縣: [
    '臺東市',
    '成功鎮',
    '關山鎮',
    '長濱鄉',
    '海端鄉',
    '池上鄉',
    '東河鄉',
    '鹿野鄉',
    '延平鄉',
    '卑南鄉',
    '金峰鄉',
    '大武鄉',
    '達仁鄉',
    '綠島鄉',
    '蘭嶼鄉',
    '太麻里鄉',
  ],
  澎湖縣: ['馬公市', '湖西鄉', '白沙鄉', '西嶼鄉', '望安鄉', '七美鄉'],
  金門縣: ['金城鎮', '金湖鎮', '金沙鎮', '金寧鄉', '烈嶼鄉', '烏坵鄉'],
  連江縣: ['南竿鄉', '北竿鄉', '莒光鄉', '東引鄉'],
};

export default function MapMenu({ isShow, setIsShow, getRouteData }) {
  // data
  const [city, setCity] = useState('');
  const [townAwait, setTownAwait] = useState([]);
  const [town, setTown] = useState('');
  const [routes, setRoutes] = useState([]);
  const [filteredRoutes, setFilteredRoutes] = useState([]);
  const routesWrapRef = useRef();

  // computed
  useEffect(() => {
    if (!city) return;
    setTown('');
    setTownAwait([]);
    const cityEN = city.split('/')[0];
    const cityCN = city.split('/')[1];
    const targetArr = town_data[cityCN].map((item) => ({ value: item, label: item }));
    targetArr.unshift({ value: '', label: '全部' });
    setTownAwait(targetArr);
    getRoute(cityEN);
  }, [city]);

  useEffect(() => {
    if (!city) return;
    if (town) {
      setFilteredRoutes(routes.filter((item) => item.Town === town));
    } else {
      setFilteredRoutes(routes);
    }
  }, [routes, town]);

  // methods
  function changeCity(value) {
    setCity(value);
    scrollup();
  }
  function changeTown(value) {
    setTown(value);
    scrollup();
  }
  function selectRoute(data) {
    setIsShow(false);
    getRouteData(data);
  }
  function getRoute(city) {
    axios
      .get(`https://ptx.transportdata.tw/MOTC/v2/Cycling/Shape/${city}?$format=JSON`, {
        headers: getAuthorizationHeader(),
      })
      .then((res) => {
        setRoutes(res.data);
      });
  }
  function scrollup() {
    routesWrapRef.current.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div
      className={`${
        isShow ? 'left-0' : '-left-full lg:-left-84'
      } map_menu flex flex-col shadow-md absolute bg-white z-20 w-full lg:w-84 h-full py-4 pl-3 pr-5`}>
      <div onClick={() => setIsShow(false)} className='menu_hide absolute z-30 right-0 top-1/2 transform -translate-y-1/2 cursor-pointer select-none pl-3'>
        <p className='w-5 h-20 bg-primary-1 text-white text-sm flex items-center justify-center pl-3/4'>收合</p>
      </div>
      <div className='flex items-center justify-between mb-4'>
        <MyDropdown className='w-1/2 mr-2' options={city_data} optionValue={city} setOptionValue={changeCity} placeHolder='選擇縣市' />
        <MyDropdown className='w-1/2' options={townAwait} optionValue={town} setOptionValue={changeTown} placeHolder='選擇鄉鎮' />
      </div>
      <div ref={routesWrapRef} className='routes_wrap flex-grow -mr-1'>
        <RoutePagination key={city} selectRoute={selectRoute} scrollup={scrollup} datas={filteredRoutes} />
      </div>
    </div>
  );
}
