<template>
  <div class="g-container-layout" :class="{hideSidebar:isCollapse}">
    <sidebar class="sidebar-container" :isCollapse="isCollapse"/>
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
  import {useStore} from "vuex";

  export default defineComponent({
    name: 'layout',
    components: {
      Sidebar,
      UHeader,
      AppMain
    },
    setup(){
      const store = useStore()
      // 是否折叠
      const isCollapse = computed(()=>{
        return store.state.app.isCollapse
      })
      return{
        isCollapse
      }
    }
  });
</script>

<style lang="scss" scoped>
  .g-container-layout{
    display: flex;
    height: 100%;
    width: 100%;
    .main-container{
      overflow: auto;
      display: flex;
      flex: 1;
      box-sizing: border-box;
      flex-direction: column
    }
  }
</style>
