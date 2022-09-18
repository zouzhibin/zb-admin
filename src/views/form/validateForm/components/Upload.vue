<template>
  <el-upload
    action=""
    :before-upload="beforeUploadAction"
    list-type="picture-card"
    :on-preview="handlePictureCardPreview"
    :on-remove="handleRemove"
    :file-list="fileList"
  >
    <el-icon><Plus /></el-icon>
  </el-upload>

  <el-dialog v-model="dialogVisible" width="80%" top="80px">
    <img w-full :src="dialogImageUrl" alt="预览图片" style="width: 100%" />
  </el-dialog>
</template>

<script lang="ts" setup>
  import { onMounted, ref, watch } from 'vue'
  import { Plus } from '@element-plus/icons-vue'

  import type { UploadProps, UploadUserFile } from 'element-plus'
  import { ElMessage } from 'element-plus'
  let emit = defineEmits(['update:modelValue'])
  let props = defineProps({
    modelValue: Array,
  })
  let fileList = ref([])

  const dialogImageUrl = ref('')
  const dialogVisible = ref(false)

  const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
    console.log(uploadFile, uploadFiles)
  }

  const beforeUploadAction = (file, fileLi) => {
    return new Promise((resolve, reject) => {
      var reader = new FileReader()
      let reg = /\.jpg$|\.jpeg$|\.gif$|\.png$/i
      reader.readAsDataURL(file)
      let name = file.name
      if (reg.test(name)) {
        reader.onload = (e: FileReader) => {
          fileList.value.push({
            name: name,
            url: e.target.result,
          })
          emit('update:modelValue', fileList.value)
          resolve(e.target.result)
        }
      } else {
        ElMessage.error('请上传图片')
        reject()
      }
    })
  }

  const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
    dialogImageUrl.value = uploadFile.url!
    dialogVisible.value = true
  }

  onMounted(() => {
    watch(
      () => props.modelValue,
      (value) => {
        fileList.value = value
      },
    )
  })
</script>
