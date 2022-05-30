<template>
  <section class="app-main" >
        <router-view v-slot="{ Component,route }">
          <transition name="fade-slide" mode="out-in">
            <keep-alive :include="cachedViews">

              <component :is="Component" :key="route.name" />

            </keep-alive>
          </transition>
        </router-view>
      <u-setting/>
  </section>
</template>

<script lang="ts" setup>
    import USetting from '@/components/u-setting/index.vue'
    import {useStore} from "vuex";
    import {computed, ref,} from 'vue'
    const store = useStore()

    const cachedViews = computed(()=>{
      return store.state.tagsView.cachedViews
    })
</script>

<style lang="scss" scoped>
  .app-main{
    padding: 20px;
    /*padding-top: 110px;*/
    //min-height: 100%;
    //overflow: auto;
    //flex: 1;
    //overflow: auto;
      overflow: hidden;
    box-sizing: border-box;
    //padding-top: 70px;
      background: white;
  }

</style>
