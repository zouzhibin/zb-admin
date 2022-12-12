<template>
  <PageWrapLayout style="min-height: 300px">
    <el-button @contextmenu.prevent="rightClick" style="width: 200px">右键菜单</el-button>
    <RightClickMenu :left="clientX" :top="clientY" @ok="operatingRightAction" :data="data" />
  </PageWrapLayout>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import RightClickMenu from '@/components/RightClickMenu/index.vue'

  const clientX = ref(0)
  const clientY = ref(0)
  import { useRouter } from 'vue-router'
  const data = [
    {
      label: '打印',
      value: 1,
      path: '/other/print',
    },
    {
      label: '头像裁剪',
      value: 2,
      path: '/other/cropper',
    },
    {
      label: '卡片拖拽',
      value: 3,
      path: '/other/grid-sorter',
    },
    {
      label: '分割模块',
      value: 4,
      path: '/other/splitpane',
    },
    {
      label: '生成二维码',
      value: 5,
      path: '/other/qrcode',
    },
  ]

  const rightClick = (event) => {
    clientX.value = event.clientX
    clientY.value = event.clientY
  }
  const router = useRouter()

  const operatingRightAction = ($event, val) => {
    console.log('获取数据', val)
    router.push({
      path: val.path,
    })
  }
</script>

<style lang="scss"></style>
