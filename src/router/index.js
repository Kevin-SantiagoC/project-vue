import { createRouter, createWebHashHistory } from 'vue-router'


import Comunas from '../views/Comunas';
import Municipios from '../views/Municipios';
import Departamentos from '../views/Departamentos';
import Paises from '../views/Paises';

import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/comunas',
    name: 'Comunas',
    component: Comunas
  },

  {
    path: '/municipios',
    name: 'Municipios',
    component: Municipios
  },

  {
    path: '/departamentos',
    name: 'Departamentos',
    component: Departamentos
  },
  
  {
    path: '/paises',
    name: 'Paises',
    component: Paises
  },


  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
