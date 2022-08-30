<template>
  <el-switch  @change="(val) => changeSwitch(val)" v-model="isDark"/>
</template>

<script setup lang="ts" name="switchDark">
  import {computed, ref} from "vue";
  import {useSettingStore} from "@/storeNew/modules/setting"
  import {toggleDark} from '../../../hooks/dark'
  const SettingStore = useSettingStore()
  // 横向
  const isDark = ref(SettingStore.themeConfig.isDark)

  const changeSwitch = ()=>{
    toggleDark()
  }
</script>
