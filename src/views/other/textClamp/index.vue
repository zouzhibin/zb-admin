<template>
  <PageWrapLayout>
    <div class="text-clamp-wrap">
      <text-clamp :text="str" :max-lines="3">
        <template #after="{ toggle, expanded, clamped }">
          <el-button type="primary"  v-if="expanded || clamped"  @click="toggle">{{ expanded?'收起':'展开' }}</el-button>
        </template>
      </text-clamp>
    </div>
  </PageWrapLayout>
</template>

<script lang="ts" setup>
import TextClamp from 'vue3-text-clamp';
const str = `Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。`

const expand = ()=>{

}
</script>

<style lang="scss" scoped>
.text-clamp-wrap{
  padding: 20px;
  width: 300px;
  background: #f8f8f8;
  border: 1px solid #f1f1f1;
  border-radius: 2px;
  line-height: 2;
  word-break: break-all;
}
</style>
