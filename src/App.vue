<template>
  <el-config-provider :locale="locale">
    <router-view v-slot="{ Component }">
      <component :is="Component"/>
    </router-view>
  </el-config-provider>

</template>
<script>
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'

import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  components: {
    ElConfigProvider,
  },
  setup() {
    return {
      locale: zhCn,
    }
  },
})
</script>
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
*{
  margin: 0;
  padding: 0;
}
</style>
