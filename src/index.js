import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
// import { store } from '@/redux/store';
// import { Provider } from 'react-redux';
import 'swiper/swiper-bundle.min.css';
import '@/assets/style/all.scss';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
