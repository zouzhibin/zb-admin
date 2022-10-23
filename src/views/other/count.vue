<template>
  <u-container-layout class="components-container">
    <count-to
      ref="example"
      class="example"
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
  </u-container-layout>
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
  const handleChange = (val, type) => {

  }
  const start = () => {
    example.value.start()
  }
  const pauseResume = () => {
    example.value.pauseResume()
  }
</script>

<style scoped>
  .example-btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 500;
    text-align: center;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    line-height: 1.5;
    padding: 4px 15px;
    font-size: 12px;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    border-color: #d9d9d9;
  }

  .example-btn:hover {
    color: #4ab7bd;
    background-color: #fff;
    border-color: #4ab7bd;
  }
  .example {
    font-size: 50px;
    color: #f6416c;
    display: block;
    margin: 10px 0;
    text-align: center;
    font-size: 80px;
    font-weight: 500;
  }

  .label {
    color: #2f4f4f;
    font-size: 16px;
    display: inline-block;
    margin: 15px 30px 15px 0;
  }

  input {
    position: relative;
    display: inline-block;
    padding: 4px 7px;
    width: 70px;
    height: 28px;
    cursor: text;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .startBtn {
    margin-left: 20px;
    font-size: 20px;
    color: #30b08f;
    background-color: #fff;
  }

  .startBtn:hover {
    background-color: #30b08f;
    color: #fff;
    border-color: #30b08f;
  }

  .pause-resume-btn {
    font-size: 20px;
    color: #e65d6e;
    background-color: #fff;
  }

  .pause-resume-btn:hover {
    background-color: #e65d6e;
    color: #fff;
    border-color: #e65d6e;
  }
</style>
