import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '@/views/AboutView'
import HomeView from '@/views/HomeView'
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
    path: '/:PathMatch(.*)*',
    name: '404',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
