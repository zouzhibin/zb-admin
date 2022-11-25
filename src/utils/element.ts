import { ElLoading } from 'element-plus'
import {
    Loading
} from '@element-plus/icons-vue'
let loading = null

export const openLoading = (options)=>{
    const text = options.text||'加载中'
    loading = ElLoading.service({
        lock: true,
        text: text,
        spinner:Loading,
        background: 'rgba(0, 0, 0, 0.7)',
    })
}
export const closeLoading = () = {
    loading&&loading()
}
