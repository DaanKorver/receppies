import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from './../supabase'

import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'
import Add from '@/views/Add.vue'
import Info from '@/views/Info.vue'

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
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/add',
      name: 'add',
      component: Add,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/info',
      name: 'info',
      component: Info,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // get current user info
  const currentUser = supabase.auth.user()
  const requiresAuth = to.matched.some
  (record => record.meta.requiresAuth)

  if(requiresAuth && !currentUser) next('/')
  else if(!requiresAuth && currentUser) next('/home')
  else next();
})

export default router
