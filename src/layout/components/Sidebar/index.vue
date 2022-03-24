<template>
  <div>
    <logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
          default-active="2"
          active-text-color="#ffd04b"
          background-color="#545c64"
          text-color="#fff"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
      >
        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path"/>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
  import SidebarItem from './SidebarItem.vue'
  import logo from './Logo.vue'
  import { useStore,mapGetters } from 'vuex' // useStore ===vue2.0中的this.$store
  import { ref,computed } from 'vue'

  // 在setup中获取store
  const store = useStore()

  // 获取路由
  const permission_routes = computed(()=>{
    return store.state.permission.routes
  })

  // 是否折叠
  const isCollapse = computed(()=>{
    return store.state.app.isCollapse
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
