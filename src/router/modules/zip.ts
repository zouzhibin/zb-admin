import Layout from '@/layout/index.vue'

const zipRoutes = [{
    path: '/zip',
    component: Layout,
    isShow:true,
    redirect: 'noRedirect',
    name: 'zip',
    alwaysShow:true,
    meta: {
        title: 'Zip',
        icon: 'document-copy',
        roles:['other']
    },
    children: [
        {
            path: 'download',
            component: () => import('@/views/zip/download.vue'),
            name: 'download',
            meta: { title: 'Zip', roles:['other'] ,icon: 'document-copy',}
        },

    ]
}]


export default zipRoutes
