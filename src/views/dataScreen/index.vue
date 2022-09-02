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
            <bar-charts width="100%" height="100%" />
          </div>
        </div>
        <div class="middle">
         <div class="migration">
           <migration-charts height="100%" width="100%" id="migration" />
         </div>
        </div>
        <div class="right">
          <div class="item-complex" style="margin-bottom: 20px">
            <line-charts width="100%" height="100%" />
          </div>
          <div class="item-complex">
            <bar-charts width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  </full-screen-container>
</template>
<script lang="ts" setup>
import {onBeforeUnmount, onMounted, ref} from 'vue'
import FullScreenContainer from './components/full-screen-container.vue'
import CountTo from '@/components/u-count-to/vue-countTo.vue'
import LineCharts from '@/views/charts/components/complex/line/index.vue'
import BarCharts from '@/views/charts/components/complex/bar/index.vue'
import MigrationCharts from '@/views/charts/components/migration/index.vue'

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
.m-data-screen{
  width: 1920px;
  height: 1080px;
  box-sizing: border-box;
  overflow:hidden;
  background: url("/static/screen/bg.png") no-repeat center center;
  .header{
    box-sizing: border-box;
    width: 100%;
    height: 91px;
    background: url("/static/screen/header-bg.png");
    background-size:contain ;
    background-repeat:no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    .header-bg-title{
      font-size: 42px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 2px;
      color: #ffffff;
      margin-bottom: 14px;
    }
    .date{
      top: 25px;
      line-height: 68px;
      font-size: 18px;
      position: absolute;
      letter-spacing: 0px;
      color: #87caff;
      right: 20px;
    }
  }
  //.header{
  //  width: 100%;
  //  .header-bg-title{
  //    width: 100%;
  //  }
  //
  //}
  .circle-bg{
    animation:rotate 5s infinite linear;
  }
  @keyframes rotate{
    0%{transform:rotate(0deg);}
    100%{transform:rotate(360deg);}
  }
  .center{
    padding-left: 40px;
    padding-right: 50px;
    padding-bottom: 40px;
    padding-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .circle-bg {
      animation: rotate 5s infinite linear;
    }
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .item {
      display: flex;
      /*align-items: center;*/
      .item-icon {
        width: 117px;
        height: 109px;
      }
      .item-icon1 {
        background: url('@/assets/image/center-inner1.png') no-repeat center 43%;
      }
      .item-right {
        margin-left: 20px;
        .item-right-inner {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .text-title {
          font-size: 20px;
          letter-spacing: 1px;
          color: #ffffff;
          /*margin-bottom: 6px;*/
          /*height: 20px;*/
        }
        .text-number {
          font-size: 44px;
          letter-spacing: 2px;
          color: #00e4ff;
        }
        .text-der {
          overflow: hidden;
          box-sizing: border-box;
          display: flex;
          font-size: 16px;
          color: #ffffff;
          letter-spacing: 1px;
          .left {
            margin-right: 10px;
          }
          img {
            margin-right: 4px;
            margin-top: 4px;
            width: 11px;
            height: 15px;
          }
          .right {
            color: #ff0000;
          }
        }
      }
    }
  }
  .footer{
    position: relative;
    padding: 0 30px 0 24px;
    display: flex;

    .left{
      box-sizing: border-box;
      padding: 32px 0;
      width: 568px;
      //height: 701px;

      background-size: contain;
      background-repeat: no-repeat;
    }
    .middle{
      flex: 1;
      position: relative;
      .migration{
        left: -18%;
        top:-15%;
        width: 900px;
        height: 900px;
        position: absolute;
      }
    }
    .right{
      width: 568px;
      align-items: flex-end;
      box-sizing: border-box;
      padding: 32px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-size:contain ;
      background-repeat:no-repeat;
    }
    .item-complex {
      width: 558px;
      height: 362px;
      background-image: url('@/assets/image/charts/1-1-bg.png');
      background-color: #042750;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
}
</style>
