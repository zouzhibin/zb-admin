/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout/index.vue'

const othersRouter = [{
  path: '/other',
  component: Layout,
  redirect: '/other/clipboard',
  name: 'other',
  meta: {
    title: '常用组件',
    icon: 'management'
  },
  children: [
    {
      path: 'clipboard',
      component: () => import('@/views/other/clipboard/index.vue'),
      name: 'clipboard',
      meta: { title: '剪贴板',  roles:['other'] ,icon: 'MenuIcon',}
    },
    {
      path: 'editor',
      component: () => import('@/views/other/editor/index.vue'),
      name: 'editor',
      meta: { title: '富文本编辑器', roles: ['other'] , icon: 'MenuIcon'}
    },
    {
      path: 'code-mirror',
      component: () => import('@/views/other/codeMirror/index.vue'),
      name: 'code-mirror',
      meta: { title: '代码编辑器', roles: ['other'] , icon: 'MenuIcon'}
    },
    {
      path: 'mark-down',
      component: () => import('@/views/other/markDown/index.vue'),
      name: 'mark-down',
      meta: { title: 'markDown', roles: ['other'] , icon: 'MenuIcon'}
    },
    {
      path: 'print',
      component: () => import('@/views/other/print/index.vue'),
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
      path: 'card-drag',
      component: () => import('@/views/other/cardDrag/index.vue'),
      name: 'card-drag',
      meta: { title: '卡片拖拽', icon: 'MenuIcon' }
    },
    {
      path: 'upload',
      component: () => import('@/views/other/upload/index.vue'),
      name: 'upload',
      meta: { title: '上传图片', icon: 'MenuIcon' }
    },
    {
      path: 'qrcode',
      component: () => import('@/views/other/qrcode/index.vue'),
      name: 'qrcode',
      meta: { title: '生成二维码', icon: 'MenuIcon' }
    },
    {
      path: 'svgIcon',
      component: () => import('@/views/other/svgIcon/index.vue'),
      name: 'svgIcon',
      meta: { title: 'svg 图标', icon: 'MenuIcon' }
    },
    {
      path: 'iconfont',
      component: () => import('@/views/other/iconfont/index.vue'),
      name: 'iconfont',
      meta: { title: '阿里图标库', icon: 'MenuIcon' }
    },
    {
      path: 'water-marker',
      component: () => import('@/views/other/waterMarker/index.vue'),
      name: 'water-marker',
      meta: { title: '生成水印' , icon: 'MenuIcon'}
    },
    {
      path: 'right-menu',
      component: () => import('@/views/other/rightMenu/index.vue'),
      name: 'right-menu',
      meta: { title: '右键菜单' , icon: 'MenuIcon'}
    },
    {
      path: 'count',
      component: () => import('@/views/other/count/index.vue'),
      name: 'count',
      meta: { title: '数字动画', icon: 'MenuIcon' }
    },
    {
      path: 'text-clamp',
      component: () => import('@/views/other/textClamp/index.vue'),
      name: 'text-clamp',
      meta: { title: '多行文本省略', icon: 'MenuIcon' }
    },

  ]
}]

export default othersRouter
