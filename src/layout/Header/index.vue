<template>
  <div
    class="m-layout-header"
    :class="[
        SettingStore.themeConfig.fixedHeader?'zb-fixed-header':'zb-no-fixed-header',
          mode === 'horizontal'?'':isCollapse?'fixed-header-collapse':'fixed-header-no-collapse'
        ]"
  >
    <div class="header" :class="{  transverseMenu: mode === 'horizontal', }">
      <UMenu v-if="mode === 'horizontal'" />

      <div class="left" v-if="mode === 'vertical'">
        <CollapseIcon/>
        <Hamburger />
      </div>

      <div class="tool-bar-right">
      <div class="right">
        <language class="right-item-menu"/>

        <GlobalComSize class="right-item-menu"/>
        <HeaderSearch class="right-item-menu"/>
        <Remind class="right-item-menu"/>
        <ScreenFull class="right-item-menu"/>
        <Setting class="right-item-menu"/>
        <Avatar/>
      </div>
    </div>
    <tag-views v-if="showTag" />
  </div>
</template>

<script lang="ts" setup>
  import { UserFilled } from '@element-plus/icons-vue'
  import Personal from './components/Personal.vue'
  import Language from './components/Language.vue'
  import TagViews from '../TagsView/index.vue'
  import GlobalComSize from './components/globalComSize.vue'
  import Hamburger from '@/components/Hamburger/index.vue'
  import Setting from './components/Setting.vue'
  import ScreenFull from './components/ScreenFull.vue'
  import Remind from './components/Remind'
  import HeaderSearch from './components/HeaderSearch'
  import CollapseIcon from './components/CollapseIcon'
  import Avatar from './components/Avatar'
  import UMenu from '../Sidebar/components/Menu.vue'
  import { computed, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import {useSettingStore} from "@/store/modules/setting"

  const person = ref()
  const router = useRouter()
  const SettingStore = useSettingStore()

  const isCollapse = computed(() =>!SettingStore.isCollapse)
  // menu 布局
  const mode = computed(() => SettingStore.themeConfig.mode)
  // 显示 tag
  const showTag = computed(() =>SettingStore.themeConfig.showTag)

  const handleCollapse = () => {
    SettingStore.setCollapse(isCollapse.value)
  }
</script>

<style lang="scss" scoped>
@import "./index";
</style>
