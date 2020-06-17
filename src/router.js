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

// 使用绝对路径@引入文件
import A from '@/components/home/A'
import B from '@/components/home/B'
import C from '@/components/home/C'

// 使用懒加载引入文件,节省项目性能
const Cart = () => import('./pages/Cart.vue')
const Detail = () => import('./pages/Detail.vue')
const Good = () => import('./components/find/Good.vue')
const Price = () => import('./components/find/Price.vue')

let router = new VueRouter({
    // mode: 'history',
    routes: [
        // 访问/abc路径时，用三个命名视图来分别显示三个组件
        {
            path: "/abc",
            components: {
                a: A,
                b: B,
                c: C
            }
        },
        {
            path: '/home',
            component: Home,
            redirect: '',
            name: 'home'
        },
        {
            path: "/find",
            component: Find,
            // 二级路由
            children: [{
                path: 'good',
                component: Good
            }, {
                path: 'price',
                component: Price
            }]
        },
        {
            path: "/user",
            component: User
        },
        // 动态传参
        {
            path: "/detail/:id",
            component: Detail,
            props: true
        },
        {
            path: '/cart',
            component: Cart
        }
    ],

})
// 全局路由守卫：拦截路由跳转行为
// router.beforeEach((to, from, next) => {
//     console.log(to, from)
//     // 当路劲为购物车时，进行路由拦截
//     if (to.fullPath == '/cart') {
//         let isLogin = false
//         if (isLogin) {
//             next()
//         } else {
//             next('/user')
//         }
//     }else{
//         next()
//     }
// })


export default router