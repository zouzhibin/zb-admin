<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script lang="ts">
  import { isExternal } from '@/utils/validate.js'

  export default {
    props: {
      to: {
        type: String,
        required: true,
      },
    },
    computed: {
      isExternal() {
        return isExternal(this.to)
      },
      type() {
        if (this.isExternal) {
          return 'a'
        }
        return 'router-link'
      },
    },
    methods: {
      linkProps(to) {
        if (this.isExternal) {
          return {
            href: to,
            target: '_blank',
            rel: 'noopener',
          }
        }
        return {
          to: to,
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
  }
</style>
