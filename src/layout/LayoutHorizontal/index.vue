<template>
  <div class="main-container">
    <UHeader/>
    <Main/>
    <Footer/>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from '../components/Sidebar/index.vue'
import UHeader from './HeaderHorizontal/index.vue'
import Main from '../components/Main/index.vue'
import Footer from '../components/Footer/index.vue'
</script>

<style lang="scss" scoped>
.main-container{
  display: flex;
  flex: 1;
  box-sizing: border-box;
  flex-direction: column;
  min-height: 100%;
}
</style>
