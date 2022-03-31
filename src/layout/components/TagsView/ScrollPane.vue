<template>
  <el-scrollbar ref="scrollContainer" :vertical="false" class="scroll-container" @wheel.native.prevent="handleScroll">
    <slot />
  </el-scrollbar>
</template>

<script lang="ts" setup>
import {computed, onMounted, ref,getCurrentInstance} from "vue";

const tagAndTagSpacing = 4 // tagAndTagSpacing

const left = ref(0)
const scrollContainer = ref()

const scrollWrapper = computed(()=>{
  return scrollContainer.value.$refs.wrap
})

const handleScroll = (e)=>{
  const eventDelta = e.wheelDelta || -e.deltaY * 40
  const $scrollWrapper = scrollWrapper.value
  $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft + eventDelta / 4

}

const moveToTarget = (currentTag,tagLists)=>{
  const $container = scrollContainer.value.$el
  const $containerWidth = $container.offsetWidth
  const $scrollWrapper = scrollContainer.value.$refs.wrap$
  const _this = getCurrentInstance()
  const tagList = tagLists

  let firstTag = null
  let lastTag = null

  if (tagList.length > 0) {
    firstTag = tagList[0]
    lastTag = tagList[tagList.length - 1]
  }
  if (firstTag === currentTag) {
    $scrollWrapper.scrollLeft = 0
  } else if (lastTag === currentTag) {
    $scrollWrapper.scrollLeft = $scrollWrapper.scrollWidth - $containerWidth
  } else {
    // find preTag and nextTag
    const currentIndex = tagList.findIndex(item => item === currentTag)
    const prevTag = tagList[currentIndex - 1]
    const nextTag = tagList[currentIndex + 1]

    // the tag's offsetLeft after of nextTag
    const afterNextTagOffsetLeft = nextTag.$el.offsetLeft + nextTag.$el.offsetWidth + tagAndTagSpacing

    // the tag's offsetLeft before of prevTag
    const beforePrevTagOffsetLeft = prevTag.$el.offsetLeft - tagAndTagSpacing

    if (afterNextTagOffsetLeft > $scrollWrapper.scrollLeft + $containerWidth) {
      $scrollWrapper.scrollLeft = afterNextTagOffsetLeft - $containerWidth
    } else if (beforePrevTagOffsetLeft < $scrollWrapper.scrollLeft) {
      $scrollWrapper.scrollLeft = beforePrevTagOffsetLeft
    }
  }
}

defineExpose({
  moveToTarget
})
onMounted(()=>{

})
</script>

<style lang="scss" scoped>
.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
  ::v-deep {
    .el-scrollbar__bar {
      bottom: 0px;
    }
    .el-scrollbar__wrap {
      height: 35px;
    }
  }
}
</style>
