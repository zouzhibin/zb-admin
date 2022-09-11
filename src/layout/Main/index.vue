<template>
  <section class="app-main" v-if="isReload">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-slide" mode="out-in">
        <keep-alive v-if="route.meta && route.meta.keepAlive">
          <component :is="Component" :key="route.path" />
        </keep-alive>
        <component :is="Component" :key="route.path" v-else />
      </transition>
    </router-view>
    <u-theme />
  </section>
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
    //padding: 20px;
    /*padding-top: 110px;*/
    //min-height: 100%;
    //overflow: auto;
    //flex: 1;
    //overflow: auto;
    overflow-x: hidden;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    //padding-top: 70px;
    //  background: white;
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
