<template>
  <div class="m-custom-cropper">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>自定义裁剪</span>
        </div>
      </template>
      <div class="content">
         <div class="side-a">
           <div class="avatar-cropper">
             <AvatarCropper
                 :options="{
                  autoCropWidth:200,
                  autoCropHeight:200
                 }"
                 :avatarUrl="avatarUrl"
                 @change="realTime" ref="avatar"/>
           </div>
           <div>
             <el-button type="primary" @click.prevent="rotateLeft">向左旋转</el-button>
             <el-button type="primary" @click.prevent="rotateRight">向右旋转</el-button>
             <el-button type="primary" @click.prevent="zoom(1)">放大</el-button>
             <el-button type="primary" @click.prevent="zoom(-1)">缩小</el-button>
             <el-button type="primary" @click.prevent="down('base64')">下载图片</el-button>
             <el-button type="primary" @click.prevent="down('base64')">下载图片</el-button>
           </div>
         </div>
         <div class="side-b">
           <div class="preview-wrap" :style="previewStyle">
             <img :src="previewsOption.url" class="uploadImg" :style="previewsOption.img"/>
           </div>
         </div>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import {reactive, ref} from 'vue'
import AvatarCropper from '@/components/AvatarCropper/index.vue'
import avatarUrlLogo from '@/assets/image/cro-avatar.jpg'
import {ElMessage} from "element-plus";

let defaultUrl = ref<string>(avatarUrlLogo)
let avatarUrl = ref<string>(avatarUrlLogo)
let previewStyle = ref({})
let previewsOption = ref({})
let avatar = ref()

const realTime = (data)=>{
  previewsOption.value = data
  let options = {
    width: data.w + "px",
    height: data.h + "px",
    overflow: "hidden",

  }
  previewStyle.value = {
    ...options,
  }
}

const rotateLeft = () => {
  avatar.value.rotateLeft()
}
const rotateRight = () => {
  avatar.value.rotateRight()
}

const zoom = (percent) => {
  avatar.value.zoom(percent)
}

const down = async (type) => {
  let aLink = document.createElement('a')
  aLink.download = '下载裁剪图片'
  let data = await avatar.value.getBase64()
  aLink.href = data
  aLink.click()
}

</script>
<style lang="scss" scoped>
.m-custom-cropper{
  margin-top: 20px;
  .content{
    display: flex;
  }
  .side-a{
    margin-right: 100px;
    .avatar-cropper{
      width: 500px;
      height: 400px;
      margin-bottom: 20px;
    }
  }
  .side-b{

  }
}
</style>
