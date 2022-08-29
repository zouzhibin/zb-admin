
/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout/index.vue";

const tableRouter = {
    path: '/table',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Table',
    meta: {
        title: '超级表格',
        icon: 'School'
    },
    children: [
        {
            path: 'comprehensive',
            component: () => import('@/views/table/comprehensive.vue'),
            name: 'comprehensive',
            meta: { title: '综合表格', keepAlive: true , icon: 'MenuIcon'}
        },
        {
            path: 'inline-table',
            component: () => import('@/views/table/inline-edit-table.vue'),
            name: 'inline-table',
            meta: { title: '行内编辑', keepAlive: true  , icon: 'MenuIcon'}
        },
        {
            path: 'editableProTable',
            component: () => import('@/views/table/EditableProTable.vue'),
            name: 'edit-table',
            meta: { title: '可编辑表格', keepAlive: true  , icon: 'MenuIcon'}
        },
        // {
        //     path: 'multi-table',
        //     component: () => import('@/views/table/multi-table.vue'),
        //     name: 'multi-table',
        //     meta: { title: '多级表头', noCache: true }
        // },
    ]
}

export default tableRouter
