import Home from '../pages/Home';
import ScenicSpot from '../pages/ScenicSpot';
import Restaurant from '../pages/Restaurant';
import Activity from '../pages/Activity';
import Info from '../pages/Info';
const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
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
  {
    path: '/info',
    exact: false,
    component: Info,
  },
];

export default routes;
