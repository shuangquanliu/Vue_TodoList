
//引入Vue
import Vue from 'vue'
//引入App组件
 import App from './App.vue'

 //引入路由器
 import router from './router'
//实例化Vue
new Vue({
  el:'#app',//----index.html中
  //注册组件
  components: {
    App,
  },
  template:'<App/>',
  //注册路由器
  router
})
