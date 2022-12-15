<template>
  <div class="app-container">
      <el-card style="margin-bottom: 10px">
        <template #header>
          <span>按钮上传</span>
        </template>
        <div class="demo-image__preview">
          <div class="upload-list" v-for="(item, index) in fileList">
            <el-image
              @click.stop="privew(index)"
              style="width: 100%; height: 100%"
              :src="item"
              :preview-src-list="fileList"
              :initial-index="initialIndex"
              fit="cover"
            />
          </div>
        </div>
        <el-upload action="/" multiple :before-upload="beforeUploadAction">
          <el-button type="primary">点击上传</el-button>
        </el-upload>
      </el-card>
      <el-card style="margin-bottom: 10px">
        <template #header>
          <span>多图片上传</span>
        </template>
        <Upload @update="update" v-model="imgs" />
      </el-card>

      <el-card >
        <template #header>
          <span>拖拽上传</span>
        </template>
        <div class="upload-list" v-for="(item, index) in fileList1">
          <el-image
            @click.stop="privew1(index)"
            style="width: 100%; height: 100%"
            :src="item"
            :preview-src-list="fileList1"
            :initial-index="initialIndex1"
            fit="cover"
          />
        </div>
        <el-upload
          class="upload-demo"
          drag
          :before-upload="beforeUploadAction1"
          action="/"
          multiple
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text"> 拖拽上传 <em>或者点击上传</em> </div>
        </el-upload>
      </el-card>
  </div>
</template>

<script setup lang="ts">
  import Upload from '@/components/Upload/index.vue'
  import { ElMessage } from 'element-plus'
  import logo from '@/assets/image/logo.png'
  import { ref } from 'vue'
  const imgs = ref([
    {
      url: logo,
      name: 'female.png',
      uid: '1651408956803',
      status: 'success',
    },
  ])
  const singleimg = ref([])
  const initialIndex = ref(0)
  const initialIndex1 = ref(0)
  const fileList = ref([])
  const fileList1 = ref([])
  const update = (val) => {
    console.log('valll======', val)
  }
  const privew = (index) => {
    initialIndex.value = index
  }
  const privew1 = (index) => {
    initialIndex.value = index
  }
  const beforeUploadAction = (file, fileLi) => {
    return new Promise((resolve, reject) => {
      var reader = new FileReader()
      let reg = /\.jpg$|\.jpeg$|\.gif$|\.png$/i
      reader.readAsDataURL(file)
      let name = file.name
      if (reg.test(name)) {
        reader.onload = (e: FileReader) => {
          fileList.value.push(e.target.result)
          resolve(e.target.result)
        }
      } else {
        ElMessage.error('请上传图片')
        reject()
      }
    })
  }
  const beforeUploadAction1 = (file, fileLi) => {
    return new Promise((resolve, reject) => {
      var reader = new FileReader()
      let reg = /\.jpg$|\.jpeg$|\.gif$|\.png$/i
      reader.readAsDataURL(file)
      let name = file.name
      if (reg.test(name)) {
        reader.onload = (e: FileReader) => {
          fileList1.value.push(e.target.result)
          resolve(e.target.result)
        }
      } else {
        ElMessage.error('请上传图片')
        reject()
      }
    })
  }
</script>

<style scoped>
  .upload-list {
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #c0ccda;
    border-radius: 6px;
    box-sizing: border-box;
    margin: 0 8px 8px 0;
    padding: 0;
    width: 146px;
    height: 146px;
    display: inline-flex;
  }
</style>
