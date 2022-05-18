<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>
<script >
import * as echarts from "echarts";
const options = {
  grid: {
    top: 10,
    left: '2%',
    right: '2%',
    bottom: '2%',
    containLabel: true
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '0%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
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
    }
  },
  data(){
    return{
      options
    }
  },
  methods:{
    initChart(){
      let chart = echarts.init(document.getElementById(this.id))
      chart.setOption(this.options)
      return chart
    }
  },
  mounted(){
    this.$nextTick(()=>{
      let chart = this.initChart()
      window.addEventListener('resize',function (){
        chart&&chart.resize()
      })
    })
  }
}
</script>
