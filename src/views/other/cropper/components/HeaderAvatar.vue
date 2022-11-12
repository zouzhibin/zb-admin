<template>
  <div class="m-header-avatar">
    <el-card class="box-card">
      <template #header>
        <span>头像上传裁剪</span>
      </template>
      <div class="avatar" @click="avatarUpload">
        <img :src="defaultUrl" class="avatar"/>
        <el-icon class="icon-upload"><Plus /></el-icon>
      </div>
    </el-card>
    <el-dialog
        v-model="dialogVisible"
        title="头像上传"
        top="30px"
        width="700px"
    >
      <div class="upload-dialog">
        <div class="slide-a">
         <div class="avatar-cropper" >
           <AvatarCropper :avatarUrl="avatarUrl" @change="realTime" ref="avatar"/>
         </div>

          <div style="display: flex;justify-content: center;margin-top: 10px">
            <el-upload action="/" multiple :before-upload="beforeUploadAction" accept="image/*">
              <el-button type="primary">点击上传图片<el-icon><Upload /></el-icon></el-button>
            </el-upload>
          </div>

        </div>
        <div class="slide-b">
          <div class="preview-wrap" :style="previewStyle">
            <img :src="previewsOption.url" class="uploadImg" :style="previewsOption.img"/>
          </div>

          <div class="preview-wrap" :style="previewStyle1">
            <img :src="previewsOption.url" class="uploadImg" :style="previewsOption.img"/>
          </div>
        </div>
      </div>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="configUpload">
          确认
        </el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue'
import AvatarCropper from '@/components/AvatarCropper/index.vue'
import avatarUrlLogo from '@/assets/image/cro-avatar.jpg'
import {ElMessage} from "element-plus";

let defaultUrl = ref<string>(avatarUrlLogo)
let avatarUrl = ref<string>(avatarUrlLogo)
let dialogVisible = ref<boolean>(false)
let avatar = ref()
let previewsOption = ref({})
let previewStyle = ref({})
let previewStyle1 = ref({})
const avatarUpload = ()=>{
  dialogVisible.value = true
}
const beforeUploadAction = (file, fileLi) => {
  return new Promise((resolve, reject) => {
    var reader = new FileReader()
    let reg = /\.jpg$|\.jpeg$|\.gif$|\.png$/i
    reader.readAsDataURL(file)
    let name = file.name
    if (reg.test(name)) {
      reader.onload = (e: FileReader) => {
        avatarUrl.value = e.target.result
        resolve(e.target.result)
      }
    } else {
      ElMessage.error('请上传图片')
      reject()
    }
  })
}

const configUpload = async ()=>{
  defaultUrl.value = await avatar.value.getBase64()
  dialogVisible.value = false
  ElMessage.success('裁剪成功')
}



const realTime = (data)=>{
  previewsOption.value = data
  let options = {
    width: data.w + "px",
    height: data.h + "px",
    overflow: "hidden",

  }
  previewStyle.value = {
    ...options,
    zoom: (200 / data.w)

  }
  previewStyle1.value = {
    ...options,
    zoom: (120 / data.w)
  }
}
</script>

<style lang="scss" scoped>
.m-header-avatar{
  width: 100%;
  .avatar{
    border-radius: 50%;
    width: 160px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .icon-upload{
    color: white;
    font-size: 60px;
    position: absolute;
    display: none;
  }
  .avatar:hover{
    .icon-upload{
      display: block;
    }
  }
  .avatar-cropper{
    width: 400px;
    height: 400px;
  }
  .upload-dialog{
    display: flex;
    justify-content: space-between;
  }
  .preview-wrap{
    width: 160px;
    height: 160px;
    overflow: hidden;
    border-radius: 50%;
    margin-bottom: 40px;
  }
  .slide-b{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
