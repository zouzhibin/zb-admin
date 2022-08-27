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
            meta: { title: '按钮', icon: 'MenuIcon'  }
        },


        {
            path: 'link',
            component: () => import('@/views/components-demo/link.vue'),
            name: 'link',
            meta: { title: '文字链接',   roles:['other'], icon: 'MenuIcon'}
        },
        {
            path: 'radio',
            component: () => import('@/views/components-demo/radio.vue'),
            name: 'radio',
            meta: { title: '单选框',  roles:['other'], icon: 'MenuIcon'}
        },
        {
            path: 'checkbox',
            component: () => import('@/views/components-demo/checkbox.vue'),
            name: 'checkbox',
            meta: { title: '多选框',  roles:['other'], icon: 'MenuIcon'}
        },
        {
            path: 'input',
            component: () => import('@/views/components-demo/input.vue'),
            name: 'components-input',
            meta: { title: '输入框',  roles:['other'], icon: 'MenuIcon'}
        },
        {
            path: 'components-inputnumber',
            component: () => import('@/views/components-demo/inputnumber.vue'),
            name: 'components-inputnumber',
            meta: { title: '数字输入框',  roles:['other'], icon: 'MenuIcon'}
        },
        {
            path: 'timepicker',
            component: () => import('@/views/components-demo/timepicker.vue'),
            name: 'timepicker',
            meta: { title: '时间选择器',  roles:['other'], icon: 'MenuIcon'}
        },
        {
            path: 'datetimepicker',
            component: () => import('@/views/components-demo/datetimepicker.vue'),
            name: 'datetimepicker',
            meta: { title: '日期时间选择器',  roles:['other'], icon: 'MenuIcon'}
        },
        {
            path: 'scroll',
            component: () => import('@/views/components-demo/scroll.vue'),
            name: 'scroll',
            meta: { title: '无限滚动', icon: 'MenuIcon' }
        },



    ]
}

export default componentsRouter
