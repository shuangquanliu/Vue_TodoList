import Vue from 'vue'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import MessageDetail from '../pages/MessageDetail.vue'

export default[
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
            props:(route)=>({id:route.params.id})
          }
        ]
      },
      {
        path:'/home',
        redirect:'/home/news'
      },
    ]
  },
  {
    path:'/',
    redirect:'/about'
  }
]
