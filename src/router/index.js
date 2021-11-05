import Home from '@/pages/Home';
import Search from '@/pages/Search';
const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/search',
    exact: false,
    component: Search,
  },
];

export default routes;
