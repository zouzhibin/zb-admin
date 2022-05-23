<template>
  <section class="app-main" >
      <router-view v-slot="{ Component,route }">
        <transition name="fade-slide" mode="out-in">
          <component :is="Component" :key="route.path"/>
        </transition>
      </router-view>
      <u-setting/>
  </section>
</template>

<script lang="ts" setup>
    import USetting from '@/components/u-setting/index.vue'


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
