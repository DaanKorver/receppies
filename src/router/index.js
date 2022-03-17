import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'
import Add from '@/views/Add.vue'
import Info from '@/views/Info.vue'
import Login from '@/view/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/index.html',
      component: Login,
      alias: '/'
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    }
  ]
})

export default router
