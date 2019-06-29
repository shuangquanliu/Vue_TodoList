<template>
  <div class="container">
    <Search/>
    <UserList/>
  </div>
</template>
<script>
import Search from "./components/Seach.vue";
import UserList from "./components/UserList.vue";
export default {
  //注册组件
  components: {
    Search,
    UserList
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>
