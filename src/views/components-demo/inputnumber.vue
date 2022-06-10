   <template>
     <u-container-layout>
       <div>
         <el-card class="box-card">
           <template #header>
             <div class="card-header">
                    <span>基础用法
                  </span>
             </div>
           </template>
           <div>
             <el-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
           </div>
         </el-card>

         <el-card class="box-card">
           <template #header>
             <div class="card-header">
                <span>禁用状态
              </span>
             </div>
           </template>
           <div>
             <el-input-number v-model="num" :disabled="true" />
           </div>
         </el-card>

         <el-card class="box-card">
           <template #header>
             <div class="card-header">
                    <span>步进
                  </span>
             </div>
           </template>
           <div>
             <el-input-number v-model="num" :step="2" />
           </div>
         </el-card>

         <el-card class="box-card">
           <template #header>
             <div class="card-header">
                    <span>严格步进
                  </span>
             </div>
           </template>
           <div>
             <el-input-number v-model="num" :step="2" step-strictly />
           </div>
         </el-card>

         <el-card class="box-card">
           <template #header>
             <div class="card-header">
                    <span>精度
                  </span>
             </div>
           </template>
           <div>
             <el-input-number v-model="num" :precision="2" :step="0.1" :max="10" />
           </div>
         </el-card>

         <el-card class="box-card">
           <template #header>
             <div class="card-header">
                    <span>按钮位置
                  </span>
             </div>
           </template>
           <div>
             <el-input-number
                 v-model="num"
                 class="mx-4"
                 :min="1"
                 :max="10"
                 controls-position="right"
                 @change="handleChange"
             />
           </div>
         </el-card>


       </div>
     </u-container-layout>

</template>
<script lang="ts" setup>
    import { ref } from 'vue'
    const num = ref(1)
    const handleChange = (value: number) => {
        console.log(value)
    }
</script>
<style>
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .el-link {
        margin-right: 8px;
    }
    .el-link .el-icon--right.el-icon {
        vertical-align: text-bottom;
    }
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .box-card {
        width: 100%;
        margin-bottom:20px;
    }
</style>
