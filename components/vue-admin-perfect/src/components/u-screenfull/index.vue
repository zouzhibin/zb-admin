<template>
  <el-icon
      title="全屏"
      @click.stop="click"
      style="margin-right: 10px;cursor: pointer" ><full-screen /></el-icon>
</template>

<script lang="ts" setup>
  import screenfull from './index'
  import { ElMessage } from 'element-plus'
  import {onBeforeUnmount, onMounted, ref} from "vue";


  let isFullscreen = ref(false)
  const click = ()=>{
    if (!screenfull.isEnabled) {
      ElMessage({
        message: '你的浏览器不支持',
        type: 'warning'
      })
      return false
    }
    screenfull.toggle()
  }
  const change = ()=>{
    isFullscreen.value = screenfull.isFullscreen
  }

  const init = ()=>{
    if (screenfull.isEnabled) {
      screenfull.on('change', change)
    }
  }

  const destroy = ()=>{
    if (screenfull.isEnabled) {
      screenfull.off('change', change)
    }
  }

  onMounted(()=>{
    init()
  })

  onBeforeUnmount(()=>{
    destroy()
  })
</script>

<style>

</style>
