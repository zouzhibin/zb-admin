

import Layout from "@/layout/index.vue";

const externalLink = [{
    path: '/external-link',
    component: Layout,
    redirect: 'noRedirect',
    name: 'external-link',
    meta: {
        title: '外部链接',
        icon: 'link'
    },
    children: [
        {
            path: 'wechat',
            name: 'wechat',
            component: () => import('@/views/externalLinks/wechat/index.vue'),
            meta: { title: '加微信群',  icon: 'MenuIcon' }
        },
        {
            path: 'https://github.com/zouzhibin/vue-admin-perfect',
            name: 'github',
            meta: { title: 'Github 地址',  icon: 'MenuIcon' }
        },
        {
            path: 'https://gitee.com/yuanzbz/vue-admin-perfect?_from=gitee_search',
            name: 'github',
            meta: { title: 'Gitee 地址',  icon: 'MenuIcon' }
        },
        {
            path: 'http://182.61.5.190:8890/#/login',
            name: 'simple',
            meta: { title: '简易版本',  icon: 'MenuIcon' },
            component: () => import('@/views/externalLinks/simple/index.vue'),
        },
        {
            path: 'iframe',
            component: () => import('@/views/externalLinks/iframe/index.vue'),
            name: 'iframe',
            meta: { title: '内嵌 iframe', icon: 'MenuIcon'  }
        },
    ]
}]

export default externalLink
