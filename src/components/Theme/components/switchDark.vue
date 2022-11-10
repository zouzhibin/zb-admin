<template>
  <el-switch  @change="(val) => changeSwitch(val)" v-model="isDark"/>
</template>

<script setup lang="ts" name="switchDark">
  import {computed, ref} from "vue";
  import { useDark, useToggle } from '@vueuse/core'
  import {useSettingStore} from "@/store/modules/setting"
  const SettingStore = useSettingStore()
  // // 横向
  const isDark = ref(SettingStore.themeConfig.isDark)
  const changeSwitch = ()=>{
    let isDark = useDark()
    useToggle(isDark)
  }
</script>
