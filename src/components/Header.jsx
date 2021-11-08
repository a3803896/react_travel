import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import mobileMenu from '../assets/img/menu-mobile.svg';
import mobileMenuClose from '@/assets/img/menu-mobile-close.svg';
import mobileLogo from '@/assets/img/Logo-mobile.svg';
import pcLogo from '@/assets/img/Logo-desktop.svg';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className='sticky bg-white lg:border-b border-second-229 top-0 z-20'>
      <div className='container h-16 lg:h-20 grid grid-cols-3 items-center px-2'>
        <NavLink to='/' className='col-start-2 lg:col-start-1 justify-self-center lg:justify-self-start'>
          <img src={mobileLogo} className='lg:hidden' alt='LOGO' />
          <img src={pcLogo} className='hidden lg:block' alt='LOGO' />
        </NavLink>
        <img onClick={() => setShowMenu(true)} src={mobileMenu} className='lg:hidden col-start-3 justify-self-end' alt='打開選單' />
        <ul className='hidden lg:flex col-span-2 justify-self-end'>
          <li className=''>
            <NavLink to='/scenic' className='text-second-100 text-lg leading-none'>
              探索景點
            </NavLink>
          </li>
          <li className='ml-5'>
            <NavLink to='/activity' className='text-second-100 text-lg leading-none'>
              節慶活動
            </NavLink>
          </li>
          <li className='ml-5'>
            <NavLink to='/restaurant' className='text-second-100 text-lg leading-none'>
              品嚐美食
            </NavLink>
          </li>
        </ul>
      </div>
      {showMenu && <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />}
    </header>
  );
}

function MobileMenu({ setShowMenu }) {
  const [isClosing, setClosing] = useState(false);
  function closeMenu() {
    setClosing(true);
    setTimeout(() => {
      setShowMenu(false);
    }, 200);
  }
  return (
    <div
      className={`mobile_menu_bg flex top-0 left-0 items-start justify-end fixed z-30 w-screen h-screen animate__animated animate__fadeIn ${
        isClosing ? 'animate__fadeOut' : ''
      }`}>
      <div className={`bg-white w-69 rounded-bl-3xl pt-2 px-2 pb-8 animate__animated animate__fadeInTopRight ${isClosing ? 'animate__fadeOutTopRight' : ''}`}>
        <div className='flex justify-between items-center mb-2'>
          <NavLink to='/' className='inline-block ml-6'>
            <img src={mobileLogo} alt='LOGO' />
          </NavLink>
          <img src={mobileMenuClose} onClick={closeMenu} alt='關閉選單' />
        </div>
        <ul>
          <li className='border-b border-second-229'>
            <NavLink to='/scenic' className='block select-none text-center text-xl text-second-100 py-6'>
              探索景點
            </NavLink>
          </li>
          <li className='border-b border-second-229'>
            <NavLink to='/activity' className='block select-none text-center text-xl text-second-100 py-6'>
              節慶活動
            </NavLink>
          </li>
          <li>
            <NavLink to='/restaurant' className='block select-none text-center text-xl text-second-100 py-6'>
              品嚐美食
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
