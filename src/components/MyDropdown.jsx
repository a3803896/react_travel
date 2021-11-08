/* 
  使用方法：在父元件內
  import MyDropdown from '@/components/MyDropdown';
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
  <MyDropdown options={options} optionValue={optionValue} setOptionValue={setOptionValue} />
*/

import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function MyDropdown({ optionValue, setOptionValue }) {
  const options = ['one', 'two', 'three'];
  return <Dropdown options={options} value={optionValue} onChange={(e) => setOptionValue(e.value)} placeholder='Select an option' />;
}
