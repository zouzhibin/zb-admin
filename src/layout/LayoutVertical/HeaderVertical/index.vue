<template>
  <!--纵向布局-->
  <Height/>
  <div
      class="m-layout-header"
      :class="{
          'fixed-header':themeConfig.fixedHeader,
          'collapse':themeConfig.fixedHeader&&isCollapse,
          'no-collapse':themeConfig.fixedHeader&&!isCollapse
      }">
    <div class="header-inner">
      <HeaderToolLeft/>
      <HeaderToolRight/>
    </div>
    <TagsView v-if="themeConfig.showTag"/>
  </div>

</template>

<script lang="ts" setup>
// 引入组件
import Height from '../../components/Header/components/Height.vue'
import HeaderToolRight from '../../components/Header/ToolRight.vue'
import HeaderToolLeft from '../../components/Header/ToolLeft.vue'
import TagsView from '../../components/TagsView/index.vue'

import {computed} from "vue";
import {useSettingStore} from "@/store/modules/setting"
const SettingStore = useSettingStore()

// 主题配置
const themeConfig = computed(() =>SettingStore.themeConfig)
const isCollapse = computed(() =>!SettingStore.isCollapse)
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

