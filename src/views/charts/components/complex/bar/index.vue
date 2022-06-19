<template>
  <div class="item-charts">
    <bar-charts width="100%" height="100%" :config="lineConfig"/>
  </div>
</template>
<script setup lang="ts">
import BarCharts from './components/bar.vue'
import { reactive } from 'vue'
const data = [154, 230, 224, 218, 135, 147, 260]
const color = ['#fa796f','#54c1fb','#ca6cd4','#59dcc1','#09a4ea','#e98f4d','#ea8e49']
const dataOptions = []

data.forEach((item,index) => {
  let obj = {
    value: data[index],
    itemStyle: {
      color: color[index]
    }
  }
  dataOptions.push(obj)
})

const lineConfig = reactive({
  color,
  grid: {
    top: '10%',
    left: '3%',
    right: '4%',
    bottom: '10%',
    containLabel: true
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderWidth: 0,
    borderColor: 'rgba(0,0,0,0.7)',
    formatter: (name, val) => {
      const tipHtml = `
                     <div class="m-info" style=" opacity: 0.95;font-size: 12px; color: white;" >
                         <div class="title" ></div>
                         <div class="title" >完成占比${name[0].value}</div>
                 </div>`
      return tipHtml
    }
  },
  yAxis: {
    // 设置坐标轴的 文字样式
    axisLabel: {
      color: '#bbdaff',
      margin: 20 // 刻度标签与轴线之间的距离。
    },
    axisTick: { // 取消坐标轴刻度线
      show: false
    },
    // 坐标轴轴线相关设置。
    splitLine: {
      lineStyle: {
        color: '#2d5baf'
      }
    }
  },
  xAxis: {
    splitLine: {
      show: false
    },
    // 坐标轴轴线相关设置。
    axisLine: {
      lineStyle: {
        color: '#2d5baf'
      }
    },
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLabel: { // 设置坐标轴的 文字样式
      color: '#bbdaff',
      margin: 20 // 刻度标签与轴线之间的距离。
    },

    axisTick: { // 取消坐标轴刻度线
      show: false
    }
  },
  series: [
    {
      data: dataOptions,
      type: 'bar',
      barMaxWidth: 18,
      markLine: {
        silent: true
      },


    }]
})

</script>
<style lang="scss" scoped>
.item-charts{
  height: 100%;
  width: 100%;
}
</style>
