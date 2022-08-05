<template>
  <div class="g-layout-content-chat-util">
    <div class="item-left">
      <div class="emoje" title="选择表情" @click.stop="selectEmojiAction">
        <img src="static/face/emoji-after.png" alt="" style="width: 20px" />
      </div>
      <div class="upload-picture" title="上传图片">
        <el-upload action multiple :show-file-list="false" :before-upload="beforeUploadAction">
          <el-icon style="font-size: 20px"><FolderOpened /></el-icon>
        </el-upload>
      </div>
      <div class="emoje-border-wrap" v-show="isShowEmoji">
        <div
          class="title-emoje"
          v-for="(item, index) in emojis"
          @click.stop="selectSigleEmojeAction($event, item)"
          :key="index"
        >
          <img :src="`static/face/${item}.png`" :title="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, defineEmits, onMounted } from 'vue'
  import { FolderOpened } from '@element-plus/icons-vue'
  import { ElMessage } from 'element-plus'

  import emoji from '@/utils/emojis'
  const emojis = ref<string[]>(emoji.imgs)
  const isShowEmoji = ref<boolean>(false)
  const emit = defineEmits(['insert', 'upload'])

  const selectSigleEmojeAction = (e, item) => {
    if (e.target.tagName === 'IMG') {
      let node = e.target.cloneNode(true)
      node.title = item
      emit('insert', node, 'IMG')
    } else {
      emit('insert', node)
    }
  }

  const selectEmojiAction = () => {
    isShowEmoji.value = true
    emit('insert', null, null)
  }

  const beforeUploadAction = (file, fileList) => {
    return new Promise((resolve, reject) => {
      var reader = new FileReader()
      let reg = /\.jpg$|\.jpeg$|\.gif$|\.png$/i
      reader.readAsDataURL(file)
      let name = file.name
      if (reg.test(name)) {
        reader.onload = (e: FileReader) => {
          resolve(e.target.result)
          emit('upload', e.target.result)
        }
      } else {
        ElMessage.error('请上传图片')
        reject()
      }
    })
  }

  onMounted(() => {
    window.onclick = function (event) {
      isShowEmoji.value = false
    }
  })
</script>

<style lang="scss" scoped>
  .g-layout-content-chat-util {
    height: 46px;
    display: flex;
    flex-shrink: 0;
    justify-content: space-between;
    position: relative;
    border-bottom: 1px solid #ebebeb;
    background: white;
    .item-left {
      display: flex;
      align-items: center;
    }
    .upload-picture {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 40px;
    }
    .screenshot-upload {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 40px;
    }
    .recoding-chatbox {
      position: relative;
    }
    .emoje {
      display: flex;
      align-items: center;
      height: 100%;
      justify-content: center;
      width: 40px;
      font-size: 25px;
      cursor: pointer;
      color: grey;
    }
    .upload-picture {
      cursor: pointer;
      display: flex;
      align-items: center;
      height: 100%;
      width: 40px;
      justify-content: center;
    }

    .emoje-border-wrap {
      top: -121px;
      left: 0;
      position: absolute;
      width: 372px;
      padding: 10px;
      z-index: 9;
      border: 1px solid #d9d9d9;
      background-color: #fff;
      overflow: hidden;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      .title-emoje {
        cursor: pointer;
        float: left;
        border: 1px solid #e8e8e8;
        height: 32px;
        width: 32px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: -1px 0 0 -1px;
        //padding: 4px 2px;
        text-align: center;
        /*img{*/
        /*    width: 100%;*/
        /*    height: 100%;*/
        /*}*/
      }
    }
  }
</style>
