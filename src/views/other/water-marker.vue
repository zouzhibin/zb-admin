<template>
  <div class="m-water-marker"></div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted } from 'vue'

function watermark (options) {
  const {
    container = document.body, // 容器
    width = '100', // canvas元素宽
    height = '100', // canvas元素高
    textAlign = 'left', // 文字对齐
    textBaseline = 'bottom', // 基准线
    font = '16px Microsoft Yahei', // 字体大小及样式
    fillStyle = '#000', // 自定义水印的颜色
    content = '内部文档，请勿外传', // 水印内容
    globalAlpha = 0.1, // 设置图形和图像透明度的值
    rotate = 16, // 文字旋转角度
    zIndex = 1000, // 元素堆叠顺序
  } = options;

  let canvas = document.createElement('canvas');
  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);
  let ctx = canvas.getContext('2d'); // 获取 canvas2d 上下文
  ctx.globalAlpha = globalAlpha;
  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  ctx.font = font;
  ctx.fillStyle = fillStyle;
  ctx.rotate((Math.PI * rotate) / 180);
  ctx.fillText(content, 50, 50);

  const base64Url = canvas.toDataURL(); // 返回一个包含图片展示的 data URI

  const __wm = document.querySelector('.__wm');//选择器
  const watermarkDiv = __wm || document.createElement("div");
  const styleStr = `
    position:absolute;
    top:0px;
    left:0px;
    width:100%;
    height:100%;
    z-index:${zIndex};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${base64Url}')`;

  watermarkDiv.setAttribute('style', styleStr);
  watermarkDiv.classList.add('__wm'); // 为元素添加“__wm”类名

  document.body.style.position = 'relative';
  if (!__wm) {
    document.body.appendChild(watermarkDiv); // 添加元素
  }

  const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  // 检查浏览器是否支持这个API
  if (MutationObserver) {
    const args = arguments[0];
    let mo = new MutationObserver(function () {
      const __wm = document.querySelector('.__wm');
      // 只在__wm元素变动才重新调用
      if ((__wm && __wm.getAttribute('style') !== styleStr) || !__wm || document.body.style.position !== 'relative') {
        // 避免一直触发
        mo.disconnect();
        mo = null;
        watermark(args);
      }
    });
    mo.observe(document.body, {
      attributes: true, // 观察目标节点的属性节点
      subtree: true, // 观察目标节点的所有后代节点
      childList: true, // 观察目标节点的子节点
    })
  }
}
  onMounted(()=>{
    nextTick(()=>{
      const canvas = document.createElement('canvas')
      const width = 100
      const height = 100
      canvas.width = width
      canvas.height = height
      const context = canvas.getContext('2d')
      context.font = "normal small-caps lighter 16px sans-serif";
      context.fillStyle = "#666";
      context.textAlign = "center";
      context.textBaseline = "Middle";
      context.rotate(-10 * Math.PI / 140);
      context.fillText('content', parseFloat(width) / 2, parseFloat(height) / 2);
      context.fillText('content', 60, 100);
      var base64Url = canvas.toDataURL();
      const watermarkDiv = document.getElementsByClassName('m-water-marker')[0]
      watermarkDiv.style.backgroundAttachment = "fixed";
      watermarkDiv.style.backgroundPosition = "center";
      watermarkDiv.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";
      // const options = {
      //   container : document.body, // 容器
      //   width : '100', // canvas元素宽
      //   height : '100', // canvas元素高
      //   textAlign : 'left', // 文字对齐
      //   textBaseline : 'bottom', // 基准线
      //   font : '16px Microsoft Yahei', // 字体大小及样式
      //   fillStyle : '#000', // 自定义水印的颜色
      //   content : '内部文档，请勿外传', // 水印内容
      //   globalAlpha : 0.1, // 设置图形和图像透明度的值
      //   rotate : 16, // 文字旋转角度
      //   zIndex : 1000, // 元素堆叠顺序
      // }
      watermark(options)
    })

  })
</script>

<style>
.m-water-marker{
  width: 1000px;
  height: 500px;
}
</style>
