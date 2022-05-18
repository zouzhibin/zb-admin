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
      <el-col :xs="24" :sm="12" :lg="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>设备数</span>
            </div>
          </template>
          <pie-charts height="200px" width="100%" id="pieS"/>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>圆环进度条</span>
            </div>
          </template>
          <progress-charts height="200px" width="100%" id="progress"/>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>漏斗图</span>
            </div>
          </template>
          <rotate-charts height="200px" width="100%" id="rotate"/>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>牛气冲天</span>
            </div>
          </template>
          <bullish-charts height="200px" width="100%" id="bullish"/>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>雷达图</span>
            </div>
          </template>
          <painting-charts height="200px" width="100%" id="painting"/>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>桑基图</span>
            </div>
          </template>
          <sankey-charts height="200px" width="100%" id="sankey"/>
        </el-card>
      </el-col>
    </el-row>



  </div>
</template>
<script setup lang="ts">
  import LiquidFillCharts from './components/complex/liquidFill.vue'
  import HistogramCharts from './components/complex/Histogram.vue'
  import LineCharts from './components/complex/line.vue'
  import PieCharts from './components/complex/pie.vue'
  import ProgressCharts from './components/complex/progress.vue'
  import RotateCharts from './components/complex/rotate.vue'
  import BullishCharts from './components/complex/bullish.vue'
  import PaintingCharts from './components/complex/painting.vue'
  import SankeyCharts from './components/complex/sankey.vue'

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
