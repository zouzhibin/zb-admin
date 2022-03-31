<template>
  <div style="width: 100%;">
    <el-row class="row-bg" :gutter="10">
      <el-col :xs="24" :sm="12" :lg="8">
        <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>水滴图</span>
          </div>
        </template>
        <liquid-fill-charts height="200px" width="100%" id="liquidFill"/>
      </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="8">
        <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>柱状图</span>
          </div>
        </template>
        <histogram-charts height="200px" width="100%" id="Histogram"/>
      </el-card></el-col>
      <el-col :xs="24" :sm="12" :lg="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>折线图</span>
            </div>
          </template>
          <line-charts height="200px" width="100%" id="lineS"/>
        </el-card>
      </el-col>
<!--      <el-col :xs="24" :sm="12" :lg="8">-->
<!--        <el-card class="box-card">-->
<!--          <template #header>-->
<!--            <div class="card-header">-->
<!--              <span>散点图</span>-->
<!--            </div>-->
<!--          </template>-->
<!--          <scatter-charts height="200px" width="100%" id="scatter"/>-->
<!--        </el-card>-->
<!--      </el-col>-->
<!--      <el-col :xs="24" :sm="12" :lg="8">-->
<!--        <el-card class="box-card">-->
<!--          <template #header>-->
<!--            <div class="card-header">-->
<!--              <span>仪表盘</span>-->
<!--            </div>-->
<!--          </template>-->
<!--          <gauge-charts height="200px" width="100%" id="gauge"/>-->
<!--        </el-card>-->
<!--      </el-col>-->
<!--      <el-col :xs="24" :sm="12" :lg="8">-->
<!--        <el-card class="box-card">-->
<!--          <template #header>-->
<!--            <div class="card-header">-->
<!--              <span>漏斗图</span>-->
<!--            </div>-->
<!--          </template>-->
<!--          <funnel-charts height="200px" width="100%" id="funnel"/>-->
<!--        </el-card>-->
<!--      </el-col>-->
    </el-row>



  </div>
</template>
<script setup lang="ts">
  import LiquidFillCharts from './components/complex/liquidFill.vue'
  import HistogramCharts from './components/complex/Histogram.vue'
  import LineCharts from './components/complex/line.vue'
  import ScatterCharts from './components/simple/scatter.vue'
  import GaugeCharts from './components/simple/gauge.vue'
  import FunnelCharts from './components/simple/funnel.vue'


</script>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  margin-bottom: 10px;
  width: 100%;
}
</style>
