/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout/index.vue";

const permissionRouter = {
    path: '/permission',
    component: Layout,
    redirect: 'noRedirect',
    name: 'permission',
    meta: {
        title: '权限测试页',
        icon: 'trend-charts', roles:['other']
    },
    children: [
        {
            path: 'page',
            component: () => import('@/views/permission/page.vue'),
            name: 'page',
            meta: { title: '页面权限', noCache: true,icon: 'trend-charts', roles:['other']  }
        },
    ]
}

export default permissionRouter
