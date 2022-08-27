<template>
  <div :class="{ 'has-logo': themeConfig.showLogo }">
    <logo :isCollapse="isCollapse" v-if="themeConfig.showLogo"/>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <u-menu/>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import UMenu from './components/Menu.vue'
import logo from './components/Logo.vue'
import { useStore, mapGetters } from 'vuex' // useStore ===vue2.0中的this.$store
import { ref, computed } from 'vue'

// 在setup中获取store
const store = useStore()

// 是否折叠
const isCollapse = computed(() => {
  return !store.state.app.isCollapse
})
// 设置
const themeConfig = computed(() =>store.state.setting.themeConfig )
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
