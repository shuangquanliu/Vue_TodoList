<template>
  <h2 v-if="firstView">请输入搜索内容</h2>
  <h2 v-else-if="loading">laoding</h2>
  <h2 v-else-if="errorMsg"></h2>
  <div class="row" v-else>
    <div class="card" v-for="per in users" :key="per.login">
      <a :href="per.html_url" target="_blank">
        <img :src="per.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{per.login}}</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      firstView:true,
      loading:false,
      errorMsg:'',
      users:[]
    };
  },
  mounted(){
    this.$bus.$on('search',async SearchName =>{
      try {
          this.firstView=false
          this.loading = true
          const url = "https://api.github.com/search/users";
          const response =  await axios.get(url,{
            params:{
              q:SearchName
            }
          })

          const result = response.data.items
          // console.log(result)

          const reqUser = result.map(user=>({
            html_url:user.html_url,
            login:user.login,
            avatar_url:user.avatar_url
          }))
        this.loading = false
          this.users =reqUser

      } catch (error) {
        this.loading = false
        this.errorMsg = error.message
      }
    })
  }
};
</script>
<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
