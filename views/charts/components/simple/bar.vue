<template>
  <div :id="id"  :style="{height:height,width:width}" :class="className"/>
</template>
<script>
import * as echarts from "echarts";
const options = {
  grid: {
    top: 10,
    left: '2%',
    right: '2%',
    bottom: '2%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
};
export default {
  props:{
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
    },
    chart:null
  },
  data(){
    return{
      options
    }
  },
  methods:{
    initChart(){
     this.$nextTick(()=>{
       let chart = echarts.init(document.getElementById(this.id))
       chart.setOption(this.options)
       return chart
     })
    }
  },
  mounted(){
    this.chart = this.initChart()
    window.addEventListener('resize',function (){
      this.chart&&this.chart.resize()
    })
  }
}
</script>
