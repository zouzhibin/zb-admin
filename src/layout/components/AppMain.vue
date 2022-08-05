<template>
  <section class="app-main" v-if="isReload">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-slide" mode="out-in" appear>
        <keep-alive v-if="route.meta && route.meta.keepAlive">
          <component :is="Component" :key="route.path" />
        </keep-alive>
        <component :is="Component" :key="route.path" v-else />
      </transition>
    </router-view>
    <u-setting />
  </section>
</template>

<script lang="ts" setup>
  import USetting from '@/components/u-setting/index.vue'
  import { useStore } from 'vuex'
  import { computed, ref } from 'vue'
  const store = useStore()

  const cachedViews = computed(() => {
    return store.state.tagsView.cachedViews
  })

  const isReload = computed(() => {
    return store.state.app.isReload
  })
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
