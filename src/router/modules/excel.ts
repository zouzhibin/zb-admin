

/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout/index.vue";

const excelRouter = {
    path: '/excel',
    component: Layout,
    redirect: '/excel/export-excel',
    name: 'excel',
    meta: {
        title: 'Excel',
        icon: 'School'
    },
    children: [
        {
            path: 'export-excel',
            component: () => import('@/views/excel/export-excel.vue'),
            name: 'export-excel',
            meta: { title: '导出 Excel', icon: 'MenuIcon'}
        },
        {
            path: 'export-merge-header',
            component: () => import('@/views/excel/export-merge-header.vue'),
            name: 'export-merge-header',
            meta: { title: '导出 多级表头', icon: 'MenuIcon' }
        },
        {
            path: 'upload-excel',
            component: () => import('@/views/excel/upload-excel.vue'),
            name: 'upload-excel',
            meta: { title: '上传 Excel', icon: 'MenuIcon' }
        },
        {
            path: 'upload-style-excel',
            component: () => import('@/views/excel/export-style-excel.vue'),
            name: 'upload-style-excel',
            meta: { title: '自定义样式导出 Excel', icon: 'MenuIcon' }
        },
    ]
}

export default excelRouter
