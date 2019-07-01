<template>
<ul>
  <li>id:{{id}}</li>
  <li>title:{{detail.title}}</li>
  <li>conten:{{detail.content}}</li>
</ul>
</template>

<script>
const messageDetail =[
  {id:1,title:"详情1",content:'我爱你，中国'},
  {id:2,title:"详情2",content:'我爱你，北京'},
  {id:3,title:"详情3",content:'我爱你，唐山'},
  {id:4,title:"详情3",content:'我爱你，迁安'},
  {id:5,title:"详情3",content:'我爱你，家乡'},
]
export default {
  props:{
    id:String
  },
  data(){
    return {
      detail:{}
    }
  },
  mounted(){
 this.shouDetail(this.$route)
  },
  watch:{
     $route(val){
       this.shouDetail(val)
     }
  },
  methods:{
    shouDetail(val){
      const id = val.params.id*1

      this.detail = messageDetail.find(detail => detail.id===id)
    }
  }
}
</script>
<style scoped>
</style>
