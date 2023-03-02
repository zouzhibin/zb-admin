/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout/index.vue";

const chartsRouter = [{
    path: '/chat',
    component: Layout,
    redirect: '/chat/index',
    name: 'chat',
    meta: {
        title: '聊天框',
        icon: 'chat-square'
    },
    children: [
        {
            path: '/chat/index',
            component: () => import('@/views/chat/index.vue'),
            name: 'chatBox',
            meta: { title: '聊天框', icon: 'chat-square'  }
        }
    ]
}]

export default chartsRouter
