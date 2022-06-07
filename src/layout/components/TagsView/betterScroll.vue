<template>
  <div ref="bsWrap" class="tags-scroll-wrap">
    <div ref="bsContent" class="tags-scroll" >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted,nextTick } from 'vue';
import { useElementSize } from '@vueuse/core';
import BScroll from '@better-scroll/core';
import type { Options } from '@better-scroll/core';

interface Props {
  /** better-scroll的配置: https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-options.html */
  options: Options;
}

const props = defineProps<Props>();

const bsWrap = ref<HTMLElement>();
const instance = ref<BScroll>();
const bsContent = ref<HTMLElement>();

function initBetterScroll() {
  nextTick(()=>{
    instance.value = new BScroll(bsWrap.value, props.options);
  })
}

// 滚动元素发生变化，刷新BS
const { width: wrapWidth } = useElementSize(bsWrap);

const { width, height } = useElementSize(bsContent);
watch([() => wrapWidth.value, () => width.value, () => height.value], () => {
  if (instance.value) {
    instance.value.refresh();
  }
});

onMounted(() => {
  initBetterScroll();
});

defineExpose({ instance });
</script>
<style scoped>
.tags-scroll-wrap{
  width: 100%;
}
.tags-scroll-inner{
  /*display: flex;*/
}
.tags-scroll{
  display: inline-block;
}
</style>
