<template>
  <div  class="sidebar-container" :class="{ 'has-logo': themeConfig.showLogo }">
    <Logo :isCollapse="isCollapse" v-if="themeConfig.showLogo"/>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
          :default-active="activeMenu"
          background-color="#304156"
          text-color="#bfcbd9"
          :unique-opened="SettingStore.themeConfig.uniqueOpened"
          :collapse-transition="false"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
      >
        <SubItem
            v-for="route in permission_routes"
            :key="route.path"
            :item="route"
            :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import Logo from './components/Logo.vue'
import SubItem from '../SubMenu/SubItem.vue'
import {useSettingStore} from "@/store/modules/setting"
import {usePermissionStore} from "@/store/modules/permission"
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// 在setup中获取store
const route = useRoute()
const PermissionStore = usePermissionStore()
const SettingStore = useSettingStore()

// 是否折叠
const isCollapse = computed(() => !SettingStore.isCollapse)
// 设置
const themeConfig = computed(() =>SettingStore.themeConfig )

// 获取路由
const permission_routes = computed(() => PermissionStore.permission_routes)

const activeMenu = computed(() => {
  const { meta, path } = route
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})
</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100%;
}
</style>
