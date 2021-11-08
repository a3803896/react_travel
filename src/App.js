import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from '@/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className=''>
      <Header />
      {renderRoutes(routes)}
      <Footer />
    </div>
  );
}
