<template>
  <div class="m-screenful">
    <el-icon
            title="全屏"
            @click.stop="click"
            style="margin-right: 10px;cursor: pointer" ><full-screen /></el-icon>
  </div>
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

<style lang="scss" scoped>
  .m-screenful{
    width: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .3s;
  }
</style>
