<template>
  <router-view v-slot="{ Component }">
        <component :is="Component"/>
  </router-view>
</template>

<style lang="scss">
#app {
  position: relative;
  width: 100%;
  height: 100%;
    /*background: #f6f8f9;*/
    /*background: goldenrod;*/
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html,body{
  height: 100%;
    background: #f6f8f9;

}
.el-pager li:focus{
  border: none;
}
*{
  margin: 0;
  padding: 0;
}
</style>
