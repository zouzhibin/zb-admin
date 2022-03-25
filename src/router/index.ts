import { createRouter, createWebHistory, RouteRecordRaw,createWebHashHistory } from 'vue-router'
import Layout from "@/layout/index.vue";

// 引入组件
import chartsRouter from './modules/charts'
import chatRouter from './modules/chat'
import componentsRouter from './modules/components'
import othersRouter from './modules/other'

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

// 异步组件
export const asyncRoutes = [
  chartsRouter,
  chatRouter,
  componentsRouter,
  othersRouter
]


const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL), // history
  history: createWebHashHistory(), // hash
  routes:constantRoutes
})

export default router
