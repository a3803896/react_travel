import Home from '../pages/Home';
import ScenicSpot from '../pages/ScenicSpot';
import Restaurant from '../pages/Restaurant';
import Activity from '../pages/Activity';
import ActivityInfo from '../pages/ActivityInfo.jsx';
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
    path: '/activityinfo',
    exact: false,
    component: ActivityInfo,
  },
];

export default routes;
