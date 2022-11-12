<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>
<script lang="ts" setup>
  import 'echarts-liquidfill/src/liquidFill.js'
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
  const options = {
    grid: {
      top: 10,
      left: '2%',
      right: '2%',
      bottom: '2%',
      containLabel: true,
    },
    backgroundColor: '#0F224C', //背景色
    series: [
      {
        type: 'liquidFill', //水位图
        radius: '80%', //显示比例
        center: ['50%', '50%'], //中心点
        amplitude: 20, //水波振幅
        data: [0.5, 0.5, 0.5], // data个数代表波浪数
        color: [
          {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#446bf5',
              },
              {
                offset: 1,
                color: '#2ca3e2',
              },
            ],
            globalCoord: false,
          },
        ], //波浪颜色
        backgroundStyle: {
          borderWidth: 1, //外边框
          // borderColor: '#23cc72', //边框颜色
          color: 'RGBA(51, 66, 127, 0.7)', //边框内部填充部分颜色
        },
        label: {
          //标签设置
          position: ['50%', '45%'],
          formatter: '50%', //显示文本,
          textStyle: {
            fontSize: '52px', //文本字号,
            color: '#fff',
          },
        },
        outline: {
          // show: false
          borderDistance: 0,
          itemStyle: {
            borderWidth: 2,
            borderColor: '#112165',
          },
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
