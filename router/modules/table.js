
/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout/index.vue";

const tableRouter = {
    path: '/table',
    component: Layout,
    redirect: 'noRedirect',
    name: 'table',
    meta: {
        title: '表格',
        icon: 's-data'
    },
    children: [
        {
            path: 'comprehensive',
            component: () => import('@/views/table/comprehensive.vue'),
            name: 'comprehensive',
            meta: { title: '综合表格', noCache: true }
        },
        {
            path: 'inline-table',
            component: () => import('@/views/table/inline-edit-table.vue'),
            name: 'inline-table',
            meta: { title: '行内编辑', noCache: true  }
        },
        {
            path: 'edit-table',
            component: () => import('@/views/table/edit.vue'),
            name: 'edit-table',
            meta: { title: '可编辑表格', noCache: true  }
        },
    ]
}

export default tableRouter
