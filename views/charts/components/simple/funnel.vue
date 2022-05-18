<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>
<script>
import * as echarts from "echarts";
const options = {
  grid: {
    top: 0,
    left: '2%',
    right: '2%',
    bottom: '0%',
    containLabel: true
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c}%'
  },
  toolbox: {
    feature: {
      dataView: { readOnly: false },
      restore: {},
      saveAsImage: {}
    }
  },
  legend: {
    show:false,
    data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
  },
  series: [
    {
      name: 'Funnel',
      type: 'funnel',
      left: '10%',
      top: 30,
      bottom: 10,
      width: '80%',
      min: 0,
      max: 100,
      minSize: '0%',
      maxSize: '100%',
      sort: 'descending',
      gap: 2,
      label: {
        show: true,
        position: 'inside'
      },
      labelLine: {
        length: 10,
        lineStyle: {
          width: 1,
          type: 'solid'
        }
      },
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1
      },
      emphasis: {
        label: {
          fontSize: 20
        }
      },
      data: [
        { value: 60, name: 'Visit' },
        { value: 40, name: 'Inquiry' },
        { value: 20, name: 'Order' },
        { value: 80, name: 'Click' },
        { value: 100, name: 'Show' }
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
