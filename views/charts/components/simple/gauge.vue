<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>
<script >
import * as echarts from "echarts";

const options = {

  tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },
  series: [
    {
      name: 'Pressure',
      type: 'gauge',
      detail: {
        formatter: '{value}'
      },
      data: [
        {
          value: 50,
          name: 'SCORE'
        }
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
