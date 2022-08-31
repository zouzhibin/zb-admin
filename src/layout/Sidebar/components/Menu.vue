<template>
  <el-menu
    :default-active="activeMenu"
    active-text-color="#ffd04b"
    background-color="#304156"
    text-color="#fff"
    :mode="mode"
    :collapse-transition="false"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
  >
    <sub-item
      v-for="route in permission_routes"
      :key="route.path"
      :item="route"
      :base-path="route.path"
    />
  </el-menu>
</template>

<script lang="ts" setup>
  import SubItem from './SubItem.vue'
  import { useRoute } from 'vue-router'
  import {usePermissionStore} from "@/store/modules/permission"
  import {useSettingStore} from "@/store/modules/setting"
  import { ref, computed } from 'vue'

  // 在setup中获取store
  const route = useRoute()
  const PermissionStore = usePermissionStore()
  const SettingStore = useSettingStore()

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

  // 是否折叠
  const isCollapse = computed(() => !SettingStore.isCollapse)

  // 横向
  const mode = computed(() => SettingStore.themeConfig.mode)
</script>
