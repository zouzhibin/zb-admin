<template>
  <div class="g-container-layout" :class="classObj">
    <Mobile/>
    <LayoutVertical v-if="device === 'mobile'"/>
    <component :is="LayoutComponents[themeConfig.mode]" v-else/>
    <Theme />
  </div>
</template>

<script lang="ts" setup>
  import { computed,watch } from 'vue'
  import Theme from '@/components/Theme/index.vue'
  import Mobile from './components/Mobile/index.vue'
  import {useSettingStore} from "@/store/modules/setting"
  import { useResizeHandler } from './hooks/useResizeHandler'
  import LayoutVertical from './LayoutVertical/index.vue'
  import LayoutHorizontal from './LayoutHorizontal/index.vue'

  const SettingStore = useSettingStore()
  const themeConfig = computed(() => SettingStore.themeConfig)
  const LayoutComponents = {
    horizontal: LayoutHorizontal,
    vertical: LayoutVertical,
  };

  // 是否折叠
  const isCollapse = computed(() => {
    return !SettingStore.isCollapse
  })
  let { device } = useResizeHandler()

  watch(()=>device.value,(val)=>{
    let vertical = val==='mobile'?'vertical':themeConfig.value.mode
    const body = document.body as HTMLElement;
    body.setAttribute("class", `layout-${vertical}`);
  },{
    immediate:true
  })


  // 当屏幕切换的时候进行变换
  const classObj = computed(() => {
    return {
      hideSidebar: !SettingStore.isCollapse,
      openSidebar: SettingStore.isCollapse,
      withoutAnimation: SettingStore.withoutAnimation,
      mobile: device.value === 'mobile',
    }
  })

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
