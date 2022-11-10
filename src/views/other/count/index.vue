<template>
  <div class="app-container">
   <div class="app-container-inner">
     <count-to
         ref="example"
         class="count-to"
         :start-val="options.startValInput"
         :end-val="options.endValInput"
         :duration="options.durationInput"
         :decimals="options.decimals"
         :prefix="options.prefix"
         :suffix="options.suffix"
         :autoplay="true"
         :separator="options.separator"
     ></count-to>
     <div style="margin-top: 40px;margin-bottom: 30px">
       <label class="label"
       >起始值:
         <el-input-number
             v-model="options.startValInput"
             @change="(val) => handleChange(val, 'startValInput')"
             :min="0"
             label="描述文字"
         ></el-input-number>
       </label>
       <label class="label"
       >最终值:
         <el-input-number
             v-model="options.endValInput"
             @change="(val) => handleChange(val, 'endValInput')"
             :min="1"
             label="描述文字"
         ></el-input-number>
       </label>
       <label class="label"
       >持续时间:
         <el-input-number
             v-model="options.durationInput"
             @change="(val) => handleChange(val, 'durationInput')"
             :min="1"
             label="描述文字"
         ></el-input-number>
       </label>
       <br />
       <label class="label"
       >小数位数:
         <el-input-number
             v-model="options.decimals"
             @change="(val) => handleChange(val, 'decimals')"
             :min="0"
             label="描述文字"
         ></el-input-number>
       </label>
       <label class="label">
         分隔符:<el-input
           v-model="options.separator"
           @change="(val) => handleChange(val, 'prefix')"
           style="width: 100px; margin-left: 10px"
       ></el-input>
       </label>
       <label class="label">
         前缀:<el-input
           v-model="options.prefix"
           @change="(val) => handleChange(val, 'prefix')"
           style="width: 100px; margin-left: 10px"
       ></el-input>
       </label>
       <label class="label"
       >后缀:
         <el-input
             v-model="options.suffix"
             @change="(val) => handleChange(val, 'suffix')"
             style="width: 100px; margin-left: 10px"
         ></el-input>
       </label>

       <el-button type="primary" @click="start">开始</el-button>
       <el-button type="danger" @click="pauseResume">暂停/恢复</el-button>
     </div>
     <el-descriptions title="配置项 " :column="1" border class="descriptions">
       <el-descriptions-item label="startValInput"> 起始值，默认为0 </el-descriptions-item>
       <el-descriptions-item label="endValInput"> 最终值，默认为2017 </el-descriptions-item>
       <el-descriptions-item label="durationInput"> 持续时间，默认为3000 </el-descriptions-item>
       <el-descriptions-item label="decimals"> 小数位数 </el-descriptions-item>
       <el-descriptions-item label="separator"> 分隔符，默认为 ',' </el-descriptions-item>
       <el-descriptions-item label="prefix"> 前缀 </el-descriptions-item>
       <el-descriptions-item label="suffix"> 后缀 </el-descriptions-item>
     </el-descriptions>
   </div>
  </div>
</template>

<script lang="ts" setup>
  import CountTo from '@/components/CountTo/index.vue'
  const example = ref()
  import { reactive, ref } from 'vue'
  let options = reactive({
    startValInput: 0,
    endValInput: 9888,
    durationInput: 2000,
    decimals: 1,
    prefix: '价钱：',
    suffix: '元',
    separator: ',',
  })
  const handleChange = (val, type) => {}
  const start = () => {
    example.value.start()
  }
  const pauseResume = () => {
    example.value.pauseResume()
  }
</script>

<style scoped lang="scss">
@import "./index";
</style>
