<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>
<script lang="ts" setup>
import 'echarts-liquidfill/src/liquidFill.js'
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
    legend: {
      data: [
        '3-11岁任务数',
        '3-11岁全程接种量',
        '60岁任务数',
        '60岁全程接种量',
        '80岁任务数',
        '80岁全程接种量',
        '完成率'
      ]
    },
    xAxis: {
      type: 'category',
      data: ['街道1', '街道2', '街道3', '街道4', '街道5', '街道6', '街道7']
    },
    yAxis: [
      { type: 'value' },
      {
        type: 'value',
        name: '%',
        // min: 0,
        // max: 100,
        nameTextStyle: {
          color: '#ccc',
          padding: [0, 0, 10, -30]
        },
        splitNumber: 5,
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            width: 1,
            // 使用深浅的间隔色
            color: ['#566471', '#566471']
          }
        },
        axisLabel: {
          show: true,
          textStyle: {
            fontSize: 12
          }
        }
      }
    ],
    // tooltip: {
    //   trigger: 'axis',

    // },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      textStyle: {
        color: '#fff',
        align: 'left',
        fontSize: 14
      },
      axisLine: {//x坐标轴轴线
        show: true,
        lineStyle: {//x坐标轴轴线样式
          color: '#000',//'#ccc' | 'rgb(128, 128, 128)' | 'rgba(128, 128, 128, 0.5)'，设置标签颜色
        }
      },

      backgroundColor: 'rgba(0,0,0,0.8)',
      formatter: function (params) {
        console.log(params);
        let str = params[0].name + '<br />';
        console.log(str);
        params.forEach((item) => {
          console.log(item.seriesName);
          if (item.value) {
            if (item.seriesName.indexOf('岁全程接种量') != -1) {
              str += `<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;left:5px;background-color: ${item.color}
                                    "></span>
                                         ${item.seriesName}
                                         :
                                       ${item.value}人  <br/>
                                         &nbsp; &nbsp;  全程完成率
                                       : ${item.value/100}%
                                        <br/><br/>`;
            }else if (item.seriesName.indexOf('岁任务数') != -1) {
              str += `<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;left:5px;background-color: ${item.color}
                                    "></span>
                                         ${item.seriesName}
                                         :
                                       ${item.value}人
                                        <br/>`;
            }else{
              str += `<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;left:5px;background-color: ${item.color}
                                    "></span>
                                        ${item.seriesName}
                                        :
                                      ${item.value}%
                                        <br/>`;
            }
          }
        });
        return str;
      }
    },

    series: [
      {
        name: '3-11岁任务数',
        data: [150, 230, 224, 218, 135, 147, 260],
        stack: 'BB',
        type: 'bar'
      },
      {
        name: '3-11岁全程接种量',
        data: [150, 230, 224, 218, 135, 147, 260],
        stack: 'BB',
        type: 'bar'
      },
      {
        name: '60岁任务数',
        data: [150, 230, 224, 218, 135, 147, 260],
        stack: 'AA',
        type: 'bar'
      },
      {
        name: '60岁全程接种量',
        data: [880, 30, 124, 118, 35, 47, 160],
        stack: 'AA',
        type: 'bar'
      },
      {
        name: '80岁任务数',
        data: [660, 30, 124, 118, 35, 47, 160],
        stack: 'Ad',
        type: 'bar'
      },
      {
        name: '80岁全程接种量',
        data: [880, 30, 124, 118, 35, 47, 160],
        stack: 'Ad',
        type: 'bar'
      },
      {
        name: '完成率',
        data: [50, 130, 124, 18, 35, 47, 160],
        yAxisIndex:1,
        type: 'line',
        markLine: {
          symbol: 'none',
          itemStyle: {
            normal: {
              lineStyle: {
                type: 'dotted'
              }
            }
          },
          data: [{ type: 'average', name: 'Avg' + '%' }]
        },
        //   symbol: 'none',
        itemStyle: {
          normal: {
            lineStyle: {
              width: 2,
              type: 'solid' //'dotted'虚线 'solid'实线
            }
          }
        }
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
