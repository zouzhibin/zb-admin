<template>
  <u-container-layout>
    <div>
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>日期和时间点 </span>
          </div>
        </template>
        <div>
          <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间点" />
        </div>
      </el-card>

      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>日期时间格式 </span>
          </div>
        </template>
        <div>
          <el-date-picker
            v-model="value4"
            type="datetime"
            placeholder="选择时间"
            format="YYYY/MM/DD hh:mm:ss"
          />
        </div>
      </el-card>

      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>日期和时间范围 </span>
          </div>
        </template>
        <div>
          <el-date-picker
            :shortcuts="shortcuts1"
            v-model="value3"
            type="datetimerange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />
        </div>
      </el-card>

      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>默认的起始与结束时刻 </span>
          </div>
        </template>
        <div>
          <el-date-picker
            v-model="value5"
            type="datetimerange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="defaultTime1"
          />
        </div>
      </el-card>
    </div>
  </u-container-layout>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const value1 = ref('')
  const value4 = ref('')
  const value5 = ref('')
  const defaultTime1 = [new Date(2000, 1, 1, 12, 0, 0)]
  const value3 = ref([new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)])
  const shortcuts = [
    {
      text: 'Today',
      value: new Date(),
    },
    {
      text: 'Yesterday',
      value: () => {
        const date = new Date()
        date.setTime(date.getTime() - 3600 * 1000 * 24)
        return date
      },
    },
    {
      text: 'A week ago',
      value: () => {
        const date = new Date()
        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
        return date
      },
    },
  ]

  const shortcuts1 = [
    {
      text: 'Last week',
      value: () => {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
        return [start, end]
      },
    },
    {
      text: 'Last month',
      value: () => {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
        return [start, end]
      },
    },
    {
      text: 'Last 3 months',
      value: () => {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
        return [start, end]
      },
    },
  ]
</script>
<style>
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-link {
    margin-right: 8px;
  }
  .el-link .el-icon--right.el-icon {
    vertical-align: text-bottom;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    width: 100%;
    margin-bottom: 20px;
  }
</style>
