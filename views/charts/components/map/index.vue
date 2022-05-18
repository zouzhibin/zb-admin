
<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>
<script lang="ts" setup>
import 'echarts-liquidfill/src/liquidFill.js'
import './china.js'
import './bmap.min.js'
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

    //城市经纬度
var geoCoordMap = {
  "北京": [116.46, 39.92],
  "成都": [104.06, 30.67],
  "杭州": [120.19, 30.26],
  "济南": [117, 36.65],
  "福州": [119.3, 26.08],
  "上海": [121.48, 31.22],
  "重庆": [106.54, 29.59],
  "深圳": [114.07, 22.62],
  "宁波": [121.56, 29.86],
  "南昌": [115.89, 28.68],
  "广州": [113.23, 23.16],
  "厦门": [118.1, 24.46],
  "太原": [112.53, 37.87],
  "哈尔滨": [126.63, 45.75],
  "西安": [108.95, 34.27],
  "沈阳": [123.38, 41.8],
  "大连": [121.62, 38.92],
  "海口": [110.35, 20.02],
  "长沙": [113, 28.21],
  "银川": [106.27, 38.47],
  "石家庄": [114.48, 38.03],
  "昆明": [102.73, 25.04],
  "武汉": [114.31, 30.52],
  "呼和浩特": [111.65, 40.82],
  "天津": [117.2, 39.13],
  "贵阳": [106.71, 26.57],
  "兰州": [103.73, 36.03],
  "青岛": [120.33, 36.07],
  "南京": [118.78, 32.04],
  "长春": [125.35, 43.88],
  "郑州": [113.65, 34.76],
  "西宁": [101.74, 36.56],
  "合肥": [117.27, 31.86],
  "南宁": [108.33, 22.84],
  "拉萨": [91.11, 29.97],
  "乌鲁木齐": [87.68, 43.77]
};


//数据部分
var data = [
  {name:"北京",value:88.8},
  {name:"成都",value:88.7},
  {name:"厦门",value:88.01},
  {name:"杭州",value:87.9},
  {name:"济南",value:87.48},
  {name:"福州",value:87.47},
  {name:"上海",value:87.43},
  {name:"重庆",value:87.38},
  {name:"深圳",value:87.37},
  {name:"昆明",value:87.26},
  {name:"宁波",value:87.1},
  {name:"南昌",value:86.06},
  {name:"广州",value:85.89},
  {name:"太原",value:84.45},
  {name:"哈尔滨",value:83.96},
  {name:"西安",value:83.24},
  {name:"沈阳",value:82.96},
  {name:"大连",value:82.94},
  {name:"海口",value:82.88},
  {name:"长沙",value:82.85},
  {name:"银川",value:82.49},
  {name:"石家庄",value:82.24},
  {name:"武汉",value:81.68},
  {name:"呼和浩特",value:81.61},
  {name:"天津",value:80.99},
  {name:"贵阳",value:80.71},
  {name:"兰州",value:80.69},
  {name:"南京",value:80.65},
  {name:"青岛",value:80.61},
  {name:"长春",value:80.1},
  {name:"郑州",value:79.56},
  {name:"西宁",value:79.07},
  {name:"南宁",value:78.2},
  {name:"合肥",value:77.29},
  {name:"乌鲁木齐",value:76.91},
  {name:"拉萨",value:76.01}
];
var convertData = function(data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};


const options = {
  toolbox: {
    show: true,
    feature: {
      dataView: {
        show: true,
        readOnly: true
      },
      restore: {
        show: true
      },
      saveAsImage: {
        show: true
      }
    },
    top:40,
    right:40
  },
  title: {
    //text: '2020年全国大厅监测得分',
    top:40,
    //subtext: 'from 零点有数',
    left: 'center',
    textStyle: {
      color: '#ffffff',
      fontSize: 30
    },
    subtextStyle: {
      fontSize: 20
    }
  },
  legend: {
    left: 'left',
    data: ['强', '中', '弱'],
    textStyle: {
      color: '#ccc'
    }
  },
  backgroundColor: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [{
      offset: 0, color: '#0f2c70' // 0% 处的颜色
    }, {
      offset: 1, color: '#091732' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
  },
  visualMap: {
    min: 75,
    max: 90,
    left: 40,
    bottom: 40,
    calculable: false,
    text: ['高', '低'],
    inRange: {
      color: ['rgb(4, 1, 255)', 'rgb(225, 1, 255)']
    },
    textStyle: {
      color: '#ffffff',
      fontSize: 10
    }
  },
  geo: {
    map: 'china',
    show: true,
    roam: true,
    label: {
      emphasis: {
        show: true
      }
    },
    itemStyle: {
      normal: {
        areaColor: '#091632',
        borderColor: '#1773c3',
        shadowColor: '#1773c3',
        shadowBlur: 20
      }
    }
  },
  series: [
    {
      type: 'map',
      map: 'china',
      geoIndex: 1,
      aspectScale: 0.75, //长宽比
      showLegendSymbol: true, // 存在legend时显示
      label: {
        normal: {
          show: false,
        },
        emphasis: {
          show: false,
          textStyle: {
            color: '#fff'
          }
        }
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: '#031525',
          borderColor: '#3B5077',
          borderWidth: 1.5
        },
        emphasis: {
          areaColor: '#0f2c70'
        }
      },
    },
    {
      name: '城市',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: convertData(data),
      symbolSize: function (val) {
        return val[2]/8;
      },
      label: {
        normal: {
          formatter: '{b}',
          position: 'bottom',
          textStyle:{
            fontSize:10,
            fontWeight:'bolder',
            color:'#ffffff'
          },
          show: true
        },
        emphasis: {
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: '#ddb926'
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
