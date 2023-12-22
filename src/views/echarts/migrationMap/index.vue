<template>
  <div class="echarts-map">
    <el-card class="info">Echarts 实现飞线图、地图增加图标、高亮</el-card>
    <migration-charts id="migration" height="100%" width="100%" />
  </div>
</template>

<script setup lang="ts">
  import MigrationCharts from '@/components/DataScreen/migrationEcharts/index.vue'
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
