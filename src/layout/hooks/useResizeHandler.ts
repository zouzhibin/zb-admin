import {useSettingStore} from "@/store/modules/setting"
import {computed, onMounted, onUnmounted, watch} from "vue";
import {useRoute} from "vue-router";

const { body } = document

const WIDTH = 992 // refer to Bootstrap's responsive design

export const useResizeHandler = ()=>{
    const SettingStore = useSettingStore()
    const route = useRoute()
    const device = computed(()=>{

        return SettingStore.device
    })
    function $_isMobile(){
        const rect = body.getBoundingClientRect()
        return rect.width - 1 < WIDTH
    }
    function $_resizeHandler(){
        if (!document.hidden) { // bool型，表示页面是否处于隐藏状态。页面隐藏包括页面在后台标签页或者浏览器最小化
            const isMobile = $_isMobile()
            SettingStore.toggleDevice(isMobile ? 'mobile' : 'desktop')

            if (isMobile) {
                SettingStore.closeSideBar({ withoutAnimation: true })
            }
        }
    }
    onMounted(()=>{
        const isMobile = $_isMobile()
        if (isMobile) {
            SettingStore.toggleDevice('mobile')
            SettingStore.closeSideBar({ withoutAnimation: true })
        }
        window.addEventListener('resize', $_resizeHandler)

        watch(route,()=>{
            if (device.value === 'mobile' && SettingStore.isCollapse) {
                SettingStore.closeSideBar({ withoutAnimation: false })
            }
        })
    })

    onUnmounted(()=>{
        window.removeEventListener('resize', $_resizeHandler)
    })


    return {device}
}
