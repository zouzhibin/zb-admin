<template>
  <u-container-layout>
    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
      <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
      <div
        v-if="isLoading"
        style="
          height: 50px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        "
        >正在加载中...</div
      >
    </ul>
  </u-container-layout>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const count = ref(0)
  const isLoading = ref(true)
  const load = () => {
    count.value += 3
  }
</script>

<style>
  .infinite-list {
    height: 300px;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .infinite-list .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: var(--el-color-primary-light-9);
    margin: 10px;
    color: var(--el-color-primary);
  }
  .infinite-list .infinite-list-item + .list-item {
    margin-top: 10px;
  }
</style>
