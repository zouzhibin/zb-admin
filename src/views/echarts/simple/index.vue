<template>
  <PageWrapLayout style="width: 100%">
    <el-row class="row-bg" :gutter="10">
      <el-col :xs="24" :sm="12" :lg="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>折线图</span>
            </div>
          </template>
          <line-charts height="200px" width="100%" />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>柱状图</span>
            </div>
          </template>
          <bar-charts height="200px" width="100%" id="bar" /> </el-card
        ></el-col>
      <el-col :xs="24" :sm="12" :lg="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>饼图</span>
            </div>
          </template>
          <pie-charts height="200px" width="100%" id="pie" />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>散点图</span>
            </div>
          </template>
          <scatter-charts height="200px" width="100%" id="scatter" />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>仪表盘</span>
            </div>
          </template>
          <gauge-charts height="200px" width="100%" id="gauge" />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>漏斗图</span>
            </div>
          </template>
          <funnel-charts height="200px" width="100%" id="funnel" />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>K 线图</span>
            </div>
          </template>
          <candlestick-charts height="200px" width="100%" id="candlestick" />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>雷达图</span>
            </div>
          </template>
          <graph-charts height="200px" width="100%" id="graph" />
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>虚线柱状图效果</span>
            </div>
          </template>
          <pictorial-bar height="200px" width="100%" id="pictorial" />
        </el-card>
      </el-col>
    </el-row>
  </PageWrapLayout>
</template>
<script setup lang="ts">
import LineCharts from './components/line.vue'
import BarCharts from './components/bar.vue'
import PieCharts from './components/pie.vue'
import ScatterCharts from './components/scatter.vue'
import GaugeCharts from './components/gauge.vue'
import FunnelCharts from './components/funnel.vue'
import CandlestickCharts from './components/candlestick.vue'
import GraphCharts from './components/graph.vue'
import PictorialBar from './components/pictorialBar.vue'
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
