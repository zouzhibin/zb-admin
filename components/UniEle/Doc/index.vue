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