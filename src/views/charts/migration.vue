<template>
  <div class="echarts-map">
    <el-card class="info">Echarts 实现飞线图、地图增加图标、高亮</el-card>
    <migration-charts height="100%" width="100%" id="migration"/>
  </div>
</template>

<script setup lang="ts">
import MigrationCharts from './components/migration/index.vue'

</script>

<style lang="scss" scoped>
.echarts-map{
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  height: calc(100vh - 93px);
  position: relative;
  .info{
    position: absolute;
    left: 0;
    width: 100%;
    font-weight: bold;
    z-index: 999;
  }
  ::v-deep(.el-card){
    border-radius: 0;
  }
}
</style>
