<template>
    <div class="app-container">
      <div class="app-container-inner">
        <div class="header">
          <div class="title">window切换全屏</div>
          <el-button type="primary" @click="fullWindowScreenAction">{{ isFullscreen?'退出全屏':'点击全屏' }}</el-button>
        </div>
        <div class="fullscreen" @click="fullscreenAction" ref="domRef">
          <div class="title">DOM元素切换全屏</div>
          <div class="inner">
            <el-button type="primary">{{ isFullscreen?'退出全屏':'点击全屏' }}</el-button>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import { useFullscreen } from "@vueuse/core";

const domRef = ref<HTMLElement>(null);
const { enter, toggle:fullWindowScreenAction, exit, isFullscreen } = useFullscreen();

const { toggle: fullscreenAction } = useFullscreen(domRef);
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
