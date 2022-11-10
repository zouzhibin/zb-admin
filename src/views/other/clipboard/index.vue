<template>
  <div class="app-container">
    <div class="app-container-inner">
      <el-card style="margin-bottom: 20px">
        <div style="margin-bottom: 10px">输入内容，并点击复制按钮</div>
        <el-input v-model="copyValue" placeholder="请输入" style="width: 400px; max-width: 100%" />
        <el-button type="primary" @click="handleCopy(copyValue, $event)">
          <el-icon style="margin-right: 6px"><document-copy /></el-icon> 复制
        </el-button>
      </el-card>
      <el-card>
        <div style="margin-bottom: 10px">复制成功后可在这粘贴测试</div>
        <el-input v-model="testValue" placeholder="请输入" style="width: 400px; max-width: 100%" />
      </el-card>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import clip from '@/utils/clipboard'
const copyValue = ref('https://github.com/zouzhibin/vue-admin-perfect')
const testValue = ref('')

const handleCopy = (text, event) => {
  clip(text, event)
}
</script>
