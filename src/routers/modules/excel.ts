

import Layout from "@/layout/index.vue";

const excelRouter = [{
    path: '/excel',
    component: Layout,
    redirect: '/excel/export-excel',
    name: 'excel',
    meta: {
        title: 'Excel&Zip',
        icon: 'School'
    },
    children: [
        {
            path: 'export-excel',
            component: () => import('@/views/excel/exportExcel/index.vue'),
            name: 'export-excel',
            meta: { title: '导出 Excel', icon: 'MenuIcon'}
        },
        {
            path: 'export-merge-header',
            component: () => import('@/views/excel/exportMergeHeader/index.vue'),
            name: 'export-merge-header',
            meta: { title: '导出 多级表头', icon: 'MenuIcon' }
        },
        {
            path: 'upload-style-excel',
            component: () => import('@/views/excel/exportStyleExcel/index.vue'),
            name: 'upload-style-excel',
            meta: { title: '自定义样式导出 Excel', icon: 'MenuIcon' }
        },
        {
            path: 'upload-excel',
            component: () => import('@/views/excel/uploadExcel/index.vue'),
            name: 'upload-excel',
            meta: { title: '上传 Excel', icon: 'MenuIcon' }
        },
        {
            path: 'zip',
            component: () => import('@/views/excel/zip/index.vue'),
            name: 'Zip',
            meta: { title: '导出 Zip', roles:['other'] ,icon: 'MenuIcon',}
        },
    ]
}]

export default excelRouter
