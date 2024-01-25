<template>
  <div class="inputStrength">
    <el-input v-model="inputValue" placeholder="请输入密码" :type="textType" v-bind="$attrs" class="inputStrength-input">
      <template #suffix>
        <div class="inputStrength-input_icon" @click="changeTextType">
          <svg-icon :icon-class="passwordType ? 'eye' : 'eye-open'" />
        </div>
      </template>
    </el-input>
    <div v-if="strength" class="inputStrength-line">
      <div class="inputStrength-line_visual" :data-score="getPasswordStrength"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { watch, unref, ref, computed, PropType } from 'vue'
  import type { ZxcvbnResult } from '@zxcvbn-ts/core'
  import { zxcvbn } from '@zxcvbn-ts/core'

  const props = defineProps({
    // 是否显示强度
    strength: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    modelValue: {
      type: String as PropType<string>,
      default: '',
    },
  })
  const emits = defineEmits(['update:modelValue'])

  // 输入框的值
  const inputValue = ref(props.modelValue)

  //输入框类型，默认密码态
  const textType = ref<'password' | 'text'>('password')

  //切换输入框类型
  const changeTextType = () => {
    textType.value = unref(textType) === 'text' ? 'password' : 'text'
  }
  //切换icon
  const passwordType = computed(() => unref(textType) === 'password')

  // 计算密码强度
  const getPasswordStrength = computed(() => {
    const value = unref(inputValue)
    const zxcvbnRef = zxcvbn(inputValue.value) as ZxcvbnResult
    return value ? zxcvbnRef.score : -1
  })

  watch(
    () => props.modelValue,
    (val: string) => {
      if (val === unref(inputValue)) return
      inputValue.value = val
    },
  )

  watch(
    () => inputValue.value,
    (val: string) => {
      emits('update:modelValue', val)
    },
  )
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
