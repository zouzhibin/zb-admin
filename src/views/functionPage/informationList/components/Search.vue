<template>
  <el-card>
    <el-form :inline="true" :model="formInline" >
      <el-form-item label="名称">
        <el-input v-model="formInline.name" placeholder="请输入名称" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formInline = reactive({
  name: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style lang="scss" scoped>
::v-deep(.el-form-item){
  margin-bottom: 0;
}
</style>
