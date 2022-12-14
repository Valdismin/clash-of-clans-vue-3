import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '@/views/AboutView'
import HomeView from '@/views/HomeView'
import HeroView from '@/views/HeroView'
import NotFound from '@/views/NotFound'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/:hero',
    name: 'hero',
    component: HeroView
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
  {
    path: '/:CatchAll(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
