import React, { useState, useCallback, useRef, useEffect } from 'react';
import { GoogleMap, useLoadScript, Polyline, Marker, InfoWindow } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Wkt from 'wicket';
import getAuthorizationHeader from '../plugins/getAuthorizationHeader';
import MapMenu from '../components/MapMenu';
import gpsOff from '../assets/img/gps-off.svg';
import gpsOn from '../assets/img/gps-on.svg';
import mapPerson from '../assets/img/map-person.svg';
import bikeIcon from '../assets/img/bike.svg';
import bikeOnIcon from '../assets/img/bike-on.svg';
import spotGrey from '../assets/img/spot-grey.svg';
import nearbyScenic from '../assets/img/nearby-scene30.svg';
import nearbyEvent from '../assets/img/nearby-event30.svg';
import nearbyFood from '../assets/img/nearby-food30.svg';

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
  const [stations, setStations] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [oneRoute, setOneRoute] = useState({});
  const [gpsNow, setGpsNow] = useState({});
  const [isSearchBike, setIsSearchBike] = useState(false);
  const [path, setPath] = useState([]);
  const [selectedStation, setSelectedStaions] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDfyXzEmwduts3D4J5mKNPqV4BOoyrgbb0',
  });

  // mounted
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  // computed
  useEffect(() => {
    if (!isSearchBike) return;
    searchNearbyBike();
  }, [isSearchBike]);
  // methods
  const panTo = useCallback(({ lat, lng }, zoom) => {
    mapRef.current.panTo({ lat, lng });
    if (zoom) mapRef.current.setZoom(zoom);
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
    setTimeout(() => searchNearbyBike(), 0);
  }
  function getGps() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setGpsNow({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        panTo(
          {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          18
        );
        setTimeout(() => searchNearbyBike(), 0);
      },
      () => null
    );
  }
  function getCenterLating() {
    return new Promise((resolve, reject) => {
      const latingObj = mapRef.current.getCenter();
      if (latingObj) {
        resolve({ lat: latingObj.lat(), lng: latingObj.lng() });
      } else {
        reject();
      }
    });
  }
  async function searchNearbyBike() {
    if (!isSearchBike) return;
    let { lat, lng } = await getCenterLating();
    const { data: stations } = await axios.get(
      `https://ptx.transportdata.tw/MOTC/v2/Bike/Station/NearBy?$spatialFilter=nearby(${lat}%2C%20${lng}%2C%20800)&$format=JSON`,
      { headers: getAuthorizationHeader() }
    );
    const { data: availability } = await axios.get(
      `https://ptx.transportdata.tw/MOTC/v2/Bike/Availability/NearBy?$spatialFilter=nearby(${lat}%2C%20${lng}%2C%20800)&$format=JSON`,
      { headers: getAuthorizationHeader() }
    );
    const targetArr = stations.map((item) => {
      return {
        ...item,
        availability: availability.find((station) => station.StationUID === item.StationUID) || {},
      };
    });
    setStations(targetArr);
  }
  function toggleBikeSearch() {
    if (isSearchBike) {
      setIsSearchBike(false);
      setStations([]);
    } else {
      setIsSearchBike(true);
    }
  }
  function selectStation(data) {
    panTo({ lat: data.StationPosition.PositionLat, lng: data.StationPosition.PositionLon });
    setSelectedStaions(data);
    setTimeout(() => searchNearbyBike(), 0);
    console.log(data);
  }
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
        <div onClick={getGps} className='absolute z-10 border border-primary-2 bg-white rounded-lg top-3 right-2 cursor-pointer shadow-deep select-none p-1'>
          {gpsNow.lat ? <img src={gpsOn} alt='關閉GPS' className='w-8 h-8' /> : <img src={gpsOff} alt='打開GPS' className='w-8 h-8' />}
        </div>
        <div
          onClick={toggleBikeSearch}
          className='absolute z-10 border border-primary-2 bg-white rounded-lg top-3 right-16 cursor-pointer shadow-deep select-none p-1'>
          {isSearchBike ? <img src={bikeOnIcon} alt='打開GPS' className='w-8 h-8' /> : <img src={bikeIcon} alt='打開GPS' className='w-8 h-8' />}
        </div>
        <GoogleMap
          onDragEnd={() => searchNearbyBike()}
          className='hidden'
          id='map'
          mapContainerStyle={mapContainerStyle}
          zoom={14}
          center={center}
          options={options}
          onLoad={onMapLoad}>
          {path.map((item, index) => (
            <Polyline key={index} path={item} options={lineOptions} />
          ))}
          {gpsNow.lat && (
            <Marker
              key={`${gpsNow.lat}-${gpsNow.lng}`}
              position={{ lat: gpsNow.lat, lng: gpsNow.lng }}
              icon={{
                url: mapPerson,
                scaledSize: new window.google.maps.Size(70, 70),
              }}
            />
          )}
          {stations.map((item) => {
            return (
              <Marker
                onClick={() => {
                  selectStation(item);
                }}
                key={item.StationUID}
                position={{ lat: item.StationPosition.PositionLat, lng: item.StationPosition.PositionLon }}
              />
            );
          })}
          {selectedStation && (
            <InfoWindow
              options={{ pixelOffset: new window.google.maps.Size(0, -30) }}
              position={{ lat: selectedStation.StationPosition.PositionLat, lng: selectedStation.StationPosition.PositionLon }}
              onCloseClick={() => {
                setSelectedStaions(null);
              }}>
              <div className='w-full'>
                {selectedStation.ServiceType ? <p className='text-second-100 mb-3/4 text-xs'>YouBike{selectedStation.ServiceType}.0</p> : null}
                <h2 className='text-second-47 font-bold text-base lg:text-lg ellipsis-2 mb-1'>{selectedStation.StationName.Zh_tw}</h2>
                <div className='flex mb-2'>
                  <p className='w-1/2 lg:text-base flex flex-col justify-center items-center font-bold text-second-47 py-1 mr-1'>
                    可租<span className='text-second-47'>{selectedStation.availability.AvailableRentBikes}</span>
                  </p>
                  <p className='w-1/2 lg:text-base flex flex-col justify-center items-center font-bold text-second-47 py-1 ml-1'>
                    可還<span className='text-second-47'>{selectedStation.availability.AvailableReturnBikes}</span>
                  </p>
                </div>
                <div className='grid grid-cols-3 gap-x-2 mb-2'>
                  <Link
                    target='_blank'
                    rel='noopener noreferrer'
                    to={`/scenic?lat=${selectedStation.StationPosition.PositionLat}&long=${selectedStation.StationPosition.PositionLon}`}
                    className='flex flex-col items-center justify-center border border-second-229 rounded-md p-2 pb-1'>
                    <img src={nearbyScenic} alt='' className='mb-1/2' />
                    <p className='font-bold leading-7 text-primary-1'>附近景點</p>
                  </Link>
                  <Link
                    target='_blank'
                    rel='noopener noreferrer'
                    to={`/activity?lat=${selectedStation.StationPosition.PositionLat}&long=${selectedStation.StationPosition.PositionLon}`}
                    className='flex flex-col items-center justify-center border border-second-229 rounded-md p-2 pb-1'>
                    <img src={nearbyEvent} alt='' className='mb-1/2' />
                    <p className='font-bold leading-7 text-primary-1'>附近活動</p>
                  </Link>
                  <Link
                    target='_blank'
                    rel='noopener noreferrer'
                    to={`/restaurant?lat=${selectedStation.StationPosition.PositionLat}&long=${selectedStation.StationPosition.PositionLon}`}
                    className='flex flex-col items-center justify-center border border-second-229 rounded-md p-2 pb-1'>
                    <img src={nearbyFood} alt='' className='mb-1/2' />
                    <p className='font-bold leading-7 text-primary-1'>附近美食</p>
                  </Link>
                </div>
                <div className='flex flex-grow-0 flex-shrink-0 mb-2'>
                  <img src={spotGrey} alt='地址' className='block flex-grow-0 flex-shrink-0 mr-1' />
                  <span className='text-second-100 text-xs lg:text-sm'>{selectedStation.StationAddress.Zh_tw}</span>
                </div>
                <p className='text-xs text-second-100'>更新時間:{new Date(selectedStation.availability.UpdateTime).toLocaleString()}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </main>
  );
}
