/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout/index.vue";

const chartsRouter = {
    path: '/chat',
    component: Layout,
    redirect: 'noRedirect',
    name: 'chat',
    meta: {
        title: '聊天框',
        icon: 'chat-square'
    },
    children: [
        {
            path: 'index',
            component: () => import('@/views/chat/index.vue'),
            name: 'chat',
            meta: { title: '聊天框', noCache: true,icon: 'chat-square'  }
        },
    ]
}

export default chartsRouter
