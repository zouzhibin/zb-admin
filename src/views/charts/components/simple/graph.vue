<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>
<script lang="ts" setup>
  import * as echarts from 'echarts'
  import { EChartsType } from 'echarts/core'
  import { onMounted } from 'vue'

  let props = defineProps({
    className: {
      type: String,
      default: 'chart',
    },
    config: {
      type: Object,
      default: () => {},
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
  const axisData = ['Mon', 'Tue', 'Wed', 'Very Loooong Thu', 'Fri', 'Sat', 'Sun']
  const data = axisData.map(function (item, i) {
    return Math.round(Math.random() * 1000 * (i + 1))
  })
  const links = data.map(function (item, i) {
    return {
      source: i,
      target: i + 1,
    }
  })
  links.pop()
  const options = {
    grid: {
      top: 10,
      left: '2%',
      right: '2%',
      bottom: '2%',
      containLabel: true,
    },
    tooltip: {},
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: axisData,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        type: 'graph',
        layout: 'none',
        coordinateSystem: 'cartesian2d',
        symbolSize: 40,
        label: {
          show: true,
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        data: data,
        links: links,
        lineStyle: {
          color: '#2f4554',
        },
      },
    ],
  }
  let chart: EChartsType
  const initChart = () => {
    let chart = echarts.init(document.getElementById(props.id))
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
