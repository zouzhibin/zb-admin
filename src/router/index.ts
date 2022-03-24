import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from "@/layout/index.vue";



import chartsRouter from './modules/charts'
import chatRouter from './modules/chat'


export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    // hidden: true
  },
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      },
    ]
  },

]


export const asyncRoutes = [
  chartsRouter,
  chatRouter
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:constantRoutes
})

export default router
