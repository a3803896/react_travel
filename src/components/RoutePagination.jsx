import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import spotGrey from '../assets/img/spot-grey.svg';
import arrowRightPagination from '../assets/img/arrowRightPagination.svg';
import arrowLeftPagination from '../assets/img/arrowLeftPagination.svg';

export default function RoutePagination({ selectRoute, datas, itemsPerPage = 20, scrollup }) {
  function Items({ currentItems }) {
    return (
      <div className='mb-5'>
        {currentItems &&
          currentItems.map((item, index) => (
            <div
              key={encodeURIComponent(item.RouteName) + index}
              onClick={() => {
                selectRoute(item);
              }}
              className='route_card border border-second-229 rounded overflow-hidden bg-second-249 cursor-pointer p-3 mb-3'>
              <div className='flex justify-between items-center mb-2'>
                <h5 className='text-lg text-second-47 font-bold ellipsis-1'>{item.RouteName}</h5>
                <p className='text-lg text-info flex-shrink-0 flex-grow-0'>{(item.CyclingLength / 1000).toFixed(1)} 公里</p>
              </div>
              <div className='flex items-center text-second-100 text-sm mb-2'>
                <div className='flex flex-grow-0 flex-shrink-0 mr-1'>
                  <img src={spotGrey} alt='起迄' className='block flex-grow-0 flex-shrink-0 mr-1' />
                  <span>起：</span>
                </div>
                <span className='ellipsis-1'>{item.RoadSectionStart}</span>
              </div>
              <div className='flex items-center text-second-100 text-sm mb-2'>
                <div className='flex flex-grow-0 flex-shrink-0 mr-1'>
                  <img src={spotGrey} alt='起迄' className='block flex-grow-0 flex-shrink-0 mr-1' />
                  <span>迄：</span>
                </div>
                <span className='ellipsis-1'>{item.RoadSectionEnd}</span>
              </div>
            </div>
          ))}
      </div>
    );
  }
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
