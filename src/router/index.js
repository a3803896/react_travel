import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Info from '@/pages/Info';
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
  {
    path: '/info',
    exact: false,
    component: Info,
  },
];

export default routes;
