<template>
  <div class="m-animation">
      <div>
        <div class="item">
          <div class="item-icon item-icon1">
            <img src="@/assets/image/circle-bg.png" class="circle-bg"/>
          </div>
          <div class="item-right">
            <div class="item-right-inner">
              <div class="text-title">带动就业人数</div>
              <div class="text-number"><count-to :startVal="0" :endVal="6285" :duration="1000" separator=""></count-to></div>
              <div class="text-der text-decenter-wrapr">
                <span class="left">同比去年</span>
                <img src="@/assets/image/allow.png"/>
                <span class="right">+78%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script setup lang="ts">
import CountTo from '@/components/u-count-to/vue-countTo.vue'

</script>
<style lang="scss" scoped>
.m-animation{
  height: 100%;
  width: 100%;
  background-color: #030409;
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

}
</style>
