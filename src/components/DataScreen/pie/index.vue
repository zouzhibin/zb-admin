<template>
  <div ref="chartsRef" class="echarts"/>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts'
import { EChartsType } from 'echarts/core'
import { onMounted, ref } from 'vue'
const chartsRef = ref<HTMLElement | null>()
var trafficWay = [
  {
    name: 'Ⅰ类',
    value: 20,
  },
  {
    name: 'Ⅱ类',
    value: 20,
  },
  {
    name: 'Ⅲ类',
    value: 20,
  },
  {
    name: 'Ⅳ类',
    value: 20,
  },
  { name: 'Ⅴ类', value: 20 },
  { name: '劣Ⅴ类', value: 20 },
];

var data = [];
var color = ['#fd566a', '#9787ff', '#fdb36a', '#fdd56a', '#6da7ff', '#63e1f2', '#ff3000'];
for (var i = 0; i < trafficWay.length; i++) {
  data.push(
      {
        value: trafficWay[i].value,
        name: trafficWay[i].name,
        itemStyle: {
          normal: {
            borderWidth: 5,
            shadowBlur: 20,
            borderColor: color[i],
            shadowColor: color[i],
          },
        },
      },
      {
        value: 2,
        name: '',
        itemStyle: {
          normal: {
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0,
          },
        },
      }
  );
}
var seriesOption = [
  {
    name: '',
    type: 'pie',
    clockWise: false,
    radius: [105, 109],
    hoverAnimation: false,
    itemStyle: {
      normal: {
        label: {
          show: true,
          position: 'outside',

          formatter: function (params) {
            var percent = 0;
            var total = 0;
            for (var i = 0; i < trafficWay.length; i++) {
              total += trafficWay[i].value;
            }
            percent = ((params.value / total) * 100).toFixed(0);
            if (params.name !== '') {
              return params.name + '\t' + percent + '%';
            } else {
              return '';
            }
          },
        },
        labelLine: {
          length: 10,
          length2: 20,
          show: true,
          color: '#00ffff',
        },
      },
    },
    data: data,
  },
];
let options = {
  color: color,
  title: [{
    text: '水质监测',
    top: '44%',
    textAlign: 'center',
    left: '49.50%',
    backgroundColor: '#163253',
    borderRadius: 100,
    textStyle: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '400',
    },
  }, {
    text: '水环境监测站',
    top: '49%',
    textAlign: 'center',
    left: '49.50%',
    textStyle: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '400',
    },
  }, {
    text: '9',
    top: '53%',
    textAlign: 'center',
    left: '48%',
    textStyle: {
      color: '#f6ea2f',
      fontSize: 25,
      fontWeight: '800',
      fontStyle: 'italic'
    },
  }, {
    text: '个',
    top: '53.5%',
    textAlign: 'center',
    left: '50.5%',
    textStyle: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '400',
    },
  }],
  tooltip: {
    show: false,
  },

  toolbox: {
    show: false,
  },
  series: seriesOption,
};

let chart: EChartsType
const initChart = () => {
  const chart = echarts.init(chartsRef.value)
  chart.setOption(options)
  return chart
}
onMounted(() => {
  chart = initChart()
  window.addEventListener('resize', function () {
    chart && chart.resize()
  })
})
</script>

<style lang="scss" scoped>
.echarts{
  width: 100%;
  height: 100%;

}
</style>
