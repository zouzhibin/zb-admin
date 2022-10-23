

<template>
  <div class="echarts" ref="echarts"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data(){
    return{
      chart:null
    }
  },
  methods:{
    initEcharts(){
      let option = {
        series: [
          {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '80%'],
            radius: '100%',
            min: 0,
            max: 1,
            z: 5,
            splitNumber: 12,
            axisLine: {
              show: true,
              lineStyle: {
                width: 6,
                color: [
                  [0.12, "#d92d4d"],
                  [0.35, "#eb8349"],
                  [0.63, "#e6e462"],
                  [0.8, "#74c7da"],
                  [1, "#67b45a"],
                ]
              }
            },
            axisTick: {
              splitNumber: 13,
              show: true,
              lineStyle: {
                color: "auto",
                width: 2,
              },
              length: 17,
            },
            splitLine: {
              length: 25,
              lineStyle: {
                color: 'auto',
                width: 8
              }
            },
            axisLabel: {
              color: '#a0a7b8',
              fontSize: 20,
              distance: -60,
              rotate: 'tangential',
              formatter: function (value) {
                var value = value.toFixed(2);
                if (value == 0.0) {
                  return "危";
                } else if (value == 0.25) {
                  return "差";
                } else if (value == 0.5) {
                  return "中";
                } else if (value == 0.75) {
                  return "良";
                } else if (value == 1.0) {
                  return "优";
                } else {
                  return "";
                }
              }
            },
            title: {
              offsetCenter: [0, '-10%'],
              fontSize: 20
            },
            anchor: {
              show: true,
              showAbove: true,
              size: 25,
              itemStyle: {
                borderWidth: 10
              }
            },
            detail: {
              fontSize: 30,
              offsetCenter: [0, '-25%'],
              valueAnimation: true,
              formatter: function (value) {
                return Math.round(value * 100);
              },
              color: 'auto'
            },
            data: [
              {
                value: 0.7,
                name: 'Grade Rating'
              }
            ]
          }
        ]
      };


      this.chart = echarts.init(this.$refs.echarts)
      this.chart.setOption(option)
    }
  },
  mounted() {
    this.initEcharts()
  }
}
</script>
<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
