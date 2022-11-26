<template>
  <div v-if="device === 'mobile' && !isCollapse" class="drawer-bg" @click="handleClickOutside" />
</template>

<script lang="ts" setup>
import {computed} from "vue";
import { useResizeHandler } from '../../hooks/useResizeHandler'
import {useSettingStore} from "@/store/modules/setting"

let { device } = useResizeHandler()
const SettingStore = useSettingStore()

// 是否折叠
const isCollapse = computed(() => !SettingStore.isCollapse)

// 移动端点击
const handleClickOutside = () => {
  SettingStore.closeSideBar({ withoutAnimation: false })
}
</script>

<style lang="scss" scoped>

</style>
