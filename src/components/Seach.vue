<template>
 <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="SearchName"/>
        <button @click="keyword">Search</button>
      </div>
    </section>
</template>
<script>
export default {
  data(){
    return {
      SearchName:''
    }
  },
  methods:{
    keyword(){
      const SearchName = this.SearchName.trim()
      // this.$bus.$emit('search',SearchName)
      this.$store.dispatch('search',SearchName)
    }
  }
}
</script>
<style scoped>
</style>
