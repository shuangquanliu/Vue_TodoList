<template>
<div>
    <h2>Home</h2>
    <ul class="nav nav-tabs">
     <li>
       <router-link to="/home/news">News</router-link>
     </li>
     <li>
       <router-link to="/home/message">Mseeages</router-link>
     </li>
    </ul>
    <router-view></router-view>
</div>
</template>
<script>
export default {
  data(){
    return {
    }
  }
}
</script>
<style scoped>
</style>
