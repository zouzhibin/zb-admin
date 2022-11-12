<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" ref="chartsRef" />
</template>
<script lang="ts" setup>
  import * as echarts from 'echarts'
  import { EChartsType } from 'echarts/core'
  import { onMounted, ref } from 'vue'
  const chartsRef = ref<HTMLElement | null>()

  const props = defineProps({
    className: {
      type: String,
      default: 'chart',
    },
    xAxisData: {
      type: Array,
      default: () => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    config: {
      type: Object,
      default: () => {},
    },
    seriesData: {
      type: Array,
      default: () => [150, 230, 224, 218, 135, 147, 260],
    },
    id: {
      type: String,
      default: 'chart',
    },
    width: {
      type: String,
      default: '200px',
    },
    height: {
      type: String,
      default: '200px',
    },
  })
  const options = {
    grid: {
      top: 10,
      left: '2%',
      right: '2%',
      bottom: '2%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: props.xAxisData,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: props.seriesData,
        type: 'line',
      },
    ],
    ...props.config,
  }
  let chart: EChartsType
  const initChart = () => {
    const chart = echarts.init(chartsRef.value)
    chart.setOption(options)
    return chart
  }
  onMounted(() => {
    chart = initChart()
    window.addEventListener('resize', function () {
      chart && chart.resize()
    })
  })
</script>

<style></style>
