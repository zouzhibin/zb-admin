import raf from 'raf'

/**
 * requestAnimationFrame 节流
 * scroll 和 touchmove 等事件触发很频繁，比屏幕刷新频率更快，将导致无效的渲染和重绘
 * 这里使用 requestAnimationFrame 来优化滚动处理，在一帧中只进行一次有效重绘
 */
export default function requestAnimationFrameThrottle(callback) {
  let id

  const factory = (args) => () => {
    id = null
    callback(...args)
  }

  const throttled = (...args) => {
    if (id == null) {
      id = raf(factory(args))
    }
  }

  throttled.cancel = () => raf.cancel(id)

  return throttled
}
