import Vue from 'vue'
import App from './App.vue'

//添加一个事件总线
Vue.prototype.$bus = new Vue()


new Vue({
  el:'#app',
  mounted(){
    console.log(this)
  },
  components:{
    App
  },
  template:'<App/>'

})
