<template>
  <div>
    <p>次数{{count}}奇数或者偶数：{{evenOrOdd}}</p>
    <button @click="increment">加的操作+</button>
    <button @click="decrement">减的操作-</button>
    <button @click="incrementIfOdd">奇数加的操作+</button>
    <button @click="incrementAsync">异步的操作+</button>
  </div>
</template>
<script>
import {mapActions,mapGetters,mapState,mapMutations} from 'vuex'
export default {
  computed:{
   /*  count(){
      return this.$store.state.count
    },
    evenOrOdd(){
      return this.$store.getters.evenOrOdd
    } */

    //拆包的方式获取并且调用store中的方法
    ...mapState(['count']),
    ...mapGetters(['evenOrOdd'])
  },
  methods:{
    //最终的目的:就是改变data中的某个属性的值
    //都是往mutations中提交了
    //加的操作
  /*   increment(){
      this.$store.dispatch('increment')
    },
    decrement(){
       this.$store.dispatch('decrement')
    },
    incrementIfOdd(){
      // this.$store.commit('INCREMENT')
       this.$store.dispatch('incrementIfOdd')
    },
    incrementAsync() {
      // this.$store.commit('DECREMENT')
       this.$store.dispatch('incrementAsync')
    } */
    ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])
  }
};
</script>
<style scoped>
</style>
