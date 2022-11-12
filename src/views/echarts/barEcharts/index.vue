<template>
  <div class="app-container">
    <div ref="chartsRef" class="app-echarts"></div>
  </div>
</template>

<script lang="ts" setup>
import {ref,onMounted} from "vue";
import { EChartsType } from 'echarts/core'
import * as echarts from 'echarts'
const chartsRef = ref<HTMLElement | null>()

let XData = ['2022-01', '2022-02', '2022-03', '2022-04', '2022-05', '2022-06', '2022-07', '2022-08', '2022-09', '2022-10', '2022-11', '2022-12']
let valueData = {
  jfsbs: [805, 860, 400, 400, 400, 400, 990, 985, 990, 850, 560, 772],
  md: [300, 390, 290, 285, 290, 288, 790, 795, 795, 760, 660, 480],
  znhbl: [95, 78, 50, 60, 85, 78, 76, 70, 65, 90, 74, 66],
}
let options = {

  tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      shadowStyle: {
        shadowColor: 'rgba(60, 161, 246, 0.43)',
        shadowBlur: 10
      }
    },
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(60, 161, 246, 0.43)',
    borderWidth: 1,
    shadowColor: ' rgba(111, 193, 253, 0.35)',
    shadowBlur: 10,
    formatter: function (params) {
      // return params.value;
      let strName1 = params[0].seriesName
      let value1 = params[0].value
      let strName2 = params[1].seriesName
      let value2 = params[1].value
      let strName3 = params[2].seriesName
      let value3 = params[2].value
      return '<div><span style="color:rgba(36, 36, 36, 1);display: inline-block;width: 86px;">密度数</span><span style="color:#5DB6FB">' + value1 + '</span></div><div><span style="color:rgba(36, 36, 36, 1);display: inline-block;width: 86px;">设备数</span><span style="color:#5DB6FB">' + value2 + '</span></div><div><span style="color:rgba(36, 36, 36, 1);display: inline-block;width: 86px;">智能化比例</span><span style="color:#5DB6FB">' + value3 + '%</span></div>'
    },
    textStyle: {
      rich: {
        name: {
          color: "rgba(36, 36, 36, 1)",
          fontSize: 13,
          align: 'center'
        },
        percent: {
          fontFamily: 'DIN',
          fontWeight: 500,
          fontSize: 22,
          color: '#1D91F5',
          align: 'center'
        },
      }
    }
  },
  grid: {
    left: '2%',
    right: '4%',
    bottom: '14%',
    top: '16%',
    containLabel: true
  },
  legend: {

    top: '5%',
    textStyle: {
      color: "rgba(128, 125, 125, 1)",
      fontSize: 12
    },
    icon:'rect',
    itemWidth: 12,
    itemHeight: 12,
    itemGap: 25,
  },
  xAxis: {
    type: 'category',
    data: XData,
    axisLine: {
      lineStyle: {
        color: 'rgba(204, 204, 204, 1)'
      }
    },
    axisLabel: {

      textStyle: {
        color: "rgba(185, 185, 185, 1)"
      }
    },
    axisTick:{
      show:false,
    },
  },
  yAxis: [{
    type: 'value',
    axisLabel: {
      textStyle: {
        color: "rgba(185, 185, 185, 1)"
      }
    },
    axisLine: {
      show:false,

    },
    axisTick:{
      show:false,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(237, 237, 237, 1)',
        type:'dotted'
      }
    },
  },
    {
      type: "value",
      nameTextStyle: {
        color: "rgba(185, 185, 185, 1)"
      },
      position: "right",
      axisLine: {
        show:false,

      },
      splitLine: {
        show: false,
      },
      axisTick:{
        show:false,
      },
      axisLabel: {
        show: true,
        formatter: "{value} %", //右侧Y轴文字显示
        textStyle: {
          color: "rgba(185, 185, 185, 1)"
        }
      }
    }
  ],

  series: [{
    name: '新增基桩数',
    type: 'bar',
    barWidth: '12px',
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(141, 113, 226, 1)'
        }, {
          offset: 1,
          color: 'rgba(141, 113, 226, 0.2)'
        }]),

      }
    },
    data: valueData.jfsbs
  },
    {
      name: '本月检测数',
      type: 'bar',
      barWidth: '12px',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(116, 178, 252, 1)'
          }, {
            offset: 1,
            color: 'rgba(116, 178, 252, 0.2)'
          }]),

        }

      },
      data: valueData.md
    }, {
      name: "累计完成率",
      type: "line",
      smooth: true,
      yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用

      symbol: "emptycircle", //标记的图形为实心圆
      symbolSize: 0, //标记的大小

      itemStyle: {
        color: 'rgba(65, 197, 95, 1)',
      },
      areaStyle: {
        //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
        color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(65, 197, 95, 0.4)',
              },
              {
                offset: 1,
                color: 'rgba(255,255,255, 0)',
              },
            ],
            false
        ),
      },

      data: valueData.znhbl
    }
  ]
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
.app-echarts{
  width: 100%;
  height: 100%;
  background: white;
}
</style>
