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
      url: 'https://github.com/zouzhibin/vue-admin-perfect'
    }
  },
  methods: {
    goto() {
      window.open(this.url)
    }
  }
}
</script>
