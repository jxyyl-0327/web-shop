const studyModule = {
    // 开启命名空间
    namespaced: true,
    state: {
        msg: 2001,
        foo: "foo"
    },
    getters: {
        msg2: function (state) {
            return state.msg * 100
        }
    },
    mutations: {
        updateMsg(state, payload) {
            state.msg += payload.count
        }
    },
    actions: {
        asyncUpdateMsg(store, payload) {
            setTimeout(() => {
                store.commit('updateMsg', payload)
            }, 2000)
        }
    }
}
export default studyModule