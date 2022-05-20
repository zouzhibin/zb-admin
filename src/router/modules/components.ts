/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout/index.vue";

const componentsRouter = {
    path: '/components',
    component: Layout,
    redirect: 'noRedirect',
    name: 'components',
    meta: {
        title: '组件',
        icon: 'Histogram',
        roles:['other']
    },
    children: [
        {
            path: 'editor',
            component: () => import('@/views/components-demo/editor.vue'),
            name: 'editor',
            meta: { title: '富文本编辑器', noCache: true, roles:['other'] }
        },
        {
            path: 'mark-down',
            component: () => import('@/views/components-demo/mark-down.vue'),
            name: 'mark-down',
            meta: { title: 'markDown', noCache: true , roles:['other']}
        },
        {
            path: 'form',
            component: () => import('@/views/components-demo/form.vue'),
            name: 'form',
            meta: { title: '表单', noCache: true  , roles:['other']}
        },
        {
            path: 'scroll',
            component: () => import('@/views/components-demo/scroll.vue'),
            name: 'scroll',
            meta: { title: '无限滚动', noCache: true  }
        },
        {
            path: 'button',
            component: () => import('@/views/components-demo/button.vue'),
            name: 'button',
            meta: { title: '按钮', noCache: true  }
        },
        {
            path: 'upload',
            component: () => import('@/views/components-demo/upload.vue'),
            name: 'upload',
            meta: { title: '上传图片', noCache: true  }
        },
        {
            path: 'count',
            component: () => import('@/views/components-demo/count.vue'),
            name: 'count',
            meta: { title: '数字自增长', noCache: true  }
        },
    ]
}

export default componentsRouter
