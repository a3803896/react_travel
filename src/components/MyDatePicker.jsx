/* 
  使用方法：在父元件內
  import MyDatePicker from '../components/MyDatePicker';
  const [date, setDate] = useState(new Date());
  <MyDatePicker className="" date={date} setDate={setDate} />
*/

import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import zh from 'date-fns/locale/zh-TW';
registerLocale('zh', zh);

export default function MyDatePicker({ date, setDate, className }) {
  return (
    <DatePicker
      placeholderText='選擇日期'
      wrapperClassName={`${className}`}
      locale='zh'
      dateFormat='yyyy/MM/dd'
      selected={date}
      onChange={(date) => setDate(date)}
    />
  );
}
