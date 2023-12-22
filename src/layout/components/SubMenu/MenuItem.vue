<template>
  <el-menu-item :index="subItem.path" @click="handleClickMenu(subItem)">
    <el-icon>
      <component :is="subItem?.meta?.icon"></component>
    </el-icon>
    <template #title>
      <span>{{ subItem?.meta?.title }}</span>
    </template>
  </el-menu-item>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { isExternal } from '@/utils/validate'

  const router = useRouter()
  let props = defineProps({
    menuList: {
      type: Array,
      default: () => [],
    },
    subItem: {
      type: Object,
      default: () => {},
    },
  })

  const handleClickMenu = (subItem) => {
    if (isExternal(subItem.path)) return window.open(subItem.path, '_blank')
    router.push(subItem.path)
  }
</script>
