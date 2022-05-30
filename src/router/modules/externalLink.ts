/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout/index.vue";

const externalLink = {
    path: '/external-link',
    component: Layout,
    redirect: 'noRedirect',
    name: 'external-link',
    children: [
        {
            path: 'https://github.com/zouzhibin/vue-admin-perfect',
            name: 'external',
            meta: { title: 'Github地址',  icon: 'link' }
        },
    ]
}

export default externalLink
