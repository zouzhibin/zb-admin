/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout/index.vue";

const othersRouter = {
    path: '/other',
    component: Layout,
    redirect: 'noRedirect',
    name: 'other',
    meta: {
        title: '扩展组件',
        icon: 'management'
    },
    children: [
        {
            path: 'editor',
            component: () => import('@/views/other/editor.vue'),
            name: 'editor',
            meta: { title: '富文本编辑器',  roles:['other'] }
        },
        {
            path: 'mark-down',
            component: () => import('@/views/other/mark-down.vue'),
            name: 'mark-down',
            meta: { title: 'markDown',  roles:['other']}
        },
        {
            path: 'print',
            component: () => import('@/views/other/print.vue'),
            name: 'print',
            meta: { title: '打印',  }
        },
        {
            path: 'cropper',
            component: () => import('@/views/other/cropper/index.vue'),
            name: 'cropper',
            meta: { title: '头像裁剪'  }
        },
        {
            path: 'grid-sorter',
            component: () => import('@/views/other/grid-sorter.vue'),
            name: 'grid-sorter',
            meta: { title: '卡片拖拽',  }
        },
        {
            path: 'splitpane',
            component: () => import('@/views/other/splitpane.vue'),
            name: 'splitpane',
            meta: { title: '分割模块',  }
        },
        {
            path: 'qrcode',
            component: () => import('@/views/other/qrcode.vue'),
            name: 'qrcode',
            meta: { title: '生成二维码',   }
        },
        {
            path: 'right-menu',
            component: () => import('@/views/other/right-menu.vue'),
            name: 'right-menu',
            meta: { title: '右键菜单',  }
        },
        {
            path: 'count',
            component: () => import('@/views/other/count.vue'),
            name: 'count',
            meta: { title: '数字自增长',   }
        },
    ]
}

export default othersRouter
