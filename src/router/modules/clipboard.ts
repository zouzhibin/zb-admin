import Layout from '@/layout/index.vue'

const clipboardTable = [{
    path: '/clipboard',
    component: Layout,
    redirect: '/clipboard/index',
    name: 'clipboard',
    meta: {
        title: 'clipboard',
        icon: 'document-copy',
        roles:['other']
    },
    children: [
        {
            path: 'index',
            component: () => import('@/views/clipboard/index.vue'),
            name: 'map',
            meta: { title: '剪贴板',  roles:['other'] ,icon: 'document-copy',}
        },

    ]
}]
export default clipboardTable
