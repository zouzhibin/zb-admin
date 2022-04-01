/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout/index.vue";

const chartsRouter = {
    path: '/charts',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Charts',
    meta: {
        title: '图表',
        icon: 'trend-charts',
        roles:['other']
    },
    children: [
        {
            path: 'line',
            component: () => import('@/views/charts/line.vue'),
            name: 'line',
            meta: { title: '折现图', noCache: true , roles:['other'] }
        },
        {
            path: 'simple',
            component: () => import('@/views/charts/simple.vue'),
            name: 'charts-simple',
            meta: { title: '简单图表', noCache: true , roles:['other'] }
        },
        {
            path: 'complex',
            component: () => import('@/views/charts/complex.vue'),
            name: 'charts-complex',
            meta: { title: '复杂图表', noCache: true , roles:['other'] }
        },
    ]
}

export default chartsRouter
