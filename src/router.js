// 引入vue
import Vue from 'vue'
//引入路由
import VueRouter from 'vue-router'
// 注册路由
Vue.use(VueRouter)
// 引入相关组件
import Home from './pages/Home.vue'
import Find from './pages/Find.vue'
import User from './pages/User.vue'

let router = new VueRouter({
    routes: [{
        path: '/home',
        component: Home
    }, {
        path: "/find",
        component: Find
    }, {
        path: "/user",
        component: User
    }]
})

export default router