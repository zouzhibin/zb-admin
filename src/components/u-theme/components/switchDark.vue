<template>
  <el-switch  @change="(val) => changeSwitch(val)" v-model="isDark"/>
</template>

<script setup lang="ts" name="switchDark">
  import { useStore, mapGetters } from 'vuex'
  import {computed, ref} from "vue";
  import {toggleDark} from '../../../hooks/dark'
  const store = useStore()

  // 横向
  const isDark = ref(store.state.setting.themeConfig.isDark)

  const changeSwitch = ()=>{
    toggleDark()
  }
</script>
