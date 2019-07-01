
import {REQUESTING,REQ_SUCCESS,REQ_ERROR} from './mutation-types.js'
//间接改变状态值
import axios from 'axios'
export default {
  async search({commit},SearchName){
    try {
      //触发发请求前=====
      commit(REQUESTING)
      const url = "https://api.github.com/search/users";
      const response =  await axios.get(url,{
        params:{
          q:SearchName
        }
      })

      const result = response.data.items
      // console.log(result)

      const reqUser = result.map(user=>({
        html_url:user.html_url,
        login:user.login,
        avatar_url:user.avatar_url
      }))
    //请求成功后=================
    commit(REQ_SUCCESS,reqUser)

  } catch (error) {
    //失败后
    commit(REQ_ERROR,error.message)
  }
  }
}
