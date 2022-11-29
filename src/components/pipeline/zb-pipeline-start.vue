<template>
  <div class="zb-pipeline-start-wrapper">
    <div
      class="zb-pipeline-start"
      v-bind:class="control === value ? 'active' : ''"
      v-on:click="handleClick"
    >
      <div class="zb-pipeline-start-header">
        <zb-icon type="play-filled" />
      </div>
      <div class="zb-pipeline-start-body">
        <div class="zb-pipeline-start-title">开始</div>
        <div class="zb-pipeline-start-tooltip">
          <el-tooltip placement="top-start" content="点击进行构建基础设置">
            <el-icon>
              <Help />
            </el-icon>
          </el-tooltip>
          <!--          <zb-tooltip placement="right">-->
          <!--            <zb-icon type="help" />-->
          <!--            <div slot="content">点击进行构建基础设置</div>-->
          <!--          </zb-tooltip>-->
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
  import { Help } from '@element-plus/icons-vue'
</script>
<style>
  /* zb-pipeline-start-wrapper */
  .zb-pipeline-start-wrapper {
    position: relative;
    padding: 0 40px;
  }

  /* zb-pipeline-start */
  .zb-pipeline-start {
    cursor: pointer;
    user-select: none;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    width: 200px;
    height: 40px;
    border-radius: 2px;
    background-color: #fff;
  }
  .zb-pipeline-start:after {
    content: '';
    position: absolute;
    top: 20px;
    right: -40px;
    display: block;
    width: 40px;
    height: 1px;
    background-color: #2d8cf0;
  }
  .zb-pipeline-start .zb-pipeline-start-header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    border-width: 1px 0 1px 1px;
    border-style: solid;
    border-color: #2d8cf0;
    border-radius: 2px 0 0 2px;
    background-color: #2d8cf0;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .zb-pipeline-start .zb-pipeline-start-body {
    flex: 1;
    display: flex;
    border-width: 1px 1px 1px 0;
    border-style: solid;
    border-color: #e3e8f0;
    border-radius: 0 2px 2px 0;
    padding: 0 8px;
    overflow: hidden;
    transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .zb-pipeline-start .zb-pipeline-start-title {
    flex: 1;
    display: block;
    overflow: hidden;
    color: #262626;
    font-size: 14px;
    font-weight: 600;
    line-height: 38px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .zb-pipeline-start .zb-pipeline-start-tooltip {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
  }
  .zb-pipeline-start .zb-pipeline-start-tooltip .zb-tooltip {
    display: block;
  }
  .zb-pipeline-start .zb-pipeline-start-tooltip .zb-icon {
    display: block;
    color: #595959;
    font-size: 14px;
  }

  /* zb-pipeline-start hover */
  .zb-pipeline-start:hover {
  }
  .zb-pipeline-start:hover:after {
  }
  .zb-pipeline-start:hover .zb-pipeline-start-header {
    border-color: #2d8cf0;
  }
  .zb-pipeline-start:hover .zb-pipeline-start-body {
    border-color: #2d8cf0;
  }
  .zb-pipeline-start:hover .zb-pipeline-start-title {
  }
  .zb-pipeline-start:hover .zb-pipeline-start-tooltip {
  }
  .zb-pipeline-start:hover .zb-pipeline-start-tooltip .zb-tooltip {
  }
  .zb-pipeline-start:hover .zb-pipeline-start-tooltip .zb-icon {
  }

  /* zb-pipeline-start active */
  .zb-pipeline-start.active {
  }
  .zb-pipeline-start.active:after {
  }
  .zb-pipeline-start.active .zb-pipeline-start-header {
    border-color: #2d8cf0;
  }
  .zb-pipeline-start.active .zb-pipeline-start-body {
    border-color: #2d8cf0;
  }
  .zb-pipeline-start.active .zb-pipeline-start-title {
  }
  .zb-pipeline-start.active .zb-pipeline-start-tooltip {
  }
  .zb-pipeline-start.active .zb-pipeline-start-tooltip .zb-tooltip {
  }
  .zb-pipeline-start.active .zb-pipeline-start-tooltip .zb-icon {
  }
</style>
