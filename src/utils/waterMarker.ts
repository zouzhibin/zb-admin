function watermark(options) {
  const {
    container = document.body, // 容器
    width = '240', // canvas元素宽
    height = '100', // canvas元素高
    textAlign = 'left', // 文字对齐
    textBaseline = 'bottom', // 基准线
    font = '16px Microsoft Yahei', // 字体大小及样式
    fillStyle = '#000', // 自定义水印的颜色
    content = 'Vue Admin Perfect', // 水印内容
    globalAlpha = 0.3, // 设置图形和图像透明度的值
    rotate = 16, // 文字旋转角度
    zIndex = 1000, // 元素堆叠顺序
    isCancel = true,
  } = options

  const canvas = document.createElement('canvas')
  canvas.setAttribute('width', width)
  canvas.setAttribute('height', height)
  const ctx = canvas.getContext('2d') // 获取 canvas2d 上下文
  ctx.globalAlpha = globalAlpha
  ctx.textAlign = textAlign
  ctx.textBaseline = textBaseline
  ctx.font = font
  ctx.fillStyle = fillStyle
  ctx.rotate((Math.PI * rotate) / 180)
  // ctx.rotate(-10 * Math.PI / 140);
  ctx.fillText(content, 50, 50)

  const base64Url = canvas.toDataURL() // 返回一个包含图片展示的 data URI

  const __wm = document.querySelector('.__wm') // 选择器
  const watermarkDiv = __wm || document.createElement('div')
  const styleStr = `
    position:absolute;
    top:0px;
    left:0px;
    width:100%;
    height:100%;
    z-index:${zIndex};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${base64Url}')`

  watermarkDiv.setAttribute('style', styleStr)
  watermarkDiv.classList.add('__wm') // 为元素添加“__wm”类名

  container.style.position = 'relative'
  container.appendChild(watermarkDiv) // 添加元素

  // 监听删除 防止用户去手动删除，如果手动删除 ，在重新添加
  // const MutationObserver = window.MutationObserver || window.WebKitMutationObserver
  // // 检查浏览器是否支持这个API
  // if (MutationObserver) {
  //   const args = arguments[0]
  //   let mo = new MutationObserver(function () {
  //     const __wm = document.querySelector('.__wm')
  //     // 只在__wm元素变动才重新调用
  //     if ((__wm && __wm.getAttribute('style') !== styleStr) || !__wm || document.body.style.position !== 'relative') {
  //     console.log('============',isCancel)
  //       // 避免一直触发
  //       mo.disconnect()
  //       mo = null
  //       watermark(args)
  //     }
  //   })
  //   mo.observe(document.body, {
  //     attributes: true, // 观察目标节点的属性节点
  //     subtree: false, // 观察目标节点的所有后代节点
  //     childList: true // 观察目标节点的子节点
  //   })
  // }
}
export default watermark
