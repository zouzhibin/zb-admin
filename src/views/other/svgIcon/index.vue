<template>
  <PageWrapLayout class="components-container">
    <div class="content-box">
      <el-alert
          title="SVG 图标目前使用 vite-plugin-svg-icons 插件完成，官方文档请查看 ：https://github.com/vbenjs/vite-plugin-svg-icons"
          type="warning"
          :closable="false"
      />
      <br />
      <div class="icon-list">
        <SvgIcon icon-class="borrow" class-name="icon"/>
        <SvgIcon icon-class="compass" class-name="icon"/>
        <SvgIcon icon-class="dashboard" class-name="icon"/>
        <SvgIcon icon-class="entrust" class-name="icon"/>
        <SvgIcon icon-class="example" class-name="icon"/>
        <SvgIcon icon-class="exit-fullscreen" class-name="icon"/>
        <SvgIcon icon-class="eye" class-name="icon"/>
        <SvgIcon icon-class="eye-open" class-name="icon"/>
        <SvgIcon icon-class="form" class-name="icon"/>
        <SvgIcon icon-class="fullscreen" class-name="icon"/>
        <SvgIcon icon-class="go-out" class-name="icon"/>
      </div>
      <el-descriptions title="配置项" :column="1" border>
        <el-descriptions-item label="name"> 图标的名称，svg 图标必须存储在 src/icons 目录下 </el-descriptions-item>
        <el-descriptions-item label="prefix"> 图标的前缀，默认为 "icon-class" </el-descriptions-item>
        <el-descriptions-item label="iconStyle"> 图标的样式，默认样式为 { width: "1em", height: " 1em" } </el-descriptions-item>
      </el-descriptions>
    </div>
  </PageWrapLayout>

</template>

<script setup lang="ts" name="svgIcon">
import SvgIcon from "@/components/SvgIcon/index.vue";
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
