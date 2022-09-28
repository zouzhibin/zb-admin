<template>
  <div class="app-main" v-if="isReload">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-slide" mode="out-in" appear>
        <keep-alive :include="cacheRoutes">
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
    <u-theme />
  </div>
</template>

<script lang="ts" setup>
  import UTheme from '@/components/u-theme/index.vue'
  import { computed, ref } from 'vue'
  import {useSettingStore} from "@/store/modules/setting"
  import {usePermissionStore} from "@/store/modules/permission"
  const SettingStore = useSettingStore()
  const PermissionStor = usePermissionStore()

  const cacheRoutes = computed(() =>PermissionStor.cacheRoutes)
  const isReload = computed(() => SettingStore.isReload)

</script>

<style lang="scss" scoped>
  .app-main {
    flex: 1;
    display: flex;
    overflow-x: hidden;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
  }
</style>
