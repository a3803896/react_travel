import React, { useState, useCallback, useRef, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import MapMenu from '../components/MapMenu';
import hamburger from '../assets/img/hamburger.svg';
import gpsOff from '../assets/img/gps-off.svg';
import gpsOn from '../assets/img/gps-on.svg';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};
const options = {
  disableDefaultUI: true,
};
const center = {
  lat: 25.0420261,
  lng: 121.5395055,
};

export default function Bike() {
  // data
  const mapRef = useRef();
  const [markers, setMarkers] = useState([]);
  const [isShow, setIsShow] = useState(false);
  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: 'AIzaSyDfyXzEmwduts3D4J5mKNPqV4BOoyrgbb0',
  // });
  // mounted
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  // methods
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);
  function changeCity(e) {
    console.log(e.value);
  }

  // template
  // if (loadError) return 'Error';
  // if (!isLoaded) return 'Loading...';
  return (
    <main className='flex-grow relative'>
      <MapMenu isShow={isShow} setIsShow={setIsShow} />
      <div className={`${isShow ? 'blackout' : ''} map-wrap relative`}>
        <div onClick={() => setIsShow(true)} className='absolute z-10 border border-primary-2 bg-white rounded-lg top-2 left-2 cursor-pointer shadow-deep p-1'>
          <img src={hamburger} alt='打開選單' className='w-8 h-8' />
        </div>
        <div className='absolute z-10 border border-primary-2 bg-white rounded-lg bottom-5 lg:bottom-auto lg:top-2 right-2 cursor-pointer shadow-deep p-1'>
          <img src={gpsOff} alt='打開GPS' className='w-8 h-8' />
          <img src={gpsOn} alt='關閉GPS' className='w-8 h-8 hidden' />
        </div>
        {/* <GoogleMap className='hidden' id='map' mapContainerStyle={mapContainerStyle} zoom={14} center={center} options={options} onLoad={onMapLoad}></GoogleMap> */}
      </div>
    </main>
  );
}
