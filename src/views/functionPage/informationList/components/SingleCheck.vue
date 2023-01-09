<template>
  <div class="item-card">
    <div class="zb-pro-checkcard" v-for="(item,index) in 5" @click="check(item,index)"
         :key="item"
         :class="{
        'single-active':active===index
       }"
    >
      <div class="pro-checkcard-content flex-justify-between">
        <div>今日访问量</div>
        <div class="num">561</div>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {ref} from "vue";

let active = ref(0)

const check = (item,index)=>{
  active.value = index
}
</script>

<style lang="scss" scoped>
.item-card{
  display: flex;
  flex-wrap: wrap;
}

.zb-pro-checkcard{
  box-shadow: 0 2px 12px 0 #0000001a;
  width: 19.2%;
  margin-right: 1%;
  margin-bottom: 10px;
  cursor: pointer;
  background: white;
  position: relative;
  .pro-checkcard-content{
    width: 100%;
    height: 100%;
    padding: 20px 20px;
    box-sizing: border-box;
  }
  .num{
    font-weight: bold;
    font-size: 16px;
  }
  .tool{
    position: absolute;
    top: 0;
    right: 0;
    .el-icon-error{
      color: #F56C6C;
      font-size: 16px;
    }
  }
}
.zb-pro-checkcard:nth-child(5n+5){
  margin-right: 0;
}
.single-active{
  background: #409eff;
  color: white;
}
</style>
