   <template>
     <u-container-layout>
       <div>
         <el-card class="box-card">
           <template #header>
             <div class="card-header">
                    <span>任意时间点
                  </span>
             </div>
           </template>
           <div>
             <el-time-picker v-model="value4" placeholder="选择时间" />
           </div>
         </el-card>

         <el-card class="box-card">
           <template #header>
             <div class="card-header">
                <span>限制时间选择范围
              </span>
             </div>
           </template>
           <div>
             <el-time-picker
                 v-model="value1"
                 :disabled-hours="disabledHours"
                 :disabled-minutes="disabledMinutes"
                 :disabled-seconds="disabledSeconds"
                 placeholder="选择时间"
             />
           </div>
         </el-card>

         <el-card class="box-card">
           <template #header>
             <div class="card-header">
                    <span>任意时间范围
                  </span>
             </div>
           </template>
           <div>
             <el-time-picker
                 v-model="value3"
                 is-range
                 range-separator="-"
                 start-placeholder="开始时间"
                 end-placeholder="结束时间"
             />
           </div>
         </el-card>



       </div>
     </u-container-layout>

</template>
<script lang="ts" setup>
    import { ref } from 'vue'
    const value4 = ref()
    const value1 = ref(new Date(2016, 9, 10, 18, 30))
    const value3 = ref([new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)])
    const value2 = ref([new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)])
    const makeRange = (start: number, end: number) => {
        const result: number[] = []
        for (let i = start; i <= end; i++) {
            result.push(i)
        }
        return result
    }
    const disabledHours = () => {
        return makeRange(0, 16).concat(makeRange(19, 23))
    }
    const disabledMinutes = (hour: number) => {
        if (hour === 17) {
            return makeRange(0, 29)
        }
        if (hour === 18) {
            return makeRange(31, 59)
        }
    }
    const disabledSeconds = (hour: number, minute: number) => {
        if (hour === 18 && minute === 30) {
            return makeRange(1, 59)
        }
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
