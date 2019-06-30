<template>
<div>
  <ul>
    <li v-for="m in message" :key="m.id">
      <router-link :to="`/home/message/detail/${m.id}`">{{m.title}}</router-link>
      <button @click="isPush(m.id)">push</button>
      <button @click="isreplace(m.id)">replace</button>
    </li>
    <button @click="$router.back()">卫栖梧</button>
  </ul>
  <router-view></router-view>
</div>
</template>
<script>
export default {

  data(){
    return {
      message:[
      ]
    }
  },
  mounted () {
    setTimeout(() => {
       this.message=[
         {id:1,title:'message001'},
         {id:3,title:'message003'},
         {id:5,title:'message005'}
       ]
    }, 1000);
  },
  methods:{
    isPush(id){

      this.$router.push(`/home/message/detail/${id}`)
    },
    isreplace(id){
      this.$router.replace(`/home/message/detail/${id}`)
    }
  }
}
</script>
<style scoped>
</style>
