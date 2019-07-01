import Vue from 'vue'
//下载安装vuex插件
import Vuex from 'vuex'
//声明使用插件
Vue.use(Vuex)


//配置下面四个对象
const state = {
  count:0
}
//包含多个直接修改状态的数据的方法
const mutations = {
  INCREMENT(state){//为后面mutation的type左铺垫

    state.count++
  },
  DECREMENT(){
    state.count--
  }
  //mutation中的每个函数（方法）都是一个mutation，儿每一个mutation都有一个type属性属性名为type的值
}
//通过mutations中的的函数简介的改变状态数据
const actions = {
  increment(context){

    context.commit('INCREMENT')

  },
  decrement({commit}){
     commit('DECREMENT')
  },
  incrementIfOdd({commit,state}){
    if(state.count%2!==0){
      commit('INCREMENT')
    }
  },
  incrementAsync(context) {
    setTimeout(() => {
      context.commit('INCREMENT')
    }, 1000);
  }
}

const getters = {
  evenOrOdd(state){
    return state.count%2===0?'偶数':'奇数'
  }
}
export default new Vuex.Store({
  state,//放状态数据（data中的相关属性）
  mutations,//首先是一个对象，这个对象中包含多个方法（用来直接修改状态的数据）
  actions,//首先是一个对象，这个对象中包含多个方法（用来简介通过mutation来改变状态的数据）
  getters//首先是一个对象，这个对象中包含多个方法（用来获取状态数据的retter方法的）

})
