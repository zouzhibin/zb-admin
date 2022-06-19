<template>
  <div class="m-animation" ref="mAnimation">
      <div class="item-animation">
        <div class="item">
          <div class="item-icon item-icon1">
            <img src="@/assets/image/circle-bg.png" class="circle-bg"/>
          </div>
          <div class="item-right">
            <div class="item-right-inner">
              <div class="text-title">带动就业人数</div>
              <div class="text-number"><count-to :startVal="0" :endVal="6285" :duration="4000" separator=""></count-to></div>
              <div class="text-der text-decenter-wrapr">
                <span class="left">同比去年</span>
                <img src="@/assets/image/allow.png"/>
                <span class="right">+78%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="circle-dot" v-for="item,index in pointStyle" :key="index" :style="{
          left:`${item.left}px`,
          top:`${item.top}px`
        }"></div>
      </div>
  </div>
</template>
<script setup lang="ts">
import CountTo from '@/components/u-count-to/vue-countTo.vue'
import { nextTick, onMounted, ref } from 'vue'

const mAnimation = ref<HTMLElement|null>()
const pointStyle = ref([])

function randomNum (minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1)
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum)
    default:
      return 0
  }
}
const getAttribute = () => {
  const mAnimationInfo = mAnimation.value.getBoundingClientRect()
  const obj = []
  for (let i = 0; i < 30; i++) {
    if (!obj[i]) { obj[i] = {} }
    obj[i].left = randomNum(0, mAnimationInfo.width)
  }
  for (let i = 0; i < 30; i++) {
    if (!obj[i]) { obj[i] = {} }
    obj[i].top = randomNum(0, mAnimationInfo.height)
  }
  return obj
}

onMounted(() => {
  nextTick(() => {
    pointStyle.value = getAttribute()
    console.log('pointStyle',pointStyle)
  })
})
</script>
<style lang="scss" scoped>
.m-animation{
  height: 100%;
  width: 100%;
  background-color: #030409;
  box-sizing: border-box;
  position: relative;
  .circle-bg{
    animation:rotate 5s infinite linear;
  }
  @keyframes rotate{
    0%{transform:rotate(0deg);}
    100%{transform:rotate(360deg);}
  }
  .item {

    display: flex;
    /*align-items: center;*/
    .item-icon {
      width: 117px;
      height: 109px;
    }
    .item-icon1{
      background: url("../../assets/image/center-inner1.png") no-repeat center 43%;
    }
    .item-right{
      margin-left: 20px;
      .item-right-inner{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .text-title{
        font-size: 20px;
        letter-spacing: 1px;
        color: #ffffff;
        /*margin-bottom: 6px;*/
        /*height: 20px;*/
      }
      .text-number{
        font-size: 44px;
        letter-spacing: 2px;
        color: #00e4ff;
      }
      .text-der{
        overflow: hidden;
        box-sizing: border-box;
        display: flex;
        font-size: 16px;
        color: #ffffff;
        letter-spacing: 1px;
        .left{
          margin-right: 10px;
        }
        img{
          margin-right: 4px;
          margin-top: 4px;
          width: 11px;
          height: 15px;
        }
        .right{
          color: #ff0000;

        }
      }
    }
  }



  .circle-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: yellow;
    text-align: center;
    font-weight: bold;
    position: absolute;
    /*line-height: 100px;*/
    z-index: 1;
    &::before {
      background: inherit;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: -2;
      border-radius: 50%;
      animation: twinkling 2.2s ease-in-out infinite;
    }
    &::after {
      background: inherit;
      content: '';
      position: absolute;
      width: 130%;
      height: 130%;
      left: -15%;
      top: -15%;
      z-index: -1;
      border-radius: 50%;
      animation: twinkling 2.2s ease-in-out infinite;
    }
  }
  @keyframes twinkling {
    0% {
      opacity: 0.2;
      filter: alpha(opacity=20);
      transform: scale(1);
    }

    50% {
      opacity: 0.5;
      filter: alpha(opacity=50);
      transform: scale(1.4);
    }

    100% {
      opacity: 0.2;
      filter: alpha(opacity=20);
      transform: scale(0.7);
    }
  }


  .item-animation{
    padding: 20px;
  }
}
</style>
