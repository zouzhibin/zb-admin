

/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout/index.vue";

const errorRouter = {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'errorPages',
    meta: {
        title: '错误页面',
        icon: 'School'
    },
    children: [
        {
            path: '404',
            component: () => import('@/views/error/404.vue'),
            name: '404',
            meta: { title: '404', icon: 'MenuIcon' }
        },
        {
            path: '401',
            component: () => import('@/views/error/401.vue'),
            name: '401',
            meta: { title: '401', icon: 'MenuIcon'}
        },
    ]
}

export default errorRouter
