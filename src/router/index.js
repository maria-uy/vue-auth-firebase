import { createRouter, createWebHashHistory } from 'vue-router'

import authRouter from '../modules/auth/router'

const routes = [
  {
    path: '/',
    redirect: '/auth'
  },
  {
    path: '/auth',
    ...authRouter,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
