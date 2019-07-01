<template>
  <div>
    <ul>
      <li v-for="m in messages" :key="m.id">
        <router-link :to="`/home/message/detail/${m.id}`">{{m.title}}</router-link>
        <button @click="shouPush(m.id)">push跳转</button>
        <button @click="shouReplace(m.id)">replace跳转</button>
      </li>
    </ul>
    <button @click="$router.back()">返回</button>
    <br />
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messages: [
        { id: 1, title: "消息1" },
        { id: 2, title: "消息2" },
        { id: 3, title: "消息3" },
        { id: 4, title: "消息4" },
        { id: 5, title: "消息5" }
      ]
    };
  },
  methods: {
    shouPush(id) {
      this.$router.push(`/home/message/detail/${id}`);
    },
    shouReplace(id) {
      this.$router.push(`/home/message/detail/${id}`);
    }
  }
};
</script>
<style scoped>
</style>
