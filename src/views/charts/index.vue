<template>
  <div style="width: 100%;overflow: auto;height: 100%">
    <el-row class="row-bg" :gutter="10">
      <el-col :xs="24" :sm="12" :lg="8">
        <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>折线图</span>
          </div>
        </template>
        <line-charts height="200px" width="100%"/>
      </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="8">
        <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>折线图</span>
          </div>
        </template>
        <line-charts height="200px" width="100%"/>
      </el-card></el-col>
      <el-col :xs="24" :sm="12" :lg="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>折线图</span>
            </div>
          </template>
          <line-charts height="200px" width="100%"/>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>折线图</span>
            </div>
          </template>
          <line-charts height="200px" width="100%"/>
        </el-card>
      </el-col>
    </el-row>



  </div>
</template>
<script setup lang="ts">
  import LineCharts from './components/line.vue'

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
