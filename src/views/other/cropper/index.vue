<template>
  <u-container-layout class="m-cropper">
    <div class="left">
      <div class="cropper-content">
        <vue-cropper
            ref="cropper"
            :img="option.img"
            :output-size="option.size"
            :output-type="option.outputType"
            :info="true" :full="option.full"
            :fixed="option.fixed"
            :fixed-number="option.fixedNumber"
            :can-move="option.canMove"
            :can-move-box="option.canMoveBox"
            :autoCropWidth="option.autoCropWidth"
            :autoCropHeight="option.autoCropHeight"
            :fixed-box="option.fixedBox"
            :auto-crop="option.autoCrop"
            :auto-crop-height="option.autoCropHeight"
            :center-box="option.centerBox"
            @real-time="realTime"
        />
      </div>
      <el-button type="primary" @click.prevent="zoom(1)">放大</el-button>
      <el-button type="primary" @click.prevent="zoom(-1)">缩小</el-button>
      <el-button type="primary" @click.prevent="rotateLeft">向左旋转</el-button>
      <el-button type="primary" @click.prevent="rotateRight">向右旋转</el-button>
      <el-button type="primary" @click.prevent="reset">清除</el-button>
      <el-button type="primary" @click.prevent="cropImage">获取结果</el-button>
      <el-button type="primary" @click.prevent="down('base64')">下载图片</el-button>
      <el-upload
          class="upload-demo"
          :show-file-list="false"
          action
          :before-upload="beforeUpload"
      >
        <el-button type="primary">选择上传图片</el-button>
      </el-upload>
    </div>

    <div>
      <h4 style="margin-top: 10px">实时预览</h4>
      <div class="show-preview" :style="{'width': option.previews.w + 'px', 'height': option.previews.h + 'px',  'overflow': 'hidden', 'margin': '5px'}">
        <div :style="option.previews.div">
          <img :src="option.previews.url" :style="option.previews.img">
        </div>
      </div>
      <h4 style="margin-top: 10px">获取结果</h4>
      <div style="background: #ccc;width: 100px;height: 100px">
        <img :src="option.cropImg" style="width: 100%;height: 100%" v-if="option.cropImg"/>
      </div>
    </div>
  </u-container-layout>
</template>

<script lang="ts" setup>
  // http://github.xyxiao.cn/vue-cropper/example/
  // https://codepen.io/xyxiao001/pen/yLooYKg
  import 'vue-cropper/dist/index.css'
  import { VueCropper }  from "vue-cropper";
  import imgSrc from '@/assets/image/cro.jpg'
  import {reactive, ref} from 'vue'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import type { UploadProps, UploadUserFile } from 'element-plus'
  const cropper = ref()
  const option = reactive({
    img: imgSrc,
    size: 1,
    full: false, // 是否输出原图比例的截图
    outputType: 'png',
    canMove: true,
    fixed: true, // 是否开启截图框宽高固定比例
    info: true, // 裁剪框的大小信息
    outputSize: 0.8, // 裁剪生成图片的质量
    fixedBox: false, // 固定截图框大小 不允许改变
    original: false, // 上传图片按照原始比例渲染
    canMoveBox: true, // 截图框能否拖动
    autoCrop: true, // 是否默认生成截图框
    autoCropWidth: 300, // 默认生成截图框宽度
    autoCropHeight: 300, // 默认生成截图框高度
    // 只有自动截图开启 宽度高度才生效
    centerBox: false, // 截图框是否被限制在图片里面
    high: true,
    max: 99999,
    previews:{
      url:''
    },
    cropImg:''

  })

  const realTime = (data)=>{
    option.previews = data
  }

  const cropmove = (e)=>{
    // console.log('eeeeee',e)
  }

  const zoom = (percent)=> {
    cropper.value.changeScale(percent);
  }
  const rotateLeft = ()=> {
    cropper.value.rotateLeft();
  }
  const rotateRight = ()=> {
    cropper.value.rotateRight();
  }

  const move = (offsetX, offsetY)=>{
    cropper.value.move(offsetX, offsetY);
  }

  const down = (type)=>{
    // event.preventDefault()
    var aLink = document.createElement('a');
    aLink.download = 'demo';
    // 输出
    if (type === 'blob') {
      this.$refs.cropper.getCropBlob((data) => {
        // this.downImg = window.URL.createObjectURL(data);
        aLink.href = window.URL.createObjectURL(data);
        aLink.click();
      });
    } else {
      cropper.value.getCropData((data) => {
        // this.downImg = data;
        aLink.href = data;
        aLink.click();
      });
    }
  }

  const rotate = (deg)=> {
    cropper.value.rotate(deg);
  }

  const cropImage=()=>{
    cropper.value.getCropData(data=>{
      option.cropImg = data
    })
  }

  const reset = ()=> {
    option.img = ''
    option.cropImg=''
  }

  const beforeUpload = (file, fileList)=>{
    return new Promise((resolve, reject) => {
      var reader = new FileReader()
      // let res = !/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/
      let reg = (/\.jpg$|\.jpeg$|\.gif$|\.png$/i)
      reader.readAsDataURL(file)
      let name = file.name
      if(reg.test(name)){
        reader.onload = (e:FileReader)=>{
          let data;
          if (typeof e.target.result === 'object') {
            // 把Array Buffer转化为blob 如果是base64不需要
            data = window.URL.createObjectURL(new Blob([e.target.result]));
          } else {
            data = e.target.result;
          }
          resolve(e.target.result)
          option.imgSrc = data
          option.img = data
        }
      }else{
        ElMessage.error('请上传图片')
        reject()
      }
    })
  }
</script>

<style lang="scss" scoped>
.cropper-content{
  display: flex;
  width: 400px;
  height: 400px;
  text-align: center;

}
::v-deep(.el-button){
  margin-top: 15px;
}
.m-cropper{
  width: 100%;
  /*height: 500px;*/
  display: flex;
  .left{
    width: 400px;
    margin-right: 30px;

  }
  .preview{
    width: 200px;
    height: 200px;
    margin-top: 20px;
    overflow: hidden;
  }
}
</style>
