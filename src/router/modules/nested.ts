

/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout/index.vue";

const nestedRouter = [{
    path: '/nested',
    component: Layout,
    redirect: '/form/menu1',
    name: 'nested',
    meta: {
        title: '路由嵌套',
        icon: 'HelpFilled'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index.vue'),
        name: 'menu1',
        meta: { title: '菜单1', icon: 'MenuIcon' },
        alwaysShow:true,
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1/index.vue'),
            name: 'menu1-1',
            meta: { title: '菜单 1-1' , icon: 'MenuIcon'}
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2/index.vue'),
            name: 'menu1-2',
            redirect: '/nested/menu1/menu1-2/menu1-2-1',
            meta: { title: '菜单 1-2' , icon: 'MenuIcon'},
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1/index.vue'),
                name: 'menu1-2-1',
                meta: { title: '菜单 1-2-1' , icon: 'MenuIcon'}
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2/index.vue'),
                name: 'menu1-2-2',
                meta: { title: '菜单 1-2-2' , icon: 'MenuIcon'}
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3/index.vue'),
            name: 'menu1-3',
            meta: { title: '菜单 1-3' , icon: 'MenuIcon'}
          }
        ]
      },
        {
            path: 'menu2',
            component: () => import('@/views/nested/menu2/index.vue'),
            name: 'nested-menu2',
            meta: { title: '菜单2', icon: 'MenuIcon'}
        },

    ]
}]

export default nestedRouter
