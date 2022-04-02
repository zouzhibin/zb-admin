<template>
  <splitpanes style="height: 800px">
    <pane min-size="20" class="left">1</pane>
    <pane>
      <splitpanes horizontal>
        <pane class="item1">2</pane>
        <pane class="item2">3</pane>
        <pane class="item3">4</pane>
      </splitpanes>
    </pane>
    <pane class="item4">5</pane>
  </splitpanes>
</template>

<script lang="ts" setup>
  // 参考文档 https://antoniandre.github.io/splitpanes/
  import { Splitpanes, Pane } from 'splitpanes'
  import 'splitpanes/dist/splitpanes.css'
</script>

<style scoped lang="scss">
.splitpanes__pane {
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  font-family: Helvetica, Arial, sans-serif;
  color: rgba(255, 255, 255, 0.6);
  font-size: 5em;
}
.left{
  background:#f38181 ;
}
.item1{
  background:#fce38a ;
}
.item2{
  background:#95e1d3 ;
}
.item3{
  background: rgb(72, 239, 205);
}
.item4{
  background: rgb(106, 170, 20);;
}
.item5{
  background: rgb(72, 239, 205);
}

::v-deep {
  .splitpanes__splitter{
    min-height: 6px;
    cursor: row-resize;
    background: white;
  }
  .splitpanes__splitter {
    min-width: 6px;
  }
}
</style>
