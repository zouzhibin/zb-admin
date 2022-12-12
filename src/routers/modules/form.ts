
/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout/index.vue";

const formRouter = [{
    path: '/form',
    component: Layout,
    redirect: '/form/validateForm',
    name: 'form',
    alwaysShow:true,
    meta: {
        title: '超级表单',
        icon: 'Grape'
    },
    children: [
        {
            path: 'validateForm',
            component: () => import('@/views/form/validateForm/index.vue'),
            name: 'validateForm',
            meta: { title: '校验 Form', keepAlive: true , icon: 'MenuIcon'}
        },
        {
            path: 'advancedForm',
            component: () => import('@/views/form/advancedForm/index.vue'),
            name: 'advancedForm',
            meta: { title: '收缩 Form',  icon: 'MenuIcon'}
        },
        {
            path: 'appendForm',
            component: () => import('@/views/form/appendForm/index.vue'),
            name: 'appendForm',
            meta: { title: '增删 Form', keepAlive: true , icon: 'MenuIcon'}
        },
        {
            path: 'moreForm',
            component: () => import('@/views/form/moreForm/index.vue'),
            name: 'moreForm',
            meta: { title: '多表单验证', keepAlive: true , icon: 'MenuIcon'}
        },
    ]
}]

export default formRouter
