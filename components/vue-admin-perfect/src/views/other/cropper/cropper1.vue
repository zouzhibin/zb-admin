<template>
  <div class="m-cropper">
    <div class="left">
      <div class="cropper-content">
        <vue-cropper
            ref="cropper"
            :src="options.imgSrc"
            @crop="cropmove"
            :minCropBoxWidth="options.minCropBoxWidth"
            preview=".preview"
        />
      </div>
      <div>
        <el-button type="primary" @click.prevent="zoom(0.2)">放大</el-button>
        <el-button type="primary" @click.prevent="zoom(-0.2)">缩小</el-button>
        <el-button type="primary" @click.prevent="move(-10, 0)">向左移动</el-button>
        <el-button type="primary" @click.prevent="move(10, 0)">向右移动</el-button>
        <el-button type="primary" @click.prevent="move(0, -10)">向上移动</el-button>
        <el-button type="primary" @click.prevent="move(0, 10)">向下移动</el-button>
        <el-button type="primary" @click.prevent="rotate(90)">旋转90度</el-button>
        <el-button type="primary" @click.prevent="rotate(-90)">旋转-90度</el-button>
        <el-button type="primary"
                   ref="flipX"
                   @click.prevent="flipXAction">翻转 X</el-button>
        <el-button type="primary"
                   ref="flipY"
                   @click.prevent="flipYAction">翻转 Y</el-button>
        <el-button type="primary" @click.prevent="reset">重置</el-button>
        <el-button type="primary" @click.prevent="cropImage">获取结果</el-button>
        <el-upload
            class="upload-demo"
            :show-file-list="false"
            action

           :before-upload="beforeUpload"

        >
          <el-button type="primary">选择上传图片</el-button>
        </el-upload>
      </div>
    </div>

    <div>
      <div class="preview" >
      </div>
      <h4 style="margin-top: 10px">得到结果</h4>
      <div style="background: #ccc;width: 100px;height: 100px">
        <img :src="options.cropImg" style="width: 100%;height: 100%" v-if="options.cropImg"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  // http://github.xyxiao.cn/vue-cropper/example/
  // https://codepen.io/xyxiao001/pen/yLooYKg
  import VueCropper from 'vue-cropperjs';
  import imgSrc from '@/assets/image/cro.jpg'
  import 'cropperjs/dist/cropper.css';
  import {reactive, ref} from 'vue'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import type { UploadProps, UploadUserFile } from 'element-plus'

  const cropper = ref()
  const flipX = ref()
  const flipY = ref()

  const options = reactive({
    cropImg:null,
    imgSrc:imgSrc,
    minCropBoxWidth:200,

  })

  const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
    console.log(file, uploadFiles)
  }

  const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
    console.log(uploadFile)
  }

  const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
    ElMessage.warning(
        `The limit is 3, you selected ${files.length} files this time, add up to ${
            files.length + uploadFiles.length
        } totally`
    )
  }

  const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
    return ElMessageBox.confirm(
        `Cancel the transfert of ${uploadFile.name} ?`
    ).then(
        () => true,
        () => false
    )
  }

  const cropmove = (e)=>{
    // console.log('eeeeee',e)
  }

  const zoom = (percent)=> {
    cropper.value.relativeZoom(percent);
  }

  const move = (offsetX, offsetY)=>{
    cropper.value.move(offsetX, offsetY);
  }

  const rotate = (deg)=> {
    cropper.value.rotate(deg);
  }

  const flipXAction=()=> {
    const dom = flipX.value;
    let scale = dom.getAttribute('data-scale');
    scale = scale ? -scale : -1;
    cropper.value.scaleX(scale);
    dom.setAttribute('data-scale', scale);
  }
  const flipYAction=()=> {
    const dom = flipY.value;
    let scale = dom.getAttribute('data-scale');
    scale = scale ? -scale : -1;
    cropper.value.scaleY(scale);
    dom.setAttribute('data-scale', scale);
  }

  const cropImage=()=>{
    options.cropImg = cropper.value.getCroppedCanvas().toDataURL();
  }

  const reset = ()=> {
    cropper.value.reset();
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
          resolve(e.target.result)
          options.imgSrc = e.target.result
          cropper.value.replace(e.target.result);
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
    text-align: center;

  }
  ::v-deep{
    .el-button{
      margin-top: 15px;
    }
  }
  .m-cropper{
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
