<template>
  <div class="g-container-layout" :class="classObj" >
    <div v-if="device==='mobile'&&!isCollapse" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <u-header />
      <app-main/>
    </div>
  </div>
</template>

<script lang="ts">
  import {computed, defineComponent, ref} from 'vue';
  import Sidebar from './components/Sidebar/index.vue'
  import UHeader from './components/UHeader/index.vue'
  import AppMain from './components/AppMain.vue'
  import {useResizeHandler} from './hooks/useResizeHandler'

  import {useStore} from "vuex";

  export default defineComponent({
    name: 'layout',
    components: {
      Sidebar,
      UHeader,
      AppMain,
    },
    setup(){
      const store = useStore()
      // 是否折叠
      const isCollapse = computed(()=>{
        return !store.state.app.isCollapse
      })
      let {device} = useResizeHandler()

      const classObj = computed(()=>{
        return {
          hideSidebar:!store.state.app.isCollapse,
          openSidebar: store.state.app.isCollapse,
          withoutAnimation: store.state.app.withoutAnimation,
          mobile: device.value === 'mobile'
        }
      })
      const handleClickOutside = ()=> {
        store.dispatch('app/closeSideBar', { withoutAnimation: false })
      }

      return{
        isCollapse,
        device,
        classObj,
        handleClickOutside
      }
    }
  });
</script>

<style lang="scss" scoped>
  .g-container-layout{
    //display: flex;
    height: 100%;
    width: 100%;
    .main-container{
      //overflow: auto;
      display: flex;
      flex: 1;
      box-sizing: border-box;
      flex-direction: column
    }
    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }
  .sidebar-container{
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
</style>
