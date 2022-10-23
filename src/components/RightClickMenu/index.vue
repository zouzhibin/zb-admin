<template>
  <div class="g-right-click-menu" :style="style" v-if="isShow" ref="rightMenu">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="operating"
      @click.stop="operatingRightAction($event, item)"
      >{{ item.label }}</div
    >
  </div>
</template>
<script lang="ts">
  export default {
    props: {
      data: {
        type: Array,
        default: () => [],
      },
      left: {
        type: Number,
        default: 0,
      },
      type: {
        type: Number,
        default: 1,
      },
      dataInfo: {
        type: Object,
        default: () => {},
      },
      top: {
        type: Number,
        default: 0,
      },
      isViewInfo: {
        type: Boolean,
        default: true,
      },
    },
    watch: {
      left: {
        handler(newName, oldName) {
          if (newName) {
            this.isShow = true
          }
        },
        // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
        // immediate: true
      },
    },
    computed: {
      style() {
        let clientHeight = document.body.clientHeight
        let y = this.top
        if (clientHeight - y < 100) {
          return `left:${this.left}px;bottom:${clientHeight - y}px`
        } else {
          return `left:${this.left}px;top:${this.top}px`
        }
      },
    },
    data() {
      return {
        isShow: false,
      }
    },
    methods: {
      /**
       * @func 点击操作
       * @param val 1、置顶/取消置顶 2、开启/关闭免打扰 3、开启/关闭星标 4、删除会话
       */
      operatingRightAction($event, val) {
        this.$emit('ok', $event, val)
        this.isShow = false
      },
    },
    mounted() {
      let _self = this
      window.addEventListener('click', function () {
        _self.isShow = false
      })
      window.addEventListener('mousedown', function (e) {
        if (e.which === 3) {
          _self.isShow = false
        }
      })
    },
  }
</script>
<style lang="scss" scoped>
  .g-right-click-menu {
    left: 0;
    background: white;
    width: 148px;
    height: auto;
    position: fixed;
    //border: 1px solid #c4c4c4;
    z-index: 9;
    //box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    .operating {
      font-size: 12px;
      padding-left: 23px;
      cursor: pointer;
      line-height: 27px;
    }
    .operating:hover {
      background: #e2e2e2;
    }

    .last-delete {
      border-top: 1px solid #ededed;
    }
  }
</style>
