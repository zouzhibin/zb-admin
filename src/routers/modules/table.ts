
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
        {
            path: 'inline-table',
            component: () => import('@/views/table/InlineEditTable/index.vue'),
            name: 'inline-table',
            meta: { title: '行内编辑', keepAlive: true  , icon: 'MenuIcon'}
        },
        {
            path: 'editableProTable',
            component: () => import('@/views/table/EditableProTable/index.vue'),
            name: 'edit-table',
            meta: { title: '可编辑表格', keepAlive: true  , icon: 'MenuIcon'}
        },
        // {
        //     path: 'virtualTable',
        //     component: () => import('@/views/table/VirtualTable.vue'),
        //     name: 'virtualTable',
        //     meta: { title: '虚拟表格', keepAlive: true  , icon: 'MenuIcon'}
        // },
    ]
}]

export default tableRouter
