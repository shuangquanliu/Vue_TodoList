<template>
<button @click="add">
  awer
</button>
</template>
<script>
import EventBus from '../utils/bus.js'
export default {
  methods:{
    add(){
      EventBus.$emit('baa','阿凡达')
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
