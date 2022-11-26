<template>
  <div class="m-tool-left">
    <CollapseIcon/>
    <Hamburger />
  </div>
</template>

<script lang="ts" setup>
import CollapseIcon from './components/CollapseIcon.vue'
import Hamburger from './components/Hamburger.vue'
</script>

<style lang="scss" scoped>
.m-tool-left{
  display: flex;
  align-items: center;
  height: 100%;
}
</style>
