<template>
  <div class="m-complex">
    <div class="m-complex-inner">
      <div class="item-complex">
        <line-charts width="100%" height="100%" />
      </div>

      <div class="item-complex">
        <bar-charts width="100%" height="100%" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import LineCharts from './components/complex/line/index.vue'
import BarCharts from './components/complex/bar/index.vue'

</script>
<style lang="scss" scoped>
  .m-complex{
    height: 100%;
    width: 100%;
    background-color: #030409;
    .m-complex-inner{
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
    }
  }
  .item-complex{
    width: 454px;
    height: 292px;
    background-image: url('../../assets/image/charts/1-1-bg.png');
    background-color: #042750;
    background-size: contain;
    background-repeat: no-repeat;
  }

</style>
