<template>
    <div class="mark-down">
      <el-alert
          title="Markdown 是基于 md-editor-v3"
          type="success"
          style="margin-bottom: 20px"
          :closable="false" effect="dark"/>
      <div class="" style="flex: 1">
        <md-editor v-model="text" />
      </div>
      <div style="margin-top: 20px;flex-shrink: 0">
        <el-button type="primary" @click="submit">提交</el-button>
      </div>
    </div>
</template>
<script lang="ts">
  // https://imzbf.github.io/md-editor-v3/index
  // https://www.jianshu.com/p/0b06128a6117
  import { defineComponent } from 'vue';
  import MdEditor from 'md-editor-v3';
  import 'md-editor-v3/lib/style.css';

  export default defineComponent({
    components: { MdEditor },
    data() {
      return { text: '## 你好呀,欢迎！' };
    },
    methods:{
      submit(){
        console.log('this.text',this.text)
      }
    }
  });
</script>

<style lang="scss">
.mark-down{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .md{
    height: 600px;
  }
}
</style>
