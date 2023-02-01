<template>
  <div class="app-container">
    <div class="app-container-inner">
      <div style="margin-bottom: 20px">欢迎大家加微信哈，共同讨论，学习</div>
      <el-image
          :src="weLogo"
          :preview-src-list="[weLogo]"
          style="max-width: 200px"
          :data-resid="Date.now()"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import weLogo from '@/assets/image/we.png'
</script>
