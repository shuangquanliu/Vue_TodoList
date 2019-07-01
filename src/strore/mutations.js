import {REQUESTING,REQ_SUCCESS,REQ_ERROR} from './mutation-types.js'
export default {
  //三种状态直接改变state值
  [REQUESTING](state){
    state.firstView=false
    state.loading= true
  },
  [REQ_SUCCESS](state,users){
    state.loading= false
    state.users = users
  },
  [REQ_ERROR](state,errorMsg){
    state.loading= false
    state.error = errorMsg
  }
}
