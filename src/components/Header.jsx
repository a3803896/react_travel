import React from 'react';
import LOGO from '@/assets/img/logo.svg';

export default function Header() {
  return (
    <header className='relative'>
      <div className='header_bgimg absolute top-0 bottom-0 w-full bg-no-repeat bg-center'></div>
      <section className='header_container container grid grid-cols-12 gap-x-7.5'>
        <div className='col-span-8 col-start-3 mb-4'>
          <div className='flex items-center mb-4'>
            <img src={LOGO} alt='LOGO' className='w-14 mr-2' />
            <h1 className='prompt text-dark text-3.5xl leading-12 font-bold'>BO-JI</h1>
          </div>
          <h2 className='text-15 leading-title font-bold border-b border-black pb-5'>冒險與發現。</h2>
        </div>
        <div className='col-span-8 col-start-3 grid grid-cols-8 gap-x-7.5'>
          <h3 className='col-span-8 prompt font-bold text-4.5xl leading-15 mb-4'>Discover</h3>
          <div className='col-span-3'>
            <div className='flex items-center justify-between select-none cursor-pointer bg-white-default rounded-100 py-3 px-5'>
              <p className='text-grey text-xl leading-7.5'>選擇地區</p>
              <span className='material-icons text-grey'>expand_more</span>
            </div>
          </div>
          <div className='col-span-3'>
            <div className='flex items-center justify-between bg-white-default rounded-100 py-3 px-5'>
              <input type='text' className='h-7.5 min-w-0 text-xl outline-none' placeholder='輸入關鍵字' />
              <span className='material-icons text-grey select-none ml-2'>search</span>
            </div>
          </div>
          <div className='col-span-2 p-1'>
            <button className='bg-accent-default w-full h-full rounded-100 text-white-default font-bold'>搜尋</button>
          </div>
        </div>
      </section>
    </header>
  );
}
