<template>
  <div ref="chartsRef" class="echarts"/>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts'
import { EChartsType } from 'echarts/core'
import { onMounted, ref } from 'vue'
const chartsRef = ref<HTMLElement | null>()

let colorList = ['#46ea91', '#2ba0ff', '#ed593b', '#7357ff', '#f2d750'];
const options = {
  legend: {
    icon: 'circle',
    top: '5%',
    right: '5%',
    itemWidth: 6,
    itemGap: 5,
    textStyle: {
      color: '#fff',
      padding: [3, 0, 0, 0],
    },
  },
  tooltip: {
    trigger: 'axis',
  },
  grid: {
    top: '14%',
    left: '3%',
    right: '4%',
    bottom: '10%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: ['1', '2', '3', '4', '5', '6', '7', '8'],
      axisLine: {
        lineStyle: {
          color: '#33BBFF',
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: '#5FBBEB',
        },
        // 默认x轴字体大小
        fontSize: 12,
        // margin:文字到x轴的距离
        margin: 10,
      },
      axisPointer: {
        label: {
          // padding: [11, 5, 7],
          padding: [0, 0, 0, 0],
          // 这里的margin和axisLabel的margin要一致!
          margin: 10,
          // 移入时的字体大小
          fontSize: 12,
          backgroundColor: 'rgba(0,0,0,0)',
        },
      },
      boundaryGap: false,
    },
  ],
  yAxis: [
    {
      name: '单位/件',
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#05D5FF',
        },
      },
      axisLabel: {
        textStyle: {
          color: '#5FBBEB',
        },
      },
      splitLine: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: '咨询',
      type: 'line',
      data: [100, 20, 30, 102, 15, 30, 20, 18],
      symbolSize: 1,
      symbol: 'circle',
      smooth: true,
      showSymbol: false,
      lineStyle: {
        width: 2,
        color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
          {
            offset: 0,
            color: '#90ffc6',
          },
          {
            offset: 1,
            color: '#46ea91',
          },
        ]),
        shadowColor: 'rgba(144, 255, 198, .3)',
        shadowBlur: 5,
        shadowOffsetY: 5,
      },
      itemStyle: {
        normal: {
          color: colorList[0],
          borderColor: colorList[0],
        },
      },
    },
    {
      name: '求助',
      type: 'line',
      data: [20, 12, 11, 14, 25, 16, 10, 20],
      symbolSize: 1,
      symbol: 'circle',
      smooth: true,
      showSymbol: false,
      lineStyle: {
        width: 2,
        color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
          {
            offset: 0,
            color: '#67bcfc',
          },
          {
            offset: 1,
            color: '#2ba0ff',
          },
        ]),
        shadowColor: 'rgba(105, 188, 252,.3)',
        shadowBlur: 5,
        shadowOffsetY: 5,
      },
      itemStyle: {
        normal: {
          color: colorList[1],
          borderColor: colorList[1],
        },
      },
    },
    {
      name: '无效',
      type: 'line',
      data: [150, 120, 170, 140, 100, 160, 110, 110],
      symbolSize: 1,
      symbol: 'circle',
      smooth: true,
      showSymbol: false,
      lineStyle: {
        width: 2,
        color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
          {
            offset: 0,
            color: '#fc937e ',
          },
          {
            offset: 1,
            color: '#ed593b',
          },
        ]),
        shadowColor: 'rgb(252, 147, 126,.3)',
        shadowBlur: 2,
        shadowOffsetY: 2,
      },
      itemStyle: {
        normal: {
          color: colorList[2],
          borderColor: colorList[2],
        },
      },
    },
    {
      name: '投诉举报',
      type: 'line',
      data: [200, 80, 100, 30, 60, 50, 110, 20],
      symbolSize: 1,
      symbol: 'circle',
      smooth: true,
      showSymbol: false,
      lineStyle: {
        width: 2,
        color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
          {
            offset: 0,
            color: '#a390ff',
          },
          {
            offset: 1,
            color: '#7357ff',
          },
        ]),
        shadowColor: 'rgba(115, 87, 255, .1)',
        shadowBlur: 5,
        shadowOffsetY: 5,
      },
      itemStyle: {
        normal: {
          color: colorList[3],
          borderColor: colorList[3],
        },
      },
    },
    {
      name: '建议',
      type: 'line',
      data: [20, 80, 150, 30, 60, 50, 50, 20],
      symbolSize: 1,
      symbol: 'circle',
      smooth: true,
      showSymbol: false,
      lineStyle: {
        width: 2,
        color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
          {
            offset: 0,
            color: '#ffeb86',
          },
          {
            offset: 1,
            color: '#f2d750',
          },
        ]),
        shadowColor: 'rgba(255, 235, 134, .5)',
        shadowBlur: 5,
        shadowOffsetY: 5,
      },
      itemStyle: {
        normal: {
          color: colorList[4],
          borderColor: colorList[4],
        },
      },
    },
  ],
};

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

<style lang="scss" scoped>
.echarts{
  width: 100%;
  height: 100%;
}
</style>
