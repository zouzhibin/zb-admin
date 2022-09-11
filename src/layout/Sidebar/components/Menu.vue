<template>
  <div style="width: 210px">
    <a-menu
        v-model:openKeys="state.openKeys"
        v-model:selectedKeys="state.selectedKeys"
        mode="inline"
        theme="dark"
        :inline-collapsed="isCollapse"
    >
      <a-menu-item key="1">
        <template #icon>
          <PieChartOutlined />
        </template>
        <span>Option 1</span>
      </a-menu-item>
      <sub-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
      />
    </a-menu>
  </div>
</template>
<script lang="ts" setup>
import SubItem from './SubItem.vue'
import { defineComponent, reactive, toRefs, watch } from 'vue';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';
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
const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1'],
});

watch(
    () => state.openKeys,
    (_val, oldVal) => {
      state.preOpenKeys = oldVal;
    },
);
const toggleCollapsed = () => {
  state.collapsed = !state.collapsed;
  state.openKeys = state.collapsed ? [] : state.preOpenKeys;
};
</script>

<style>
.ant-menu.ant-menu-inline-collapsed{
  width: 60px!important;
}
</style>