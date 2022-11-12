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

let options  = {

  normal: {
    top: 200,
    left: 300,
    width: 500,
    height: 400,
    zIndex: 6,
    backgroundColor: "",
  },
  color: ["rgba(245, 166, 35, 1)", "rgba(19, 173, 255, 1)"],
  title: {
    show: true,
    text: "基础雷达图",
    left: "40%",
    top: "1%",
    textStyle: {
      fontSize: 18,
      // color: "#fff",
      fontStyle: "normal",
      fontWeight: "normal",
    },
  },
  // tooltip: {
  //   show: true,
  //   trigger: "item",
  // },
  legend: {
    show: true,
    icon: "circle",
    left: "35%",
    top: "90%",
    orient: "horizontal",
    textStyle: {
      fontSize: 14,
      // color: "#fff",
    },
    data: ["数据1", "数据2"],
  },
  radar: {
    center: ["50%", "50%"],
    radius: "70%",
    startAngle: 90,
    splitNumber: 4,
    shape: "circle",
    splitArea: {
      areaStyle: {
        color: ["transparent"],
      },
    },
    axisLabel: {
      show: false,
      fontSize: 18,
      color: "#fff",
      fontStyle: "normal",
      fontWeight: "normal",
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "grey", //
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "grey", //
      },
    },
    indicator: [
      {
        name: "道路结冰",
        max: 88,
      },
      {
        name: "暴雪",
        max: 88,
      },
      {
        name: "暴雨",
        max: 88,
      },
      {
        name: "冰雹",
        max: 88,
      },
      {
        name: "大风",
        max: 88,
      },
      {
        name: "大雾",
        max: 88,
      },
      {
        name: "高温",
        max: 88,
      },
      {
        name: "干旱",
        max: 88,
      },
      {
        name: "寒潮",
        max: 88,
      },
      {
        name: "雷电",
        max: 88,
      },
      {
        name: "霾",
        max: 88,
      },
      {
        name: "沙尘暴",
        max: 88,
      },
      {
        name: "霜冻",
        max: 88,
      },
      {
        name: "台风",
        max: 88,
      },
      {
        name: "洪水",
        max: 88,
      },
    ],
  },
  series: [
    {
      name: "数据1",
      type: "radar",
      symbol: "circle",
      symbolSize: 10,
      areaStyle: {
        normal: {
          color: "rgba(245, 166, 35, 0.4)",
        },
      },
      itemStyle: {
        color: "rgba(245, 166, 35, 1)",
        borderColor: "rgba(245, 166, 35, 0.3)",
        borderWidth: 10,
      },
      lineStyle: {
        normal: {
          type: "dashed",

          color: "rgba(245, 166, 35, 1)",
          width: 2,
        },
      },
      data: [[80, 50, 55, 80, 50, 80, 48, 43, 60, 78, 60, 40, 42, 44, 65]],
    },
    {
      name: "数据2",
      type: "radar",
      symbol: "circle",
      symbolSize: 10,
      itemStyle: {
        normal: {
          color: "rgba(19, 173, 255, 1)",
          borderColor: "rgba(19, 173, 255, 0.4)",
          borderWidth: 10,
        },
      },
      areaStyle: {
        normal: {
          color: "rgba(19, 173, 255, 0.5)",
        },
      },
      lineStyle: {
        normal: {
          color: "rgba(19, 173, 255, 1)",
          width: 2,
          type: "dashed",
        },
      },
      data: [[60, 60, 65, 60, 70, 40, 80, 63, 68, 60, 77, 60, 80, 62, 80]],
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
.app-echarts{
  width: 100%;
  height: 100%;
  background: white;
}
</style>
