//配置需要跳转的路由及组件
import Vue from 'vue'
//映入路由的插件
import VueRouter from 'vue-router'

import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import MessageDetail from '../pages/MessageDetail.vue'
//声明使用路由插件放在import后面
Vue.use(VueRouter)

//暴露路由配置给全局main。js

export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'/home/news',
          component:News
        },
        {
          path:'/home/message',
          component:Message,
          children:[
            {
              path:'/home/message/detail/:id',
              component:MessageDetail,
              props: (route) => ({ id: route.params.id })
            }

          ]
        },
        {
          path: '/home',
          redirect:'/home/news'
        }
      ]
    },
    {
      path: '/',
      redirect:'/about'
    }
  ]
})
