/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout/index.vue";

const componentsRouter = {
    path: '/components',
    component: Layout,
    redirect: 'noRedirect',
    name: 'components',
    meta: {
        title: '基础组件',
        icon: 'Histogram',
        roles:['other']
    },
    children: [
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
            path: 'form',
            component: () => import('@/views/components-demo/form.vue'),
            name: 'form',
            meta: { title: '表单', noCache: true  , roles:['other']}
        },
        {
            path: 'link',
            component: () => import('@/views/components-demo/link.vue'),
            name: 'link',
            meta: { title: '文字链接', noCache: true  , roles:['other']}
        },
        {
            path: 'radio',
            component: () => import('@/views/components-demo/radio.vue'),
            name: 'radio',
            meta: { title: '单选框', noCache: true  , roles:['other']}
        },
        {
            path: 'checkbox',
            component: () => import('@/views/components-demo/checkbox.vue'),
            name: 'checkbox',
            meta: { title: '多选框', noCache: true  , roles:['other']}
        },
        {
            path: 'input',
            component: () => import('@/views/components-demo/input.vue'),
            name: 'input',
            meta: { title: '输入框', noCache: true  , roles:['other']}
        },
        {
            path: 'inputnumber',
            component: () => import('@/views/components-demo/inputnumber.vue'),
            name: 'inputnumber',
            meta: { title: '数字输入框', noCache: true  , roles:['other']}
        },
        {
            path: 'timepicker',
            component: () => import('@/views/components-demo/timepicker.vue'),
            name: 'timepicker',
            meta: { title: '时间选择器', noCache: true  , roles:['other']}
        },
        {
            path: 'datetimepicker',
            component: () => import('@/views/components-demo/datetimepicker.vue'),
            name: 'datetimepicker',
            meta: { title: '日期时间选择器', noCache: true  , roles:['other']}
        },
        {
            path: 'scroll',
            component: () => import('@/views/components-demo/scroll.vue'),
            name: 'scroll',
            meta: { title: '无限滚动', noCache: true  }
        },



    ]
}

export default componentsRouter
