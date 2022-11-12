/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout/index.vue";

const iframeRouter = [{
    path: '/iframe',
    component: Layout,
    redirect: '/iframe/embedded',
    name: 'iframe',
    meta: {
        title: '内嵌 iframe',
        icon: 'Memo'
    },
    children: [
        {
            path: 'embedded',
            component: () => import('@/views/iframe/embedded/index.vue'),
            name: 'embedded',
            meta: { title: '内嵌 iframe', icon: 'Postcard'  }
        },
    ]
}]

export default iframeRouter
