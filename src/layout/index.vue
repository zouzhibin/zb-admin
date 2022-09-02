<template>
  <div class="g-container-layout" :class="classObj">
    <div v-if="device === 'mobile' && !isCollapse" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" v-if="mode === 'vertical'" />
    <div
      class="main-container"
      :class="{
        hideSliderLayout: mode === 'horizontal',
      }"
    >
      <u-header />
      <div class="m-container-content" :class="{ 'app-main-hide-tag': !showTag }">
        <u-main />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, defineComponent, ref } from 'vue'
  import {useSettingStore} from "@/store/modules/setting"
  import Sidebar from './Sidebar/index.vue'
  import UHeader from './Header/index.vue'
  import UMain from './Main/index.vue'

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
    //display: flex;
    height: 100%;
    width: 100%;
    .main-container {
      //overflow: auto;
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
  .m-container-content {
    //padding: 20px;
    /*background: #f6f8f9;*/
    padding-top: 93px;
    box-sizing: border-box;
    height: 100vh;
    position: relative;
  }
  .app-main-hide-tag {
    padding-top: 80px;
  }
</style>
