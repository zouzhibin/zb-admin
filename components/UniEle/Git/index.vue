<template>
  <div>
    <svg-icon icon-class="s-promotion" @click="goto"/>
  </div>
</template>

<script>
export default {
  name: 'UniEleGit',
  data() {
    return {
      url: 'https://gitee.com/nickzhan/uni-element-ui-admin'
    }
  },
  methods: {
    goto() {
      window.open(this.url)
    }
  }
}
</script>