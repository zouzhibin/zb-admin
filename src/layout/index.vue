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
      <div class="m-container-content" :class="{ 'app-main-hide-tag': !isShowTag }">
        <u-main />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from 'vue'
  import Sidebar from './Sidebar/index.vue'
  import UHeader from './Header/index.vue'
  import UMain from './Main/index.vue'
  import { useResizeHandler } from './hooks/useResizeHandler'

  import { useStore } from 'vuex'

  export default defineComponent({
    name: 'layout',
    components: {
      Sidebar,
      UHeader,
      UMain,
    },
    setup() {
      const store = useStore()
      // 是否折叠
      const isCollapse = computed(() => {
        return !store.state.app.isCollapse
      })
      let { device } = useResizeHandler()

      const classObj = computed(() => {
        return {
          hideSidebar: !store.state.app.isCollapse,
          openSidebar: store.state.app.isCollapse,
          withoutAnimation: store.state.app.withoutAnimation,
          mobile: device.value === 'mobile',
        }
      })
      const handleClickOutside = () => {
        store.dispatch('app/closeSideBar', { withoutAnimation: false })
      }
      const isShowTag = computed(() => {
        return store.state.setting.isShowTag
      })

      const mode = computed(() => {
        return store.state.setting.mode
      })
      return {
        isCollapse,
        device,
        classObj,
        isShowTag,
        mode,
        handleClickOutside,
      }
    },
  })
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
    z-index: 999;
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
