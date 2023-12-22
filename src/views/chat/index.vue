<template>
  <div class="app-container">
    <div class="app-container-inner m-chat">
      <div style="margin-bottom: 15px; flex-shrink: 0">聊天内容框，功能有发送emoji表情，上传图片，发送图片，内容滚动，发送文字</div>
      <u-chat-box class="m-chat-box" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import UChatBox from './components/u-chartBox/index.vue'
</script>

<style lang="scss" scoped>
  .m-chat {
    display: flex;
    flex-direction: column;
    .m-chat-box {
      flex: 1;
      overflow: hidden;
    }
  }
</style>
