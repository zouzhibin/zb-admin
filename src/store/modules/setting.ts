import {Module} from "vuex";

const state = {
    themeConfig:{
        // 菜单展示模式 默认 vertical   horizontal / vertical
        mode: 'vertical',
        // tagsView 是否展示
        showTag:true, // 默认展示
        // 页脚
        footer: true
    },
    isShowTag: true,
    mode: 'vertical',
}

const mutations = {
    SET_TAG: (state, value) => {
        state.themeConfig.showTag = value
    },
    SET_MODE: (state, value) => {
        state.themeConfig.mode = value
    },
}
const actions = {
    setTag({ commit }, value) {
        commit('SET_TAG', value)
    },
    setMode({ commit }, value) {
        commit('SET_MODE', value)
    },
}


const setting:Module<any, any> = {
    namespaced:true,
    state,
    mutations,
    actions
}

export default setting
