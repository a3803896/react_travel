import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from '@/router';
import Header from './components/Header';

export default function App() {
  return (
    <div className=''>
      <Header />
      {renderRoutes(routes)}
    </div>
  );
}
