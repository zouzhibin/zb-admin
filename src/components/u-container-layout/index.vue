<template>
  <div class="m-container-layout">
    <div class="m-container-layout-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  .m-container-layout {
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    .m-container-layout-inner {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      background: white;
      padding: 20px;
      width: 100%;
      box-sizing: border-box;
      min-height: 100%;
    }
  }
</style>
