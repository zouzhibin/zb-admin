<template>
  <div class="m-container-layout">
    <div class="m-container-layout-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
  .m-container-layout{
    //margin: 20px;
    padding: 20px;
    box-sizing: border-box;

    .m-container-layout-inner{
      background: white;
      padding: 20px;
      background: white;
    }
  }
</style>
