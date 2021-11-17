import React from 'react';
import { useLocation } from 'react-router';
import { renderRoutes } from 'react-router-config';
import routes from './router';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  const path = useLocation().pathname;
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      {renderRoutes(routes)}
      {path === '/bike' ? null : <Footer />}
    </div>
  );
}
