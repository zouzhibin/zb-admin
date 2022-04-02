/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout/index.vue";

const othersRouter = {
    path: '/other',
    component: Layout,
    redirect: 'noRedirect',
    name: 'other',
    meta: {
        title: '其他',
        icon: 'management'
    },
    children: [
        {
            path: 'print',
            component: () => import('@/views/other/print.vue'),
            name: 'print',
            meta: { title: '打印', noCache: true  }
        },
        {
            path: 'cropper',
            component: () => import('@/views/other/cropper/index.vue'),
            name: 'cropper',
            meta: { title: '头像裁剪', noCache: true  }
        },
        {
            path: 'grid-sorter',
            component: () => import('@/views/other/grid-sorter.vue'),
            name: 'grid-sorter',
            meta: { title: '网格排序', noCache: true  }
        },
        {
            path: 'splitpane',
            component: () => import('@/views/other/splitpane.vue'),
            name: 'splitpane',
            meta: { title: 'splitpane', noCache: true  }
        },

    ]
}

export default othersRouter
