<template>
  <div class="echarts-map app-container">
    <migration-charts height="100%" width="100%" id="migration"/>
  </div>
</template>


<script>
  import MigrationCharts from './components/migration/index.vue'
  export default {
    components:{
      MigrationCharts
    }
  }
</script>

<style>
.echarts-map{
  box-sizing: border-box;
  height: calc(100vh - 120px);
}
</style>
