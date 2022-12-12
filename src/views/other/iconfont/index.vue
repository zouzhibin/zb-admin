<template>
  <PageWrapLayout class="components-container">
    <div class="content-box">
      <el-alert
          title="普通引入方式 Font Class"
          type="warning"
          :closable="false"
      />
      <br />
      <div class="icon-list">
        <span class="iconfont icon-dabaoyu"></span>
        <span class="iconfont icon-yin"></span>
        <span class="iconfont icon-dabaoyu"></span>
        <span class="iconfont icon-shuaxin1"></span>
        <span class="iconfont icon-shuaxin"></span>
        <span class="iconfont icon-duoyun-2-copy"></span>
        <span class="iconfont icon-duoyun-1"></span>
        <span class="iconfont icon-daxue"></span>
        <span class="iconfont icon-dayu"></span>
        <span class="iconfont icon-feng"></span>
      </div>

      <el-alert
          title="Symbol 的方式渲染图标 支持多色"
          type="warning"
          :closable="false"
      />
      <div class="icon-list">
        <SvgIcon icon-class="feng" class-name="iconfont"/>
        <SvgIcon icon-class="zhongxue" class-name="iconfont"/>
        <SvgIcon icon-class="yangchen" class-name="iconfont"/>
        <SvgIcon icon-class="yujiaxue" class-name="iconfont"/>
        <SvgIcon icon-class="qing" class-name="iconfont"/>
        <SvgIcon icon-class="mai" class-name="iconfont"/>
        <SvgIcon icon-class="wu" class-name="iconfont"/>
        <SvgIcon icon-class="xiaoyu" class-name="iconfont"/>
        <SvgIcon icon-class="xiaoxue" class-name="iconfont"/>
        <SvgIcon icon-class="shandian" class-name="iconfont"/>
        <SvgIcon icon-class="xue" class-name="iconfont"/>
      </div>

    </div>
  </PageWrapLayout>

</template>

<script setup lang="ts" name="svgIcon">
import SvgIcon from "@/components/SvgIcon/index.vue";
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
