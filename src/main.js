// 安装vue
import Vue from 'vue'
// 引入根组件
import App from './App.vue'



// 关闭项目启动时的生产提示
Vue.config.productionTip = false

// 引入路由
import router from './router'
import store from './store/index.js'

// 创建根组件实例
new Vue({
  router,
  store,
  // 渲染
  render: h => h(App),
}).$mount('#app')
// $mount('#app')： 手动挂载,