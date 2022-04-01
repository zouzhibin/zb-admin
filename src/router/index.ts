import { createRouter, createWebHistory, RouteRecordRaw,createWebHashHistory } from 'vue-router'
import Layout from "@/layout/index.vue";

// 引入组件
import chartsRouter from './modules/charts'
import chatRouter from './modules/chat'
import componentsRouter from './modules/components'
import othersRouter from './modules/other'
import externalLink from './modules/externalLink'
import permissionRouter from './modules/permission'


interface extendRoute {
  hidden?:boolean
}

export const constantRoutes: Array<RouteRecordRaw&extendRoute> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    hidden: true,
    meta: { title: '登录',}
  },
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'home',
        meta: { title: '首页', icon: 'film', affix: true ,role:['other']}
      },
    ]
  },

]

// 异步组件
export const asyncRoutes = [
  chartsRouter,
  chatRouter,
  componentsRouter,
  othersRouter,
  externalLink,
  permissionRouter
]


const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL), // history
  history: createWebHashHistory(), // hash
  routes:constantRoutes
})

export default router
