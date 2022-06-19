
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
var data = [],data2=[];
var trafficWay = [
  {
    name: '病假',
    value: 20
  },{
    name: '事假',
    value: 1
  },{
    name: '婚假',
    value: 30
  },{
    name: '丧假',
    value: 40
  },{
    name: '年休假',
    value: 40
  }];
var color=['#2A8BFD','#BAFF7F','#00FAC1','#00CAFF','#FDE056','#4ED33C','#FF8A26','#FF5252','#9689FF','#CB00FF']
for (var i = 0; i < trafficWay.length; i++) {
  data.push({
    value: trafficWay[i].value,
    name: trafficWay[i].name,
    itemStyle: {
      normal: {
        borderWidth: 8,
        shadowBlur: 20,
        borderRadius:20,
        borderColor:color[i],
        shadowColor: color[i]
      }
    }
  }, {
    value: 5,
    name: '',
    itemStyle: {
      normal: {
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0

      }
    }
  });
  data2.push({
        value: trafficWay[i].value,
        name: trafficWay[i].name,
      },
      {
        value: 5,
        name: '',
        itemStyle: {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0,
            opacity:0.2

          }
        }
      }
  )
}

let angle = 0;//角度，用来做简单的动画效果的

const option = {
  backgroundColor:"#061740",
  color : color,
  legend:{
    right:'10%',
    top:'10%',
    icon:'rect',
    itemWidth:15,
    itemHeight:15,
    textStyle:{
      color:'#ffffff',
    }
  },
  series: [
    {//外线1
      name: "ring5",
      type: 'custom',
      coordinateSystem: "none",
      renderItem: function(params, api) {
        return {
          type: 'arc',
          shape: {
            cx: api.getWidth() / 3,
            cy: api.getHeight() / 2,
            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
            startAngle: (0+angle) * Math.PI / 180,
            endAngle: (90+angle) * Math.PI / 180
          },
          style: {
            stroke: '#4EE9E6',
            fill: "transparent",
            lineWidth: 1.5
          },
          silent: true
        };
      },
      data: [0]
    },
    {//内线1
      name: "ring5",
      type: 'custom',
      coordinateSystem: "none",
      renderItem: function(params, api) {
        return {
          type: 'arc',
          shape: {
            cx: api.getWidth() / 3,
            cy: api.getHeight() / 2,
            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
            startAngle: (180+angle) * Math.PI / 180,
            endAngle: (270+angle) * Math.PI / 180
          },
          style: {
            stroke: "#4EE9E6",
            fill: "transparent",
            lineWidth: 1.5
          },
          silent: true
        };
      },
      data: [0]
    },
    {//外线2
      name: "ring5",
      type: 'custom',
      coordinateSystem: "none",
      renderItem: function(params, api) {
        return {
          type: 'arc',
          shape: {
            cx: api.getWidth() / 3,
            cy: api.getHeight() / 2,
            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
            startAngle: (270+-angle) * Math.PI / 180,
            endAngle: (40+-angle) * Math.PI / 180
          },
          style: {
            stroke: "#4EE9E6",
            fill: "transparent",
            lineWidth: 1.5
          },
          silent: true
        };
      },
      data: [0]
    },
    {//外线2
      name: "ring5",
      type: 'custom',
      coordinateSystem: "none",
      renderItem: function(params, api) {
        return {
          type: 'arc',
          shape: {
            cx: api.getWidth() / 3,
            cy: api.getHeight() / 2,
            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
            startAngle: (90+-angle) * Math.PI / 180,
            endAngle: (220+-angle) * Math.PI / 180
          },
          style: {
            stroke: "#4EE9E6",
            fill: "transparent",
            lineWidth: 1.5
          },
          silent: true
        };
      },
      data: [0]
    },
    {//绿点1
      name: "ring5",
      type: 'custom',
      coordinateSystem: "none",
      renderItem: function(params, api) {
        let x0 = api.getWidth() / 3;
        let y0 = api.getHeight() / 2;
        let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
        let point = getCirlPoint(x0, y0, r, (90+-angle))
        return {
          type: 'circle',
          shape: {
            cx: point.x,
            cy: point.y,
            r: 4
          },
          style: {
            stroke: "#66FFFF",//粉
            fill: "#66FFFF"
          },
          silent: true
        };
      },
      data: [0]
    },
    {//绿点2
      name: "ring5",  //绿点
      type: 'custom',
      coordinateSystem: "none",
      renderItem: function(params, api) {
        let x0 = api.getWidth() / 3;
        let y0 = api.getHeight() / 2;
        let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
        let point = getCirlPoint(x0, y0, r, (270+-angle))
        return {
          type: 'circle',
          shape: {
            cx: point.x,
            cy: point.y,
            r: 4
          },
          style: {
            stroke: "#66FFFF",//粉
            fill: "#66FFFF"
          },
          silent: true
        };
      },
      data: [0]
    },
    {//绿点3
      name: "ring5",
      type: 'custom',
      coordinateSystem: "none",
      renderItem: function(params, api) {
        let x0 = api.getWidth() / 3;
        let y0 = api.getHeight() / 2;
        let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6;
        let point = getCirlPoint(x0, y0, r, (90+angle))
        return {
          type: 'circle',
          shape: {
            cx: point.x,
            cy: point.y,
            r: 4
          },
          style: {
            stroke: "#66FFFF",//粉
            fill: "#66FFFF"
          },
          silent: true
        };
      },
      data: [0]
    },
    {//绿点4
      name: "ring5",  //绿点
      type: 'custom',
      coordinateSystem: "none",
      renderItem: function(params, api) {
        let x0 = api.getWidth() / 3;
        let y0 = api.getHeight() / 2;
        let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6;
        let point = getCirlPoint(x0, y0, r, (270+angle))
        return {
          type: 'circle',
          shape: {
            cx: point.x,
            cy: point.y,
            r: 4
          },
          style: {
            stroke: "#66FFFF",//粉
            fill: "#66FFFF"
          },
          silent: true
        };
      },
      data: [0]
    },
    {
      name: '',
      type: 'pie',
      clockWise: false,
      radius: ['98%', '95%'],
      hoverAnimation: false,
      center:['33.33%','50%'],
      top:"center",
      itemStyle: {
        normal:{
          label: {
            show:false
          }
        }
      },
      data:data
    },
    {
      type: 'pie',
      top:"center",
      startAngle:90,
      clockwise:false,
      center:['33.33%','50%'],
      legendHoverLink:false,
      hoverAnimation: false,
      radius: ['94%', '55%'],
      itemStyle: {
        opacity:0.15
      },
      label: {
        show: false,
        position: 'center'
      },
      labelLine: {
        show: false
      },
      data:data2
    },
    {
      name: '',
      type: 'pie',
      clockWise: false,
      center:['33.33%','50%'],
      radius: ['39%', '38%'],
      hoverAnimation: false,
      top:"center",
      itemStyle: {
        normal:{
          label: {
            show:false
          }
        }
      },
      data:data
    },
  ]
};
//获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
function getCirlPoint(x0, y0, r, angle) {
  let x1 = x0 + r * Math.cos(angle * Math.PI / 180)
  let y1 = y0 + r * Math.sin(angle * Math.PI / 180)
  return {
    x: x1,
    y: y1
  }
}


let chart:EChartsType;
const initChart =()=> {
  let chart = echarts.init(document.getElementById(props.id))
  draw(chart)
  return chart
}
function draw(chart){
  angle = angle+3
  chart.setOption(option, true)
  //window.requestAnimationFrame(draw);
}

onMounted(()=>{
  chart = initChart()

  setInterval(function() {
    //用setInterval做动画感觉有问题
    draw(chart)
  }, 100);

  window.addEventListener('resize',function (){
    chart&&chart.resize()
  })

})
</script>
