<template>
  <div class="u-wangEditor">
    <div id="wangEditor"></div>
  </div>
</template>
<script lang="ts" setup>
  // 引入 wangEditor
  import wangEditor from 'wangeditor'
  import { onBeforeUnmount, onMounted, watch } from 'vue'
  let editors = null

  let emit = defineEmits(['update:modelValue'])
  let props = defineProps({
    modelValue: String,
  })

  const getEditorData = () => {
    // 通过代码获取编辑器内容
    let data = editors.txt.html()
    alert(data)
  }

  onMounted(() => {
    watch(
      () => props.modelValue,
      (value) => {
        editors.txt.html(value)
      },
    )
    const editor = new wangEditor(`#wangEditor`)
    // 配置 onchange 回调函数，将数据同步到 vue 中
    editor.config.onchange = (newHtml) => {
      emit('update:modelValue', newHtml)
    }
    // 创建编辑器
    editor.create()

    editors = editor
  })

  onBeforeUnmount(() => {
    // 调用销毁 API 对当前编辑器实例进行销毁
    editors.destroy()
    editors = null
  })
</script>
<style></style>
