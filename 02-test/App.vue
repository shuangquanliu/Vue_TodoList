<template>
<h2 v-if="!reqURL">
  loading........
  <Abc/>
</h2>

<div v-else> Most start is<a :href="reqURL">{{reqName}}</a></div>


</template>
<script>
import EventBus from './utils/bus.js'
import Abc from './components/Abc.vue'
import axios from 'axios'
export default {
  components:{
    Abc
  },
  data(){
    return {
      reqURL:'',
      reqName:''
    }
  },
  // created(){
  //   EventBus.$on('aad',(data)=>{
  //     alert(data)
  //   })



  // },
   async mounted(){
    const url = `https://api.github.com/search/repositories?q=v&sort=stars`;
   /*  try {
      const response = await this.$http.get(url)
      const result = response.data
      this.reqURL = result.items[0].html_url
      this.reqName = result.items[0].name
    } catch (error) {
      alert(error.message)
    } */

    try {
      const response = await axios.get(url)
      const result = response.data
      const { name , html_url } = result.items[0]
      this.reqURL =  html_url
      this.reqName = name
    } catch (error) {

    }
     EventBus.$on('asd',(data)=>{
      console.log(data)
    })

     EventBus.$on('baa',(data)=>{
      console.log(data)
    })


    // setInterval(()=>{
    //    EventBus.$emit('asd','自定义')
    // },5000)

  }
}
</script>
<style scoped>
</style>
