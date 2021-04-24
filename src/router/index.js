import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/citydetail",
    name: "/CityDetail",
    component: () =>
      import(/* webpackChunkName: "CityDetail" */ "@/views/CityDetail.vue"),
  },
  {
    path: "/locations",
    name: "/Locations",
    component: () =>
      import(/* webpackChunkName: "Locations" */ "@/views/Locations.vue"),
  },
  {
    path: "/searchcity",
    name: "/SearchCity",
    component: () =>
      import(/* webpackChunkName: "Search" */ "@/views/SearchCity.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
