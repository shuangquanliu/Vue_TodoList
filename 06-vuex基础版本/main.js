import Vue from 'vue'
import App from './App.vue'

//引入store
import store from './vux/store.js'

new Vue({
  el:'#app',
  components:{
    App
  },
  template:'<App/>',
  store
})
