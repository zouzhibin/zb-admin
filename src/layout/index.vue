<template>
  <div class="g-container-layout" :class="classObj">
    <div v-if="device === 'mobile' && !isCollapse" class="drawer-bg" @click="handleClickOutside" />
    <Sidebar class="sidebar-container" v-if="mode === 'vertical'" />
    <div
      class="main-container"
      :class="{
        hideSliderLayout: mode === 'horizontal',
      }"
    >
      <div :style="{ height:`${showTag?90:50}px`  }" v-if="SettingStore.themeConfig.fixedHeader"></div>
      <UHeader/>
      <Main/>
      <Footer/>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, defineComponent, ref } from 'vue'
  import {useSettingStore} from "@/store/modules/setting"
  import Sidebar from './Sidebar/index.vue'
  import UHeader from './Header/index.vue'
  import Main from './Main/index.vue'
  import Footer from './Footer/index.vue'
  import { useResizeHandler } from './hooks/useResizeHandler'

  const SettingStore = useSettingStore()

  // 是否折叠
  const isCollapse = computed(() => {
    return !SettingStore.isCollapse
  })
  let { device } = useResizeHandler()
  // 当屏幕切换的时候进行变换
  const classObj = computed(() => {
    return {
      hideSidebar: !SettingStore.isCollapse,
      openSidebar: SettingStore.isCollapse,
      withoutAnimation: SettingStore.withoutAnimation,
      mobile: device.value === 'mobile',
    }
  })
  // 移动端点击
  const handleClickOutside = () => {
    SettingStore.closeSideBar({ withoutAnimation: false })
  }
  const showTag = computed(() => SettingStore.themeConfig.showTag)

  const mode = computed(() => SettingStore.themeConfig.mode)
</script>

<style lang="scss" scoped>
  .g-container-layout {
    height: 100%;
    width: 100%;
    .main-container {
      display: flex;
      flex: 1;
      box-sizing: border-box;
      flex-direction: column;
    }
    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }
  .sidebar-container {
    display: flex;
    flex-direction: column;
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 90;
  }
</style>
