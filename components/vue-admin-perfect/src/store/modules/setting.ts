import {Module} from "vuex";

const state = {
    isShowTag: true,
    mode: 'vertical',
}

const mutations = {
    SET_TAG: (state, value) => {
        state.isShowTag = value
    },
    SET_MODE: (state, value) => {
        state.mode = value
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
