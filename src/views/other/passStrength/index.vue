<template>
  <PageWrapLayout class="components-container">
    <div class="m-pass-strength">
      <el-card style="margin-bottom: 10px">
        <template #header>
          <span>密码强度示例</span>
        </template>
        <el-form :model="ruleForm" label-width="120px">
          <el-form-item label="新的密码" prop="newPassword">
            <inputStrength v-model="ruleForm.newPassword" strength placeholder="请输入新密码"></inputStrength>
          </el-form-item>
          <el-form-item label="确认密码" prop="confirmPassword">
            <inputStrength v-model="ruleForm.confirmPassword" strength placeholder="请确认新密码"></inputStrength>
          </el-form-item>
        </el-form>
      </el-card>
      <el-descriptions title="配置项" :column="1" border class="descriptions">
        <el-descriptions-item label="strength"> 是否显示密码强度，默认为 false </el-descriptions-item>
        <el-descriptions-item label="value"> 双向绑定的 value 值，使用示例：v-model='passValue' </el-descriptions-item>
        <el-descriptions-item label="常见场景">
          <el-tag type="info">修改密码</el-tag> <el-tag type="info">用户注册</el-tag></el-descriptions-item
        >
        <el-descriptions-item label="参考地址">
          <a href="https://github.com/zxcvbn-ts/zxcvbn" target="_blank">https://github.com/zxcvbn-ts/zxcvbn</a>
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </PageWrapLayout>
</template>
<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import inputStrength from '@/components/InputStrength/index.vue'
  const ruleForm = reactive({
    newPassword: '',
    confirmPassword: '',
  })
</script>
<style lang="scss">
  .m-pass-strength {
    width: 100%;
    height: 100%;
    .descriptions {
      margin-top: 50px;
    }
  }
</style>
