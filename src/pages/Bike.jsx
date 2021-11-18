import React, { useState, useCallback, useRef, useEffect } from 'react';
import { GoogleMap, useLoadScript, Polyline, Marker } from '@react-google-maps/api';
import Wkt from 'wicket';

import MapMenu from '../components/MapMenu';
import gpsOff from '../assets/img/gps-off.svg';
import gpsOn from '../assets/img/gps-on.svg';
import startPin from '../assets/img/startPin.svg';
import endPin from '../assets/img/endPin.svg';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};
const options = {
  disableDefaultUI: true,
  streetViewControl: true,
};
const center = {
  lat: 25.0420261,
  lng: 121.5395055,
};

const lineOptions = {
  strokeColor: 'rgba(255, 114, 94, 1)',
  strokeOpacity: 1,
  strokeWeight: 8,
  fillColor: 'rgba(255, 114, 94, 1)',
  fillOpacity: 1,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1,
};

export default function Bike() {
  // data
  const mapRef = useRef();
  const [markers, setMarkers] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [oneRoute, setOneRoute] = useState({});
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDfyXzEmwduts3D4J5mKNPqV4BOoyrgbb0',
  });

  const [path, setPath] = useState([]);

  // mounted
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  // methods
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);
  function getRouteData(data) {
    // 記錄路線資料
    setOneRoute(data);
    // 格式化
    const wkt = new Wkt.Wkt();
    wkt.read(data.Geometry);
    const tempArr = wkt.toJson().coordinates;
    const targetPath = tempArr.map((arr) => {
      return arr.map((item) => ({ lat: item[1], lng: item[0] }));
    });
    // 紀錄路線經緯度
    setPath(targetPath);
    // 移動到路線中心點
    var bounds = new window.google.maps.LatLngBounds();
    targetPath.forEach((arr) => {
      arr.forEach((item) => {
        bounds.extend(new window.google.maps.LatLng(item.lat, item.lng));
      });
    });
    mapRef.current.fitBounds(bounds);
  }
  function getGps() {}

  // template
  if (loadError) return 'Error';
  if (!isLoaded) return 'Loading...';
  return (
    <main className='flex-grow relative'>
      <MapMenu isShow={isShow} setIsShow={setIsShow} getRouteData={getRouteData} />
      <div className={`${isShow ? 'blackout' : ''} map-wrap relative`}>
        <div onClick={() => setIsShow(true)} className='map_show absolute z-30 transform -translate-y-1/2 top-1/2 cursor-pointer select-none pr-3'>
          <p className='w-6 h-20 bg-primary-1 text-white text-sm flex items-center justify-center pl-1'>選單</p>
        </div>
        <div onClick={getGps} className='absolute z-10 border border-primary-2 bg-white rounded-lg top-3 right-2 cursor-pointer shadow-deep p-1'>
          <img src={gpsOff} alt='打開GPS' className='w-8 h-8' />
          <img src={gpsOn} alt='關閉GPS' className='w-8 h-8 hidden' />
        </div>
        <GoogleMap className='hidden' id='map' mapContainerStyle={mapContainerStyle} zoom={14} center={center} options={options} onLoad={onMapLoad}>
          {path.map((item) => (
            <Polyline path={item} options={lineOptions} />
          ))}
        </GoogleMap>
      </div>
    </main>
  );
}
