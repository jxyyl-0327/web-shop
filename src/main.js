// 安装vue
import Vue from 'vue'
// 引入根组件
import App from './App.vue'

// 引入路由
import router from './router'

// 关闭项目启动时的生产提示
Vue.config.productionTip = false

// 创建根组件实例
new Vue({
  router,
  // 渲染
  render: h => h(App),
}).$mount('#app')
// $mount('#app')： 手动挂载,