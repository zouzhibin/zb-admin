import {Module} from "vuex";

const state = {
    visitedViews: [],
    cachedViews: []
}

const mutations = {
    ADD_VISITED_VIEW: (state, view) => {
        if (state.visitedViews.some(v => v.path === view.path)) return
        state.visitedViews.push(
            Object.assign({}, view, {
                title: view.meta.title || 'no-name'
            })
        )
    },
    ADD_CACHED_VIEW: (state, view) => {
        if (state.cachedViews.includes(view.name)) return
        if (!view.meta.noCache) {
            state.cachedViews.push(view.name)
        }
    },
    DEL_VISITED_VIEW: (state, view) => {
        for (const [i, v] of state.visitedViews.entries()) {
            if (v.path === view.path) {
                state.visitedViews.splice(i, 1)
                break
            }
        }
    },
    DEL_CACHED_VIEW: (state, view) => {
        const index = state.cachedViews.indexOf(view.name)
        index > -1 && state.cachedViews.splice(index, 1)
    },

}

const actions = {
    addView({ dispatch }, view) {
        dispatch('addVisitedView', view)
        // dispatch('addCachedView', view)
    },
    addVisitedView({ commit }, view) {
        commit('ADD_VISITED_VIEW', view)
    },
    delView({ dispatch, state }, view) {
        return new Promise(resolve => {
            dispatch('delVisitedView', view)
            dispatch('delCachedView', view)
            resolve({
                visitedViews: [...state.visitedViews],
                cachedViews: [...state.cachedViews]
            })
        })
    },
    delVisitedView({ commit, state }, view) {
        return new Promise(resolve => {
            commit('DEL_VISITED_VIEW', view)
            resolve([...state.visitedViews])
        })
    },
    delCachedView({ commit, state }, view) {
        return new Promise(resolve => {
            commit('DEL_CACHED_VIEW', view)
            resolve([...state.cachedViews])
        })
    },
}



const tagsView:Module<any, any> = {
    namespaced:true,
    state,
    mutations,
    actions
}

export default tagsView
