<template>
  <div class="app-main" v-if="isReload">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-slide" mode="out-in" appear>
        <keep-alive v-if="route.meta && route.meta.keepAlive">
          <component :is="Component" :key="route.path" />
        </keep-alive>
        <component :is="Component" :key="route.path" v-else />
      </transition>
    </router-view>
    <u-theme />
  </div>
</template>

<script lang="ts" setup>
  import UTheme from '@/components/u-theme/index.vue'

  import { computed, ref } from 'vue'
  import {useSettingStore} from "@/store/modules/setting"
  import {useTagsViewStore} from "@/store/modules/tagsView"
  const SettingStore = useSettingStore()
  const TagsViewStore = useTagsViewStore()

  const cachedViews = computed(() =>TagsViewStore.cachedViews)

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

  //// 主内容区动画
  //.main-enter-active {
  //  transition: 0.2s;
  //}
  //.main-leave-active {
  //  transition: 0.15s;
  //}
  //.main-enter-from {
  //  opacity: 0;
  //  margin-left: -20px;
  //}
  //.main-leave-to {
  //  opacity: 0;
  //  margin-left: 20px;
  //}
</style>
