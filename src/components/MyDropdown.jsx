/* 
  1.使用方法：在父元件內
    import MyDropdown from '../components/MyDropdown';
    const options = [
      { value: 'one', label: '一' },
      { value: 'two', label: '二', className: 'myOptionClassName' },
      {
        type: 'group', name: '第一分組', items: [
          { value: 'three', label: '三' }
        ]
      },
    ];
    const [optionValue, setOptionValue] = useState('');
    <MyDropdown className='mb-2' options={options} optionValue={optionValue} setOptionValue={setOptionValue} placeHolder='' />

  2.若需要用其他元素修改 dropdown 的值：
    dropdownRef.current.fireChangeEvent({selected: {value: 'VALUE_YOU_WANT'}});
*/

import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import arrowDown from '../assets/img/arrow-down.svg';

export default function MyDropdown({ className, options, optionValue, setOptionValue, placeHolder }) {
  return (
    <Dropdown
      className={`${className}`}
      arrowClosed={<img src={arrowDown} alt='' />}
      arrowOpen={<img src={arrowDown} alt='' />}
      menuClassName='animate__animated animate__fadeIn'
      options={options}
      value={optionValue}
      onChange={(e) => setOptionValue(e.value)}
      placeholder={placeHolder}
    />
  );
}
