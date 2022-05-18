<template>
  <div :class="{'has-logo':isCollapse}">
    <logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <menu-slide/>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
  import MenuSlide from './menuSlide.vue'
  // import SidebarItem from './SidebarItem.vue'
  import logo from './Logo.vue'
  // import {useRoute} from 'vue-router'
  import { useStore,mapGetters } from 'vuex' // useStore ===vue2.0中的this.$store
  import { ref,computed } from 'vue'

  // 在setup中获取store
  const store = useStore()
  // const route = useRoute()


  // // 获取路由
  // const permission_routes = computed(()=>{
  //   return store.state.permission.routes
  // })
  //
  //
  // console.log('permission_routes',permission_routes)
  //
  // const activeMenu = computed(()=>{
  //   const { meta, path } = route
  //   // if set path, the sidebar will highlight the path you set
  //   if (meta.activeMenu) {
  //     return meta.activeMenu
  //   }
  //   return path
  // })

  // 是否折叠
  const isCollapse = computed(()=>{
    return !store.state.app.isCollapse
  })
</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  //width: 200px;
  height: 100%;
}
.crollbar-wrapper{
  height: 100%;
  .el-scrollbar__view{
    height: 100%;
  }
}
</style>
