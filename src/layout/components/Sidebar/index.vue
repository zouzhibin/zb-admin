<template>
  <div :class="{ 'has-logo': isCollapse }">
    <logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <menu-slide />
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
  import MenuSlide from './menuSlide.vue'
  import logo from './Logo.vue'
  import { useStore, mapGetters } from 'vuex' // useStore ===vue2.0中的this.$store
  import { ref, computed } from 'vue'

  // 在setup中获取store
  const store = useStore()

  // 是否折叠
  const isCollapse = computed(() => {
    return !store.state.app.isCollapse
  })
</script>

<style lang="scss">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    //width: 200px;
    height: 100%;
  }
  .crollbar-wrapper {
    height: 100%;
    .el-scrollbar__view {
      height: 100%;
    }
  }
</style>
