<template>
  <div class="m-code-mirror">
    <div class="header">
      <el-card >
        <div>
          <span>代码编辑器组件示例</span>
        </div>
      </el-card>
    </div>
    <div class="footer">
      <div class="footer-inner">
        <CodeMirror/>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import CodeMirror from '@/components/CodeMirror/index.vue'
</script>

<style lang="scss" scoped>
.m-code-mirror{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  & .header{
    flex-shrink: 0;
  }
  & .footer{
    flex: 1;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
  }
  .footer-inner{
    padding: 10px;
    flex: 1;
    background: white;
    box-sizing: border-box;
  }
}
</style>
