//引入Vue
import Vue from 'vue'
import VueRouter from 'vue-router'

//引入
import routes from './routes.js'

Vue.use(VueRouter)
export default new VueRouter({
  mode:'history',
  //进行配置
  routes
})
