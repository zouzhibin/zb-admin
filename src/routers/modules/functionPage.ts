
/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout/index.vue";

const functionPageRouter = [{
    path: '/function-page',
    component: Layout,
    redirect: '/function-page/404',
    name: 'function-page',
    meta: {
        title: '功能页面',
        icon: 'ElementPlus'
    },
    children: [
        {
            path: 'tools',
            component: () => import('@/views/functionPage/tools/index.vue'),
            name: 'tools',
            meta: { title: '工具链集合', keepAlive: true , icon: 'MenuIcon'}
        },
        {
            path: '404',
            component: () => import('@/views/errorPages/404.vue'),
            name: 'function-404',
            meta: { title: '404 页面', keepAlive: true , icon: 'MenuIcon'}
        },
        {
            path: '403',
            component: () => import('@/views/errorPages/403.vue'),
            name: 'function-403',
            meta: { title: '403 页面', keepAlive: true , icon: 'MenuIcon'}
        },
        {
            path: 'fullscreen',
            component: () => import('@/views/functionPage/fullscreen/index.vue'),
            name: 'fullscreen',
            meta: { title: '元素 全屏', keepAlive: true , icon: 'MenuIcon'}
        },
        {
            path: 'information-list',
            component: () => import('@/views/functionPage/informationList/index.vue'),
            name: 'informationList',
            meta: { title: '信息列表', keepAlive: true , icon: 'MenuIcon'}
        },
    ]
}]

export default functionPageRouter
