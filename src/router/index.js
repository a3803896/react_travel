import Home from '../pages/Home';
import Scenic from '../pages/Scenic';
import Restaurant from '../pages/Restaurant';
import Activity from '../pages/Activity';
import ActivityInfo from '../pages/ActivityInfo';
import ScenicInfo from '../pages/ScenicInfo';
import RestaurantInfo from '../pages/RestaurantInfo';
const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/scenic',
    exact: false,
    component: Scenic,
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
  {
    path: '/scenicinfo',
    exact: false,
    component: ScenicInfo,
  },
  {
    path: '/restaurantinfo',
    exact: false,
    component: RestaurantInfo,
  },
];

export default routes;
