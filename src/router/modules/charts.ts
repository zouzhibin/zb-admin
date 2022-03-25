/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout/index.vue";

const chartsRouter = {
    path: '/charts',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Charts',
    meta: {
        title: '图表',
        icon: 'chart'
    },
    children: [
        {
            path: 'line',
            component: () => import('@/views/charts/line.vue'),
            name: 'line',
            meta: { title: '折现图', noCache: true }
        },
        {
            path: 'other',
            component: () => import('@/views/charts/index.vue'),
            name: 'charts-other',
            meta: { title: '各种图标', noCache: true }
        },
    ]
}

export default chartsRouter
