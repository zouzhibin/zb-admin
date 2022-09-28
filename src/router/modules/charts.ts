/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout/index.vue";

const chartsRouter = {
    path: '/charts',
    component: Layout,
    redirect: '/charts/migration',
    name: 'Charts',
    meta: {
        title: '可视化图表',
        icon: 'trend-charts',
        roles:['other']
    },
    children: [
        {
            path: 'migration',
            component: () => import('@/views/charts/migration.vue'),
            name: 'migration',
            meta: { title: '迁徙图',  roles:['other'] , icon: 'MenuIcon' }
        },
        {
            path: 'simple',
            component: () => import('@/views/charts/simple.vue'),
            name: 'charts-simple',
            meta: { title: '简单图表', roles:['other'] , icon: 'MenuIcon'}
        },
        {
            path: 'complex',
            component: () => import('@/views/charts/complex.vue'),
            name: 'charts-complex',
            meta: { title: '复杂图表', roles:['other'] , icon: 'MenuIcon'}
        },
        {
          path: 'animation',
          component: () => import('@/views/charts/animation.vue'),
          name: 'charts-animation',
          meta: { title: '动画', roles:['other'],icon: 'MenuIcon' }
        },
    ]
}

export default chartsRouter
