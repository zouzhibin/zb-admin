<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>
<script lang="ts" setup>
import * as echarts from "echarts";
import {EChartsType} from "echarts/core";
import {onMounted} from "vue";

let props = defineProps({
  className: {
    type: String,
    default: 'chart'
  },
  config:{
    type: Object,
    default: ()=>{}
  },
  id: {
    type: String,
    default: 'chart'
  },
  width: {
    type: String,
    default: '200px'
  },
  height: {
    type: String,
    default: '200px'
  }
})
const options = {
  backgroundColor: '#031d33',
  legend: {
    top: '20',
    x: 'center',
    textStyle: {
      fontSize: 16,
      color: 'rgba(101, 213, 255, 1)',
    },
    icon:
        'path://M512 881.777778 512 881.777778C716.222629 881.777778 881.777778 716.222629 881.777778 512 881.777778 307.777371 716.222629 142.222222 512 142.222222 307.777373 142.222222 142.222222 307.777371 142.222222 512 142.222222 716.222629 307.777373 881.777778 512 881.777778L512 881.777778ZM512 1024 512 1024C229.230208 1024 0 794.769789 0 512 0 229.230211 229.230208 0 512 0 794.769789 0 1024 229.230211 1024 512 1024 794.769789 794.769789 1024 512 1024L512 1024Z',
    itemWidth: 8, // 设置宽度
    itemHeight: 8, // 设置高度、
    itemGap: 12, // 设置间距
  },
  tooltip: {
    show: true,
    trigger: 'axis', //axis , item
    backgroundColor: 'RGBA(0, 49, 85, 1)',
    borderColor: 'rgba(0, 151, 251, 1)',
    borderWidth: 1,
    borderRadius: 0,
    textStyle: {
      color: '#BCE9FC',
      fontSize: 16,
      align: 'left',
    },
  },
  grid: {
    right: '5%',
    top: '10%',
    left: '5%',
    bottom: '5%',
    containLabel: true,
  },
  xAxis: {
    name: '部门',
    nameTextStyle: {
      color: '#65d5ff',
    },
    type: 'category',
    boundaryGap: true,
    data: ['HWS', 'SE', 'V&V', 'HQ', 'RPA', 'SC', 'RPA', 'PM', 'CCB', 'RSW'],
    axisLabel: {
      //坐标轴刻度标签的相关设置。
      interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
      //	margin:15,
      textStyle: {
        color: '#65D5FF',
        fontStyle: 'normal',
        fontSize: 16,
      },
    },
    axisTick: {
      //坐标轴刻度相关设置。
      show: false,
    },
    axisLine: {
      //坐标轴轴线相关设置
      lineStyle: {
        color: 'rgba(77, 128, 254, 0.2)',
      },
    },
    splitLine: {
      //坐标轴在 grid 区域中的分隔线。
      show: true,
      lineStyle: {
        color: 'rgba(77, 128, 254, 0.2)',
      },
    },
  },
  dataZoom: [
    {
      type: 'slider',
      show: true,
      bottom: '20px',
      borderColor: '#07417a',
      backgroundColor: 'transparent',
      dataBackground: {
        lineStyle: {
          color: 'transparent',
          shadowOffsetY: 0,
        },
        areaStyle: {
          color: 'transparent',
          shadowOffsetY: 0,
        },
      },
      // 拖拽手柄样式 svg 路径
      handleIcon:
          'M512 512m-208 0a6.5 6.5 0 1 0 416 0 6.5 6.5 0 1 0-416 0Z M512 192C335.264 192 192 335.264 192 512c0 176.736 143.264 320 320 320s320-143.264 320-320C832 335.264 688.736 192 512 192zM512 800c-159.072 0-288-128.928-288-288 0-159.072 128.928-288 288-288s288 128.928 288 288C800 671.072 671.072 800 512 800z',
      handleColor: '#aab6c6',
      height: 6,
      handleSize: 12,
      showDataShadow: false,
      filterMode: 'filter',
      textStyle: {
        color: '#ccc',
      },
      start: 0,
      end: 100,
    },
  ],
  yAxis: [
    {
      name: '个',
      nameTextStyle: {
        color: '#65d5ff',
      },
      type: 'value',
      splitNumber: 3,
      axisLabel: {
        textStyle: {
          color: '#65D5FF',
          fontStyle: 'normal',
          fontSize: 16,
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(77, 128, 254, 0.2)',
        },
      },
    },
    {
      name: '',
      nameTextStyle: {
        color: '#65d5ff'
      },
      min: 0,
      splitLine: {
        show: true,
        lineStyle: {
          color: '#233653'
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#233653'
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#78bdf5'
        },
        formatter: function(value) {
          return value * 100 + '%'
        }
      },
      axisTick: {
        show: false
      }
    }
  ],
  series: [
    {
      name: '变更',
      type: 'pictorialBar',
      barWidth: '50%',
      label: {
        normal: {
          show: false,
        },
      },
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(255, 64, 0, 0.8)', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(0, 34, 66, 0.2)', // 100% 处的颜色
              },
            ],
            globalCoord: false, // 缺省为 false
          }, //渐变颜色
        },
      },
      symbol:
          'path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z',

      data: [23, 44, 22, 27, 12, 2, 3, 23, 12, 32],
    },
    {
      name: '新增',
      type: 'pictorialBar',
      barWidth: '50%',
      label: {
        normal: {
          show: false,
        },
      },
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(48, 236, 166,0.8)', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(0, 34, 66, 0.2)', // 100% 处的颜色
              },
            ],
            globalCoord: false, // 缺省为 false
          }, //渐变颜色
        },
      },
      symbol:
          'path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z',

      data: [13, 24, 31, 12, 7, 3, 1, 23, 2, 42],
    },
    {
      name: '废弃',
      type: 'pictorialBar',
      barWidth: '50%',
      label: {
        normal: {
          show: false,
        },
      },
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(161, 159, 158, 0.8)', // 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(133, 133, 196, 0.2)', // 100% 处的颜色
              },
            ],
            globalCoord: false, // 缺省为 false
          }, //渐变颜色
        },
      },
      symbol:
          'path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z',

      data: [4, 3, 12, 4, 15, 2, 3, 12, 34, 23],
    },
    {
      name: '变化占比',
      type: 'line',
      data: [0.3,0.5,0.3,0.35,0.15,0.05,0.05,0.3,0.35,0.4,0.5],
      smooth: true,
      symbol: 'none',
      lineStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(255, 227, 168, 0.3)'
          }, {
            offset: 0.5,
            color: 'rgba(255, 227, 168, 1)'
          }, {
            offset: 1,
            color: 'rgba(255, 227, 168, 0.3)'
          }]),
          shadowColor: 'rgba(255, 120, 0,1)',
          shadowBlur: 10
        }
      },
      yAxisIndex: 1
    },
    {
      name: '变化占比',
      yAxisIndex: 1,
      type: 'effectScatter',
      showEffectOn: 'render',
      rippleEffect: {
        period: 5,
        scale: 3,
        brushType: 'stroke'
      },
      hoverAnimation: true,
      itemStyle: {
        normal: {
          color: 'rgba(217,247,249,1)',
          shadowBlur: 10,
          shadowColor: '#333'
        }
      },
      data: []
    }
  ],
};
let chart:EChartsType;
const initChart =()=> {
  let chart = echarts.init(document.getElementById(props.id))
  chart.setOption(options)
  return chart
}
onMounted(()=>{
  chart = initChart()
  window.addEventListener('resize',function (){
    chart&&chart.resize()
  })

})
</script>
