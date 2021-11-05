import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from '@/router';

export default function App() {
  return (
    <div className=''>
      <header></header>
      {renderRoutes(routes)}
    </div>
  );
}
