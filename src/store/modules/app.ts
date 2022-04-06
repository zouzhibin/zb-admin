import {Module} from "vuex";

const state = {
    isCollapse: true,
    withoutAnimation:false,
    device: 'desktop',
}

const mutations = {
    SET_COLLAPSE: (state, value) => {
        state.isCollapse = value
        state.withoutAnimation = false
    },
    // 获取设备
    TOGGLE_DEVICE: (state, device) => {
        state.device = device

    },
    // 点击遮罩层 关闭左边按钮
    CLOSE_SIDEBAR:(state, withoutAnimation) => {
        state.isCollapse = false
        state.withoutAnimation = withoutAnimation
    },
}
const actions = {
    toggleDevice({ commit }, device) {
        commit('TOGGLE_DEVICE', device)
    },
    closeSideBar({ commit }, { withoutAnimation }) {
        commit('CLOSE_SIDEBAR', withoutAnimation)
    },
}


const app:Module<any, any> = {
    namespaced:true,
    state,
    mutations,
    actions
}

export default app
