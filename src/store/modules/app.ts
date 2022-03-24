import {Module} from "vuex";

const state = {
    isCollapse: false,
}

const mutations = {
    SET_COLLAPSE: (state, value) => {
        state.isCollapse = value
    }
}



const app:Module<any, any> = {
    namespaced:true,
    state,
    mutations,
}

export default app
