import Vue from 'vue'
import App from './App.vue'
import store from './strore'

//事件总线
Vue.prototype.$bus = new Vue()
new Vue({
  el:'#app',
  components:{
    App
  },
  template:'<app/>',
  store
})
