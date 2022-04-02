
<template>
  <div class="row">
    <div style="margin-bottom: 10px">网格拖拽排序</div>
    <el-button class="btn " @click="sorter" type="primary" style="margin-bottom: 20px">
      还原
    </el-button>

    <div class="col-6" style="max-width: 1200px">
      <draggable
          class="list-group"
          tag="transition-group"
          :component-data="{
          tag: 'ul',
          type: 'transition-group',
          name: !drag ? 'flip-list' : null
        }"
          v-model="message"
          v-bind="dragOptions"
          @start="drag = true"
          @end="drag = false"
          item-key="order"
      >
        <template #item="{ element }">
          <li class="list-group-item" :style="{backgroundColor:`${element.color}` }">
            <i
                :class="
                element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
              "
                @click="element.fixed = !element.fixed"
                aria-hidden="true"
            ></i>
            {{ element.name }}
          </li>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts" setup>
  // 参考文档 https://sortablejs.github.io/vue.draggable.next/#/transition-example-2
  // https://github.com/SortableJS/vue.draggable.next/blob/master/package.json
  import draggable from "vuedraggable";
  import {computed, ref} from "vue";
  import {getColor} from '@/utils/index'

  const message = ref([]);
  for(let i=0;i<28;i++){
    message.value.push({
      name:i,
      order:i+1,
      color:getColor()
    })
  }

  const drag = ref(false)

  // 设置排序参数
  const dragOptions = computed(()=>{
    return{
          animation: 200,
          group: "description",
          disabled: false,
          ghostClass: "ghost" // 滑动颜色
        };
  })

  const sorter = ()=>{
    message.value =  message.value.sort((a, b) => a.name - b.name);
  }
</script>

<style lang="scss" scoped>
.list-group-item {
  position: relative;
  width: 100px;
  margin-right: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  padding: 0.75rem 1.25rem;
  background-color: #fff;
  color: white;
  font-weight: 500;
  font-size: 24px;
  border: 1px solid rgba(0,0,0,.125);
}
.button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  display: flex;
  display: -webkit-box;
  display: flex;
  -ms-flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  //flex-direction: column;
  padding-left: 0;
  flex-wrap: wrap;
  margin-bottom: 0;
  border-radius: 0.25rem;

}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
