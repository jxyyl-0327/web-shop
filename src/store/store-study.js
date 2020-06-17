import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    // state：是vuex的据存储中心，
    // 放在state中的数据，所有组件都可以共享，并且保持同步，
    // 只要state中的数据发生变化，视图中自动更新页面状态
    state: {
        msg: 2001,
        foo: 'foo'
    },
    // getters：可以理解为组件中的计算属性
    // 在getters中关联的state只要发生变化，getters会自动更新
    // getters是一个函数，但是一定要return一个表达式，可以把他当做变量来使用
    getters: {
        msg2: function (state) {
            return state.msg * 100
        }
    },

    // mutations:修改state主要入口
    // 在组件中使用this.store.commit('已定义的mutation方法'，'负载')来触发mutations方法
    // mutations在改变state时，会被devtools记录下来
    mutations: {
        updateMsg(state, payload) {
            state.msg += payload.count
        }
    },

    // 间接地异步修改state，在这里面的方法都是异步的
    // 在actions中可以直接state，在devtools中没有修改的记录，不便于调试（不建议使用）
    actions: {
        asyncUpdateMsg(store, payload) {
            setTimeout(() => {
                store.commit('updateMsg', payload)
            },2000)
        }
    }
})

export default store