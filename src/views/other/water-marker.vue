<template>
  <div class="m-water-marker">
    <el-button @click="addWaterMarker(1)" type="primary">生成默认颜色水印</el-button>
    <el-button @click="addWaterMarker(2)" type="primary" >生成随机颜色水印</el-button>
    <el-input v-model="opacity" style="width: 100px;margin-left: 20px"></el-input>
    <el-button @click="addWaterMarker(3)" type="primary" >设置透明度</el-button>
    <el-button @click="addWaterMarker(4)" type="primary" >取消水印</el-button>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, ref } from 'vue'
import watermark from '@/utils/waterMarker'
import { getColor } from '@/utils/index'

const opacity = ref(0.2)
const options = {
  rotate: -10,
  globalAlpha: opacity.value
}
function getRandom (start, end) {
  const differ = end - start
  const random = Math.random()
  return (start + differ * random).toFixed(0)
}
const message = ['red']
// 随机生成颜色
for (let i = 0; i < 30; i++) {
  message.push(getColor())
}
const addWaterMarker = (type) => {
  if (type === 1) {
    options.fillStyle = '#000'
    watermark(options)
  } else if (type === 2) {
    options.fillStyle = message[getRandom(0, 30)]
    watermark(options)
  } else if (type === 3) {
    options.globalAlpha = opacity.value
    watermark(options)
  } else if (type === 4) {
    nextTick(() => {
      const wm = document.getElementsByClassName('__wm')[0]
      if (wm) {
        document.body.removeChild(wm)
      }
    })
  }
}

onMounted(() => {
  nextTick(() => {
  })
})
</script>

<style>
.m-water-marker{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
}
</style>
