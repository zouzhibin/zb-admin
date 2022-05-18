<template>
    <div class="app-container">
        <el-input v-model="inputData" placeholder="请输入" style="width:400px;max-width:100%;" />
        <el-button type="primary" @click="handleCopy(inputData,$event)">
          <i class="el-icon-document-copy" style="margin-right: 6px"></i>
            复制
        </el-button>
    </div>
</template>
<script>
    import clip from '@/utils/clipboard'
    export default {
      data(){
        return{
          inputData:'https://github.com/zouzhibin/vue-admin-perfect'
        }
      },
      methods:{
        handleCopy(text, event){
          clip(text, event)
        }
      }
    }

</script>
