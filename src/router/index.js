import Home from '@/pages/Home';
import Search from '@/pages/Search';
import ScenicSpot from '@/pages/ScenicSpot';
import Restaurant from '@/pages/Restaurant';
import Activity from '@/pages/Activity';
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
    path: '/scenic',
    exact: false,
    component: ScenicSpot,
  },
  {
    path: '/restaurant',
    exact: false,
    component: Restaurant,
  },
  {
    path: '/activity',
    exact: false,
    component: Activity,
  },
];

export default routes;
