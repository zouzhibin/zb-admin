<template>
  <div class="echarts-map">
    <map-charts height="100%" width="100%" id="sankey"/>
  </div>
</template>


<script setup lang="ts">
import MapCharts from './components/map/index.vue'

</script>

<style>
.echarts-map{
  height: calc(100vh - 150px);
}
</style>
