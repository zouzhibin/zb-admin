/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout/index.vue'

const othersRouter = {
  path: '/other',
  component: Layout,
  redirect: 'noRedirect',
  name: 'other',
  meta: {
    title: '扩展组件',
    icon: 'management'
  },
  children: [
    {
      path: 'editor',
      component: () => import('@/views/other/editor/index.vue'),
      name: 'editor',
      meta: { title: '富文本编辑器', roles: ['other'] , icon: 'MenuIcon'}
    },
    {
      path: 'mark-down',
      component: () => import('@/views/other/markDown/index.vue'),
      name: 'mark-down',
      meta: { title: 'markDown', roles: ['other'] , icon: 'MenuIcon'}
    },
    {
      path: 'print',
      component: () => import('@/views/other/print.vue'),
      name: 'print',
      meta: { title: '打印' , icon: 'MenuIcon'}
    },
    {
      path: 'cropper',
      component: () => import('@/views/other/cropper/index.vue'),
      name: 'cropper',
      meta: { title: '头像裁剪' , icon: 'MenuIcon'}
    },
    {
      path: 'grid-sorter',
      component: () => import('@/views/other/grid-sorter.vue'),
      name: 'grid-sorter',
      meta: { title: '卡片拖拽', icon: 'MenuIcon' }
    },
    {
      path: 'form',
      component: () => import('@/views/other/form.vue'),
      name: 'form',
      meta: { title: '表单',  roles:['other'], icon: 'MenuIcon'}
    },
    {
      path: 'upload',
      component: () => import('@/views/other/upload.vue'),
      name: 'upload',
      meta: { title: '上传图片', icon: 'MenuIcon' }
    },
    {
      path: 'qrcode',
      component: () => import('@/views/other/qrcode.vue'),
      name: 'qrcode',
      meta: { title: '生成二维码', icon: 'MenuIcon' }
    },
    {
      path: 'svgIcon',
      component: () => import('@/views/other/svgIcon/index.vue'),
      name: 'svgIcon',
      meta: { title: 'svg图标', icon: 'MenuIcon' }
    },
    {
      path: 'water-marker',
      component: () => import('@/views/other/water-marker.vue'),
      name: 'water-marker',
      meta: { title: '生成水印' , icon: 'MenuIcon'}
    },
    {
      path: 'right-menu',
      component: () => import('@/views/other/right-menu.vue'),
      name: 'right-menu',
      meta: { title: '右键菜单' , icon: 'MenuIcon'}
    },
    {
      path: 'count',
      component: () => import('@/views/other/count.vue'),
      name: 'count',
      meta: { title: '数字自增长', icon: 'MenuIcon' }
    }
  ]
}

export default othersRouter
