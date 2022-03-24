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
            path: 'keyboard',
            component: () => import('@/views/charts/keyboard.vue'),
            name: 'KeyboardChart',
            meta: { title: 'Keyboard Chart', noCache: true }
        },
        {
            path: 'line',
            component: () => import('@/views/charts/line.vue'),
            name: 'KeyboardChart',
            meta: { title: '折现图', noCache: true }
        },
    ]
}

export default chartsRouter
