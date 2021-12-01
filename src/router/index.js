import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MoviePage from '../views/MoviePage.vue';
import SearchPage from "../views/SearchPage";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/MoviePage.vue')
  // }
  {
    path: '/:imdbId',
    name: 'MoviePage',
    component: MoviePage
  },
  {
    path: '/search',
    name: 'SearchPage',
    component: SearchPage

  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
