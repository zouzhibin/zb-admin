<template>
  <full-screen-container>
    <div class="m-data-screen">
      <div class="header">
        <div class="header-bg-title">访问量大数据展示平台</div>
        <div class="date">{{timeDate}} {{ hourTime }}  </div>
      </div>
      <div class="center">
        <div class="item" v-for="item in 5">
          <div class="item-icon item-icon1">
            <img src="@/assets/image/circle-bg.png" class="circle-bg" />
          </div>
          <div class="item-right">
            <div class="item-right-inner">
              <div class="text-title">用户访问量</div>
              <div class="text-number"
              ><count-to :startVal="0" :endVal="6285" :duration="4000" separator=""></count-to
              ></div>
              <div class="text-der text-decenter-wrapr">
                <span class="left">同比昨天</span>
                <img src="@/assets/image/allow.png" />
                <span class="right">+78%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="left">
          <div class="item-complex" style="margin-bottom: 20px">
            <line-charts width="100%" height="100%" />
          </div>
          <div class="item-complex">
            <MultilineCharts />
          </div>
        </div>
        <div class="middle">
         <div class="migration">
           <migration-charts height="100%" width="100%" id="migration" />
         </div>
        </div>
        <div class="right">
          <div class="item-complex" style="margin-bottom: 20px">
            <BarCharts width="100%" height="100%" />
          </div>
          <div class="item-complex">
            <PieCharts />
          </div>
        </div>
      </div>
    </div>
  </full-screen-container>
</template>
<script lang="ts" setup>
import {onBeforeUnmount, onMounted, ref} from 'vue'
import FullScreenContainer from './components/full-screen-container.vue'
import CountTo from '@/components/CountTo/index.vue'
import LineCharts from '@/views/echarts/components/complex/line/index.vue'
import BarCharts from '@/views/echarts/components/complex/bar/index.vue'
import MigrationCharts from '@/views/echarts/components/migration/index.vue'
import MultilineCharts from '@/components/DataScreen/Multiline/index'
import PieCharts from '@/components/DataScreen/Pie/index'

const timeDate = ref()
const hourTime = ref()
const time1 = ref()
const getHour = ()=>{
  let date = new Date()
  let hour = date.getHours().toString().padStart(2,'00')
  let minute = date.getMinutes().toString().padStart(2,'00')
  let second = date.getSeconds().toString().padStart(2,'00')
  hourTime.value =  `${hour}:${minute}:${second}`
  time1.value = setTimeout(()=>{
    time1.value&&clearTimeout(time1.value)
    getHour()
  },1000)
}

const getNowTime = ()=>{
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth()+1
  let day = date.getDate()
  timeDate.value = `${year}年${month}月${day}日`
  getHour()

}
onMounted(()=>{
  getNowTime()
})

onBeforeUnmount(()=>{
  time1.value = null
})
</script>

<style lang="scss" scoped>
@import "./index";
</style>
