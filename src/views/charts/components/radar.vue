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
  grid: {
    top: 10,
    left: '2%',
    right: '2%',
    bottom: '2%',
    containLabel: true
  },
  // title: {
  //   text: 'Basic Radar Chart'
  // },
  legend: {
    show:false,
    data: ['Allocated Budget', 'Actual Spending']
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: 'Sales', max: 6500 },
      { name: 'Administration', max: 16000 },
      { name: 'Information Technology', max: 30000 },
      { name: 'Customer Support', max: 38000 },
      { name: 'Development', max: 52000 },
      { name: 'Marketing', max: 25000 }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: 'Allocated Budget'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: 'Actual Spending'
        }
      ]
    }
  ]
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
