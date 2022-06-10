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
             <el-checkbox v-model="checked1" label="备选项1" />
             <el-checkbox v-model="checked2" label="备选项1" />
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
             <el-checkbox v-model="checked1" disabled>备选项11</el-checkbox>
             <el-checkbox v-model="checked2">备选项2</el-checkbox>
           </div>
         </el-card>

         <el-card class="box-card">
           <template #header>
             <div class="card-header">
                    <span>多选框组
                  </span>
             </div>
           </template>
           <div>
             <el-checkbox-group v-model="checkList">
               <el-checkbox label="备选项 A" />
               <el-checkbox label="备选项 B" />
               <el-checkbox label="备选项 C" />
               <el-checkbox label="禁用" disabled />
               <el-checkbox label="选中且禁用" disabled />
             </el-checkbox-group>
           </div>
         </el-card>

         <el-card class="box-card">
           <template #header>
             <div class="card-header">
                    <span>中间状态
                  </span>
             </div>
           </template>
           <div>
             <el-checkbox
                 v-model="checkAll"
                 :indeterminate="isIndeterminate"
                 @change="handleCheckAllChange"
             >全选</el-checkbox
             >
             <el-checkbox-group
                 v-model="checkedCities"
                 @change="handleCheckedCitiesChange"
             >
               <el-checkbox v-for="city in cities" :key="city" :label="city">{{
                   city
                 }}</el-checkbox>
             </el-checkbox-group>
           </div>
         </el-card>

         <el-card class="box-card">
           <template #header>
             <div class="card-header">
                    <span>按钮样式
                  </span>
             </div>
           </template>
           <div>
             <el-checkbox-group v-model="checkboxGroup1" >
               <el-checkbox-button v-for="city in cities" :key="city" :label="city">
                 {{ city }}
               </el-checkbox-button>
             </el-checkbox-group>
           </div>
         </el-card>

         <el-card class="box-card">
           <template #header>
             <div class="card-header">
                    <span>带有边框
                  </span>
             </div>
           </template>
           <div>
             <el-checkbox v-model="checked1" label="备选项1" border />
             <el-checkbox v-model="checked2" label="备选项2" border />
           </div>
         </el-card>


       </div>
     </u-container-layout>

</template>
<script lang="ts" setup>
    import { ref } from 'vue'
    const checked1 = ref(false)
    const checked2 = ref(true)
    const checkList = ref(['选中且禁用', '备选项 A'])
    const cities = ['上海', '北京', '广州', '深圳']
    const checkAll = ref(false)
    const isIndeterminate = ref(true)
    const checkedCities = ref(['上海', '北京'])
    const checkboxGroup1 = ref(['上海'])
    const handleCheckAllChange = (val: boolean) => {
        checkedCities.value = val ? cities : []
        isIndeterminate.value = false
    }
    const handleCheckedCitiesChange = (value: string[]) => {
        const checkedCount = value.length
        checkAll.value = checkedCount === cities.length
        isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
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
