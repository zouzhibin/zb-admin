import ResizeObserver from 'resize-observer-polyfill'
import { onBeforeUnmount } from 'vue'
import requestAnimationFrameThrottle from '@/utils/requestAnimationFrameThrottle'
export const useResizeElement = (chart, chartsRef) => {
  let observer = null
  let widthW = 0
  let heightW = 0
  const handleResize = (entries) => {
    const { contentRect } = entries[0]
    let { width, height } = contentRect
    width = Math.floor(width)
    height = Math.floor(height)
    if (widthW !== width || heightW !== height) {
      widthW = width
      heightW = height
      chart && chart.resize()
    }
  }
  const addObserver = () => {
    observer = new ResizeObserver(requestAnimationFrameThrottle(handleResize))
    observer.observe(chartsRef)
  }

  const removeObserver = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
    chart && chart.dispose()
  }

  onBeforeUnmount(() => {
    removeObserver()
  })

  return {
    addObserver,
  }
}
