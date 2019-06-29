import Vue from 'vue'
import App from './App.vue'
import router from './router'

//事件总线
Vue.prototype.$bus = new Vue()
new Vue({
  el:'#app',
  components:{
    App
  },
  template:'<app/>',
  router // 配置路由器
})
