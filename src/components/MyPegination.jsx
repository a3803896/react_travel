import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import spotGrey from '../assets/img/spot-grey.svg';
import arrowRightPagination from '../assets/img/arrowRightPagination.svg';
import arrowLeftPagination from '../assets/img/arrowLeftPagination.svg';
import noImg from '../assets/img/no-image-icon.PNG';

function Items({ currentItems }) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-y-3 lg:gap-7.5 mb-20'>
      {currentItems &&
        currentItems.map((item) => (
          <div className='info_card w-full pb-2 lg:pb-0' key={item.ID}>
            <Link
              to={`/${
                item.type === '景點'
                  ? `scenicinfo/${item.ScenicSpotID}`
                  : item.type === '活動'
                  ? `activityinfo/${item.ActivityID}`
                  : `restaurantinfo/${item.RestaurantID}`
              }`}
              className='block w-full h-40 lg:h-50 rounded-5 overflow-hidden mb-1 lg:mb-2'>
              <img className='info_card_img w-full h-full object-cover object-center' src={item.Picture.PictureUrl1 || noImg} alt={item.Name} />
            </Link>
            <Link to={`/${item.type === '景點' ? 'scenicinfo' : item.type === '活動' ? 'activityinfo' : 'restaurantinfo'}/${item.ID}`} className='block mb-1'>
              <h5 className='text-lg lg:text-5.5 lg:leading-8 font-bold text-second-47 ellipsis-1'>
                {item.type === '景點' ? item.ScenicSpotName : item.type === '活動' ? item.ActivityName : item.RestaurantName}
              </h5>
            </Link>
            <div className='flex items-center'>
              <img src={spotGrey} alt='地圖圖標' className='mr-1' />
              <p className='text-second-100'>{item.City}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default function MyPegination({ datas, itemsPerPage = 20, scrollup }) {
  const items = datas;
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    scrollup();
  };

  return (
    <>
      <Items currentItems={currentItems} className='' />
      <ReactPaginate
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        previousLabel={<img src={arrowLeftPagination} alt='上一頁' />}
        breakLabel='...'
        nextLabel={<img src={arrowRightPagination} alt='下一頁' />}
        pageLinkClassName='flex items-center justify-center w-8 h-8 font-bold text-sm border border-second-229 rounded text-second-100 mx-1'
        previousLinkClassName='flex items-center justify-center w-8 h-8 rounded bg-primary-1 mr-1'
        nextLinkClassName='flex items-center justify-center w-8 h-8 rounded bg-primary-1 ml-1'
        breakLinkClassName='flex items-center justify-center w-8 h-8 font-bold text-sm border border-second-229 rounded text-second-100 mx-1'
        containerClassName='flex items-center justify-center'
        activeLinkClassName='actived-link'
        disabledLinkClassName='disabled-link'
      />
    </>
  );
}
