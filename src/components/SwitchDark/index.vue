<template>
  <el-switch
      @change="switchDark"
      inline-prompt
      v-model="themeConfig.isDark"
      :active-icon="Sunny"
      :inactive-icon="Moon"
  />
</template>

<script setup lang="ts" name="switchDark">
import { Sunny, Moon } from "@element-plus/icons-vue";
import {computed, ref} from "vue";
import {useSettingStore} from "@/store/modules/setting"

const SettingStore = useSettingStore()
// 设置信息
const themeConfig = computed(()=>SettingStore.themeConfig)

// 切换暗黑模式
const switchDark = () => {
  const body = document.documentElement as HTMLElement;
  if (themeConfig.value.isDark) body.setAttribute("class", "dark");
  else body.setAttribute("class", "");
};
</script>
