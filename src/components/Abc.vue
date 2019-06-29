<template>
<div>
  <button @click="add">
  asd
</button>
<Baa/>
</div>
</template>
<script>
import EventBus from '../utils/bus.js'
import Baa from './Baa.vue'
export default {
  components:{
    Baa
  },
  methods:{
    add(){
      EventBus.$emit('asd','自定义')
    }
  },
  data(){
    return {
    }
  }
}
</script>
<style scoped>
</style>
