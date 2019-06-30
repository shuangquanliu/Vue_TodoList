<template>
  <ul>
    <li>id:{{id}}</li>
    <li>title:{{detial.title}}</li>
    <li>content:{{detial.content}}</li>
  </ul>
</template>
<script>
const messageDetial = [
  { id: 1, title: "message001", content: "我是meess001,我爱你，中国" },
  { id: 3, title: "message003", content: "我是meess002,我爱你，老婆" },
  { id: 5, title: "message005", content: "我是meess003,我爱你，唐山" }
];
export default {
  props: {
    id:String
  },
  data() {
    return {
      detial: {}
    };
  },
   //模拟异步请求定时器
  mounted(){
    this.showDetial(this.$route)
  },
  watch:{
    $route(val){
      this.showDetial(val)
    }
  },
  methods:{
    showDetial(val){
     //获取id
    const id = val.params.id*1
    //根据id查找并且更新状态
    this.detial = messageDetial.find(detial=>detial.id === id)
    //路由对象的生命周期，只要切换，就挂了
    }
  }
};
</script>
<style scoped>
</style>
