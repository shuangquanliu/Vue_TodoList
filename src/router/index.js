
//引入Vue
import Vue from 'vue'
//引入路由的插件
import VueRouter from 'vue-router'

//引入
import routes from './routes.js'
//声明使用插件
Vue.use(VueRouter)
export default new VueRouter({
  mode:'history',
  //进行配置
  routes

})
