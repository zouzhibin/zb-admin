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
  let color = ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0']
  let echartData = [
    {
      name: '设备1',
      value: '3720',
    },
    {
      name: '设备2',
      value: '2920',
    },
    {
      name: '设备3',
      value: '2200',
    },
    {
      name: '设备4',
      value: '1420',
    },
  ]
  let formatNumber = function (num) {
    let reg = /(?=(\B)(\d{3})+$)/g
    return num.toString().replace(reg, ',')
  }

  const options = {
    backgroundColor: '#364686',
    color: color,
    title: [
      {
        text: '设备数',
        x: 'center',
        top: '40%',
        textStyle: {
          color: '#fff',
          fontSize: 18,
          fontWeight: '100',
        },
      },
      {
        text: '60%',
        x: 'center',
        top: '50%',
        textStyle: {
          fontSize: 30,
          color: '#00f0ff',
          foontWeight: '500',
        },
      },
    ],
    polar: {
      radius: ['44%', '50%'],
      center: ['50%', '50%'],
    },
    angleAxis: {
      max: 100,
      show: false,
    },
    radiusAxis: {
      type: 'category',
      show: true,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    series: [
      {
        type: 'pie',
        radius: ['55%', '67%'],
        center: ['50%', '50%'],
        data: echartData,
        hoverAnimation: false,
        itemStyle: {
          normal: {
            borderColor: '#364684',
            borderWidth: 2,
          },
        },
        labelLine: {
          normal: {
            length: 60,
            length2: 60,
            lineStyle: {
              color: '#e6e6e6',
            },
          },
        },
        label: {
          normal: {
            formatter: (params) => {
              return (
                '{icon|●}{name|' + params.name + '}\n{value|' + formatNumber(params.value) + '}'
              )
            },
            padding: [0, -70, 30, -70],
            rich: {
              icon: {
                fontSize: 14,
                align: 'left',
                padding: [4, 0, 0, 0],
              },
              name: {
                fontSize: 14,
                align: 'left',
                padding: [4, 0, 0, 0],
                color: '#fff',
              },
              value: {
                fontSize: 18,
                fontWeight: 'bold',
                color: '#fff',
                align: 'left',
              },
            },
          },
        },
      },
      {
        name: '',
        type: 'pie',
        startAngle: 90,
        radius: '50%',
        hoverAnimation: false,
        center: ['50%', '50%'],
        itemStyle: {
          normal: {
            labelLine: {
              show: false,
            },
            color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
              {
                offset: 1,
                color: 'rgba(50,171,241, 1)',
              },
              {
                offset: 0,
                color: 'rgba(55,70,130, 0)',
              },
            ]),
            // borderWidth: 1,
            // borderColor: '',
            shadowBlur: 10,
            // shadowColor: 'rgba(55,70,130, 1)'
          },
        },
        data: [
          {
            value: 100,
          },
        ],
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
