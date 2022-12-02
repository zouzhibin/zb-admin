/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout/index.vue";

const echartsRouter = [{
    path: '/echarts',
    component: Layout,
    redirect: '/echarts/migration',
    name: 'echarts',
    meta: {
        title: 'Echarts',
        icon: 'trend-charts',
        roles:['other']
    },
    children: [
        {
            path: 'migration',
            component: () => import('@/views/echarts/migrationMap/index.vue'),
            name: 'migration',
            meta: { title: '迁徙图',  roles:['other'] , icon: 'MenuIcon' }
        },

        {
            path: 'bar',
            component: () => import('@/views/echarts/barEcharts/index.vue'),
            name: 'bar',
            meta: { title: '柱状图', roles:['other'] , icon: 'MenuIcon'}
        },
        {
            path: 'graph',
            component: () => import('@/views/echarts/graphEcharts/index.vue'),
            name: 'graph',
            meta: { title: '雷达图', roles:['other'] , icon: 'MenuIcon'}
        },

        {
            path: 'pie',
            component: () => import('@/views/echarts/pieEcharts/index.vue'),
            name: 'pie',
            meta: { title: '饼图', roles:['other'] , icon: 'MenuIcon'}
        },
        {
            path: 'simple',
            component: () => import('@/views/echarts/simple/index.vue'),
            name: 'echarts-simple',
            meta: { title: '简单图表', roles:['other'] , icon: 'MenuIcon'}
        },

    ]
}]

export default echartsRouter
