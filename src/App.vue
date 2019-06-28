<template>
<h2 v-if="!reqURL">Loading</h2>
<div v-else>Most start is <a :href="reqURL">{{reqName}}</a></div>
</template>
<script>

export default {
  data(){
    return {
      reqURL:'',
      reqName:''
    }
  },
  async mounted(){
    const url = `https://api.github.com/search/repositories?q=v&sort=stars`;
    try {
      const response = await this.$http.get(url)
      const result = response.data
      this.reqURL = result.items[0].html_url
      this.reqName = result.items[0].name
    } catch (error) {
      alert(error.message)
    }

  }
}
</script>
<style scoped>
</style>
