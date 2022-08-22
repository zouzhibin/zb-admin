import { createRouter, createWebHistory, RouteRecordRaw,createWebHashHistory,Router } from 'vue-router'
import Layout from "@/layout/index.vue";

// 扩展继承属性
interface extendRoute {
    hidden?:boolean
}

// 引入组件
import chartsRouter from './modules/charts'
import chatRouter from './modules/chat'
import componentsRouter from './modules/components'
import othersRouter from './modules/other'
import externalLink from './modules/externalLink'
import permissionRouter from './modules/permission'
import tableRouter from './modules/table'
import errorRouter from './modules/error'
import excelRouter from './modules/excel'
import nestedRouter from './modules/nested'
import systemRouter from './modules/system'

/**
 * path ==> 路由路径
 * name ==> 路由名称
 * component ==> 路由组件
 * redirect ==> 路由重定向
 * alwaysShow ==> 如果设置为true，将始终显示根菜单，无论其子路由长度如何
 * hidden ==> 如果“hidden:true”不会显示在侧边栏中（默认值为false）
 * keepAlive ==> 设为true 缓存
 * meta ==> 路由元信息
 * meta.title ==> 路由标题
 * meta.icon ==> 菜单icon
 */

export const constantRoutes: Array<RouteRecordRaw&extendRoute> = [
    {
        path: "/",
        redirect: { name: "login" }
    },
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

const clipboardTable = {
    path: '/clipboard',
    component: Layout,
    redirect: 'noRedirect',
    name: 'clipboard',
    meta: {
        title: 'clipboard',
        icon: 'document-copy',
        roles:['other']
    },
    children: [
        {
            path: 'index',
            component: () => import('@/views/clipboard/index.vue'),
            name: 'map',
            meta: { title: '剪贴板',  roles:['other'] ,icon: 'document-copy',}
        },

    ]
}
// //
const zipRoutes = {
    path: '/zip',
    component: Layout,
    isShow:true,
    redirect: 'noRedirect',
    name: 'zip',
    alwaysShow:true,
    meta: {
        title: 'Zip',
        icon: 'document-copy',
        roles:['other']
    },
    children: [
        {
            path: 'download',
            component: () => import('@/views/zip/download.vue'),
            name: 'download',
            meta: { title: 'Zip', roles:['other'] ,icon: 'document-copy',}
        },

    ]
}

// // 异步组件
export const asyncRoutes = [
    tableRouter,
    chartsRouter,
    chatRouter,
    componentsRouter,
    othersRouter,
    nestedRouter,
    excelRouter,
    zipRoutes,
    errorRouter,
    externalLink,
    clipboardTable,
    systemRouter,
    permissionRouter,

    {
        path: '/:pathMatch(.*)',
        redirect: '/error/404'
    }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL), // history
  history: createWebHashHistory(), // hash
  routes:constantRoutes
})

export default router
