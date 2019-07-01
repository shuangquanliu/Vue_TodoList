<template>
  <div>
    <p>次数{{count}}奇数或者偶数：{{evenOrOdd}}</p>
    <button @click="increment">加的操作+</button>
    <button @click="decrement">减的操作-</button>
    <button @click="incrementOfOdd">奇数加的操作+</button>
    <button @click="incrementAsync">异步的操作+</button>
  </div>
</template>
<script>
export default {
  computed:{
    evenOrOdd(){
     return this.count % 2 === 0 ? '偶数':'奇数'
    }
  },
  data(){
    return {
      count:0
    }
  },
  methods:{
    increment(){
      this.count++
    },
    decrement(){
       this.count--
    },
    incrementOfOdd(){
      if(this.count % 2 !==0){
         this.count++
      }
    },
    incrementAsync() {
      setTimeout(() => {
        this.count++;
      }, 1000);
    }
  }
};
</script>
<style scoped>
</style>
