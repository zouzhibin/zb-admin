<template>
  <div class="app-main" v-if="isReload">
    <div class="app-main-inner">
      <router-view v-slot="{ Component, route }">
        <transition name="fade-slide" mode="out-in" appear>
          <keep-alive :include="cacheRoutes">
            <component :is="Component" :key="route.path" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
    <Theme />
    <Footer/>
  </div>
</template>

<script lang="ts" setup>
  import Theme from '@/components/Theme/index.vue'
  import Footer from '../Footer/index.vue'
  import { computed, ref } from 'vue'
  import {useSettingStore} from "@/store/modules/setting"
  import {usePermissionStore} from "@/store/modules/permission"
  const SettingStore = useSettingStore()
  const PermissionStore = usePermissionStore()

  const cacheRoutes = computed(() =>PermissionStore.getCacheRoutes())
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
    .app-main-inner{
      flex: 1;
      display: flex;
      overflow-x: hidden;
      flex-direction: column;
      width: 100%;
      box-sizing: border-box;
    }
  }
</style>
