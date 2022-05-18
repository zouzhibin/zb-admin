<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
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
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
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
