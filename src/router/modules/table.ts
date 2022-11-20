
/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout/index.vue";

const tableRouter = [{
    path: '/table',
    component: Layout,
    redirect: '/table/comprehensive',
    name: 'table',
    meta: {
        title: '超级表格',
        icon: 'School'
    },
    children: [
        {
            path: 'comprehensive',
            component: () => import('@/views/table/ComprehensiveTable/index.vue'),
            name: 'comprehensive',
            meta: { title: '综合表格', keepAlive: true , icon: 'MenuIcon'}
        },

    ]
}]

export default tableRouter
