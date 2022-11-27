/**
 *  @description 方法用来切换元素 进入全屏
 *  @vueuse/core 提供了 useFullscreen 方法，因此项目中采用 useFullscreen，实现效果功能是一样得，目的是为了减少代码量
 *  它原理原理实现如下：
 */

import { ElMessage } from "element-plus";
import {onMounted} from "vue";

export const useFullscreen = () => {
    /**
     * @description: 是否支持全屏+判断浏览器前缀
     */
    const isFullscreen = ()=> {
        let prefixName = ""; // 浏览器前缀
        let fullscreenEnabled = false;
        // 判断浏览器前缀
        if (document.fullscreenEnabled) {
            fullscreenEnabled = document.fullscreenEnabled;
        // webkit
        } else if (document.webkitFullscreenEnabled) {
            fullscreenEnabled = document.webkitFullscreenEnabled;
            prefixName = "webkit";
        // moz
        } else if (document.mozFullScreenEnabled) {
            fullscreenEnabled = document.mozFullScreenEnabled;
            prefixName = "moz";
        // ms
        } else if (document.msFullscreenEnabled) {
            fullscreenEnabled = document.msFullscreenEnabled;
            prefixName = "ms";
        }
        return {
            fullscreenEnabled,
            prefixName
        }
    }


    /**
     * @description: 检测有没有元素处于全屏状态
     * @return 布尔值
     */
    const isElementFullScreen = ()=> {
        const fullscreenElement =
            document.fullscreenElement ||
            document.msFullscreenElement ||
            document.mozFullScreenElement ||
            document.webkitFullscreenElement;
        if (fullscreenElement === null) {
            return false; // 当前没有元素在全屏状态
        } else {
            return true; // 有元素在全屏状态
        }
    }

    /**
     * @description: 将传进来的元素全屏
     * @param {String} domName 要全屏的dom名称
     */
    const Fullscreen = (target)=> {
        const targetRef = target || (document == null ? void 0 : document.querySelector("html"));
        const {prefixName} = isFullscreen()
        const methodName =
            prefixName === ""
                ? "requestFullscreen"
                : `${prefixName}RequestFullScreen`;
        targetRef[methodName]();
    }

    // 退出全屏
    const exitFullscreen =()=> {
        const {prefixName} = isFullscreen()
        const methodName =
            prefixName === ""
                ? "exitFullscreen"
                : `${prefixName}ExitFullscreen`;
        document[methodName]();
    }

    /**
     * @description: 浏览器无法进入全屏时触发,可能是技术原因，也可能是用户拒绝：比如全屏请求不是在事件处理函数中调用,会在这里拦截到错误
     * @param {Function} enterErrorFn 回调
     */
    const screenError = ()=> {
        const {prefixName} = isFullscreen()
        const methodName = `on${prefixName}fullscreenerror`;
        document[methodName] = e => {
            ElMessage.error('进入全屏失败')
        };
    }

    /**
     * @description: 监听进入/离开全屏
     * @param {Function} enter 进入全屏的回调
     *  @param {Function} quit 离开全屏的回调
     */
    const screenChange = (enter, quit)=> {
        const {fullscreenEnabled,prefixName} = isFullscreen()
        if (!fullscreenEnabled) return;
        const methodName = `on${prefixName}fullscreenchange`;
        document[methodName] = e => {
            if (isElementFullScreen()) {
                enter && enter(e); // 进入全屏回调
            } else {
                quit && quit(e); // 离开全屏的回调
            }
        };
    }

    onMounted(()=>{
        screenError()
    })


    return{
        isFullscreen,
        isElementFullScreen,
        Fullscreen,
        exitFullscreen,
        screenChange
    }
}
