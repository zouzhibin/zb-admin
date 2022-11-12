<template>
  <vue-cropper
      ref="cropper"
      :img="avatarUrl"
      :output-size="defaultOptions.outputSize"
      :output-type="defaultOptions.outputType"
      :info="defaultOptions.info"
      :full="defaultOptions.full"
      :fixed="defaultOptions.fixed"
      :autoCropWidth="defaultOptions.autoCropWidth"
      :autoCropHeight="defaultOptions.autoCropHeight"
      :fixed-box="defaultOptions.fixedBox"
      :auto-crop="defaultOptions.autoCrop"
      :center-box="defaultOptions.centerBox"
      @real-time="realTime"
  />
</template>

<script lang="ts" setup>
import {defineExpose, reactive, ref} from 'vue'
import { VueCropper } from 'vue-cropper'
import 'vue-cropper/dist/index.css'

const emit = defineEmits(['change'])
let props = defineProps({
  avatarUrl:{
    type:String
  },
  options:{
    type:Object,
    default:()=>{}
  }
})

let cropper = ref()

const defaultOptions = reactive({
  outputSize:0.8, // 裁剪生成图片的质量
  outputType: 'png', // 生成图片的格式
  info: true, // 裁剪框的大小信息
  fixed: true, // 是否开启截图框宽高固定比例
  autoCrop: true, // 是否默认生成截图框
  anMoveBox: true, // 截图框能否拖动
  original: false, // 上传图片按照原始比例渲染
  autoCropWidth: 300, // 默认生成截图框宽度
  autoCropHeight: 300, // 默认生成截图框高度
  // 只有自动截图开启 宽度高度才生效
  centerBox: false, // 截图框是否被限制在图片里面
  high: true, // 是否按照dpr设备比例图片
  fixedBox: false, // 固定截图框大小 不允许改变
  full: false, // 是否输出原图比例的截图
  ...props.options
})

const getBase64 = ()=>{
  return new Promise(resolve => {
    cropper.value.getCropData((data) => {
      resolve(data)
    })
  })
}

const rotateLeft = () => {
  cropper.value.rotateLeft()
}
const rotateRight = () => {
  cropper.value.rotateRight()
}

const zoom = (percent) => {
  cropper.value.changeScale(percent)
}

// 实时预览图片
const realTime = (data)=>{
  emit('change',data)
}


defineExpose({
  getBase64,
  rotateLeft,
  rotateRight,
  zoom
})
</script>
