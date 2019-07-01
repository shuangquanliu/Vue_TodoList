<template>
  <div>
    <p>次数{{$store.state.count}}奇数或者偶数：{{$store.getters.evenOrOdd}}</p>
    <button @click="increment">加的操作+</button>
    <button @click="decrement">减的操作-</button>
    <button @click="incrementIfOdd">奇数加的操作+</button>
    <button @click="incrementAsync">异步的操作+</button>
  </div>
</template>
<script>
export default {
/*   computed:{
    evenOrOdd(){
     return this.count % 2 === 0 ? '偶数':'奇数'
    }
  }, */
/*   data(){
    return {
      count:0
    }
  }, */
  methods:{
    //最终的目的:就是改变data中的某个属性的值
    //都是往mutations中提交了
    //加的操作
    increment(){
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
    }
  }
};
</script>
<style scoped>
</style>
