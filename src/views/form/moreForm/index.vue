<template>
  <div class="m-more-form">
    <FormOne ref="formRuleOne"/>
    <FormTwo ref="formRuleTwo"/>
    <FormThree ref="formRuleThree"/>

    <div class="footer">
      <el-button @click="onResetForm">重置</el-button>
      <el-button type="primary" @click="onSubmitForm">验证表单</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {getCurrentInstance} from 'vue'
import { ElMessage } from 'element-plus';
import FormOne from './components/FormOne.vue'
import FormTwo from './components/FormTwo.vue'
import FormThree from './components/FormThree.vue'

const { proxy } = <any>getCurrentInstance();

// 表单组件验证
const formRulesValidate = (pageRef: string, sonRef: string) => {
  return new Promise((resolve) => {
    proxy.$refs[pageRef].$refs[sonRef].validate((valid: boolean) => {
      if (valid) resolve(valid);
    });
  });
};

const formRulesResetFields = ()=>{
  proxy.$refs.formRuleOne.$refs.formRuleOneRef.resetFields();
  proxy.$refs.formRuleTwo.$refs.formRuleTwoRef.resetFields();
  proxy.$refs.formRuleThree.$refs.formRuleThreeRef.resetFields();
}

const onSubmitForm = ()=>{
  Promise.all([
    formRulesValidate('formRuleOne','formRuleOneRef'),
    formRulesValidate('formRuleTwo','formRuleTwoRef'),
    formRulesValidate('formRuleThree','formRuleThreeRef'),
  ]).then(res=>{
    ElMessage.success('表单全部验证成功');
  })
}

// 重置表单
const onResetForm = () => {
  formRulesResetFields();
};

</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
