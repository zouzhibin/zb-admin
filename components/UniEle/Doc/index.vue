<template>
  <div>
    <svg-icon icon-class="question" @click="goto"/>
  </div>
</template>

<script>
export default {
  name: 'UniEleDoc',
  data() {
    return {
      url: 'https://gitee.com/nickzhan/uni-element-ui-admin/blob/master/README.md'
    }
  },
  methods: {
    goto() {
      window.open(this.url)
    }
  }
}
</script>