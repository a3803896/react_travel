import Home from '../pages/Home';
import Scenic from '../pages/Scenic';
import Restaurant from '../pages/Restaurant';
import Activity from '../pages/Activity';
import ActivityInfo from '../pages/ActivityInfo';
import ScenicInfo from '../pages/ScenicInfo';
import RestaurantInfo from '../pages/RestaurantInfo';
import Bike from '../pages/Bike';
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
    path: '/activityinfo/:id',
    exact: false,
    component: ActivityInfo,
  },
  {
    path: '/scenicinfo/:id',
    exact: false,
    component: ScenicInfo,
  },
  {
    path: '/restaurantinfo/:id',
    exact: false,
    component: RestaurantInfo,
  },
  {
    path: '/bike',
    exact: false,
    component: Bike,
  },
];

export default routes;
