<template>
  <div class="echarts-map">
    <migration-charts height="100%" width="100%" id="migration"/>
  </div>

</template>


<script setup lang="ts">
import MigrationCharts from './components/migration/index.vue'

</script>

<style>
.echarts-map{
  height: calc(100vh - 93px);
}
</style>
