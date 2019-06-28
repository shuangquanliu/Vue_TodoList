import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
//声明使用插件
Vue.use(VueResource)

new Vue({
  el:'#app',
  components: {
    App
  },
  template:'<App/>'
})
