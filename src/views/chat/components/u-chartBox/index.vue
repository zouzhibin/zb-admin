<template>
  <div class="g-container-chat">
    <div class="g-layout-content-center" style="width: 100%" ref="chatContentBoxs">
      <div v-for="(item, index) in chatDatas" :key="item.id" style="padding-top: 15px">
        <div class="from_user_info" v-if="item.is_self === 0">
          <div class="contact-nickname">{{ item.created_at }} 林峰</div>
          <div class="receive-message-wrap">
            <div class="avatar-show">
              <img src="@/assets/image/avatar.png" />
            </div>
            <div style="position: relative; display: flex">
              <div class="receive-message-info" v-html="item.content" v-if="item.type===1"></div>
              <div class="public-show-pic" v-else-if="item.type === 2">
                <el-image
                    :src="item.content"
                    :preview-src-list="[item.content]"
                    style="max-width: 200px"
                    :data-resid="Date.now()"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="ower-user_info" v-else>
          <div class="contact-nickname">{{ item.created_at }} 林峰</div>
          <div class="receive-message-wrap public-show-pic">
            <div style="position: relative; display: flex">
              <div class="receive-message-info" v-if="item.type == 1">
                <div class="text-content" v-html="item.content"></div>
              </div>
              <div class="public-show-pic" v-else-if="item.type === 2">
                <el-image
                  :src="item.content"
                  :preview-src-list="[item.content]"
                  style="max-width: 200px"
                  :data-resid="Date.now()"
                />
              </div>
            </div>
            <div class="avatar-show">
              <img src="@/assets/image/avatar.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <u-toolbar @insert="insertInput" @upload="upload" />
    <div
      @blur="contentBlur"
      ref="contenteditableInputs"
      class="g-chat-container-footer-input"
      contenteditable="true"
    ></div>
    <div class="g-chat-container-footer-btn">
      <div class="" style="margin-right: 10px"> Ctrl+V粘贴, Ctrl+Enter换行 </div>
      <el-button @click="sendInfoAction">发送</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref, nextTick } from 'vue'
  import UToolbar from '../u-toolbar/index.vue'
  import defalutAvator from '@/assets/image/avatar.png'
  import { chatData } from './chat.js'
  import { ElMessage } from 'element-plus'
  import dayjs from 'dayjs'

  const range = ref<HTMLElement | null>(null)
  const selection = ref<any>(null)
  const chatDatas = ref<any>(chatData)
  const defalutAvatorImg = ref<any>(defalutAvator)
  const contenteditableInputs = ref<HTMLElement | null>(null)
  const chatContentBoxs = ref<HTMLElement | null>(null)
  const preview_src_data = ref<string[]>([])

  const focusContentEditable = () => {
    const editor = contenteditableInputs.value
    editor?.focus()
    // 获取选中的元素
    selection.value = document.getSelection()
    range.value = selection.value.getRangeAt(0)
  }

  const keepLastIndex = (obj) => {
    if (window.getSelection) {
      // ie11 10 9 ff safari
      obj.focus() // 解决ff不获取焦点无法定位问题
      let range = window.getSelection() // 创建range
      range.selectAllChildren(obj) // range 选择obj下所有子内容
      range.collapseToEnd() // 光标移至最后
    } else if (document.selection) {
      // ie10 9 8 7 6 5
      let range = document.selection.createRange() // 创建选择对象
      // var range = document.body.createTextRange();
      range.moveToElementText(obj) // range定位到obj
      range.collapse(false) // 光标移至最后
      range.select()
    }
  }

  const setCursor = (node?: any, before?: boolean) => {
    /**
     * node 为传入的节点，不传则foucs到之前保存的位置
     * before 控制折叠方向
     */
    if (node) {
      // 需要新建一个range来添加内容
      let range = document.createRange()
      range.selectNode(node)
      range.collapse(!!before)
      selection.value.removeAllRanges()
      selection.value.addRange(range)
      // 更新 range
      range.value = range
    } else {
      selection.value.removeAllRanges()
      // 使用之前的
      selection.value.addRange(range.value)
    }
  }
  const contentBlur = () => {
    /**
     * 每次焦点移出都要保存一次当前 range ，后面好放回来
     * 由于输入框以外的点击都会使输入框失去焦点，不知道会有什么操作，故勤保存
     */
    range.value = selection.value.getRangeAt(0)
  }

  /**
   * @func 聊天框聚焦
   * @param e
   */
  const contentFoucs = (e) => {
    /**
     * range更新到点击的位置
     * 点到图片就根据点击位置和图片大小设置一个合理的位置(前或后)
     */
    let node = e ? e.target : {}
    if (node.tagName === 'IMG') {
      range.value = selection.value.getRangeAt(0)
      // 设置光标的节点
      setCursor(node, e.offsetX < node.width / 2)
    }
  }

  const insertInput = (node?: any, type?: string) => {
    if (type === 'IMG') {
      range.value.insertNode(node)
      setCursor(node, false)
    } else {
      setCursor()
    }
  }

  const sendMessageData = (content: string, type = 1) => {
    const day = dayjs().format('YYYY-MM-DD')
    return {
      is_self: 1,
      created_at: day,
      content,
      type,
      id: Date.now() + Math.random(),
    }
  }

  const getPreviewList = () => {
    preview_src_data.value = []
    nextTick(() => {
      chatDatas.value.forEach((item) => {
        if (item.type === 2) {
          preview_src_data.value.push(item.content)
        }
      })
    })
  }

  const upload = (newBase64: string) => {
    const value = contenteditableInputs.value
    let image = new Image()
    image.onload = function () {
      value.appendChild(image)
      keepLastIndex && keepLastIndex(value)
    }
    image.src = newBase64
    image.setAttribute('insert', 'insert')
    image.width = 100
  }

  const scrollHeight = () => {
    nextTick(() => {
      setTimeout(() => {
        chatContentBoxs.value.scrollTop = chatContentBoxs.value.scrollHeight
      }, 0)
    })
  }

  const sendInfoAction = () => {
    const value = contenteditableInputs.value.innerHTML
    console.log('value===', value)
    if (!value) {
      setCursor()
      return ElMessage.error('请填写发送内容')
    }
    let reg = /<img.*?src="(.*?)".*?title="(.*?)".*?>/gi
    let reg1 = /<img.*?src="(.*?)".*?insert="(.*?)">/gi
    let content = value.replace(reg, '[$2]')

    let data = []

    let flag = content.match(reg1)
    console.log('content', flag)
    if (flag) {
      // 过滤图片进行分割
      let content2 = content.replace(reg1, (item, $1) => {
        return `/b/~${$1}/b/~`
      })
      let splitImg = content2.split('/b/~')
      for (let item of splitImg) {
        if (item) {
          chatDatas.value.push(sendMessageData(item, 2))
        }
      }
    } else {
      data = sendMessageData(value)
      chatDatas.value.push(data)
    }

    getPreviewList()

    contenteditableInputs.value.innerHTML = ''
    console.log('content--', chatDatas.value)

    scrollHeight()
  }

  onMounted(() => {
    nextTick(() => {
      focusContentEditable()
    })
  })
</script>

<style lang="scss" scoped>
  .g-layout-content-center {
    min-height: 300px;
    padding: 0 15px 15px;
    flex: auto;
    overflow: auto;
    max-height: 400px;

    background: #f7f6f4;
    border-right: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
    box-sizing: border-box;
  }
  [contenteditable]:focus {
    outline: none;
  }
  .g-chat-container-footer-input {
    word-break: break-all;
    padding: 8px;
    white-space: pre-wrap;
    overflow: auto;
    min-height: 120px;
    flex: 1;
    background: #f7f6f4;
    ::v-deep(.at-logo) {
      padding-right: 5px;
      vertical-align: text-bottom;
    }
  }
  .g-chat-container-footer-btn {
    height: 50px;
    background: #f7f6f4;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-shrink: 0;
    ::v-deep(.el-button) {
      padding: 8px 20px;
      margin-right: 15px;
    }
  }
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
      top: -364px;
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

  .from_user_info {
    width: 100%;
    // overflow: hidden;
    float: left;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    ::v-deep .share-link {
      color: #000;
      text-decoration: none;
      section {
        display: flex;
        align-items: center;
      }
      .clamp {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .left-side {
        flex: 1;
      }
      .right-side {
        width: 60px;
        margin-left: 20px;
        img {
          width: 100%;
        }
      }
    }
    .receive-message-wrap {
      display: flex;
    }
    .text-content {
      background: #fff;
      word-break: break-all;
      padding: 5px 10px;
      max-width: 300px;
      white-space: pre-wrap;
    }
    .receive-message-info {
      background: white;
      display: flex;
      align-items: center;
      padding: 0 5px;
      border-radius: 4px;
    }
    .contact-nickname {
      margin-bottom: 5px;
      color: #b4b4b4;
    }
    .avatar-show {
      flex-shrink: 0;
      width: 35px;
      height: 35px;
      margin-right: 10px;
      border: 1px solid #e9e9e9;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ower-user_info {
    font-size: 12px;
    display: flex;
    width: 100%;
    float: right;
    justify-content: flex-end;
    flex-direction: column;
    margin-top: 10px;
    .text-content {
      word-break: break-all;
      padding: 5px;
      white-space: pre-wrap;
      max-width: 300px;
    }
    .receive-message-wrap {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .receive-message-info {
      background: #9eea6a;
      display: flex;
      align-items: center;
      padding: 0 5px;
      border-radius: 4px;
    }
    .contact-nickname {
      text-align: right;
      margin-bottom: 5px;
      color: #b4b4b4;
    }
    .avatar-show {
      flex-shrink: 0;
      width: 35px;
      height: 35px;
      margin-left: 10px;
      border: 1px solid #e9e9e9;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
