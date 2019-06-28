<template>
  <li
    :style="{background:bgColor,color:fonstColor}"
    @mouseenter="handleenter(true)"
    @mouseleave="handleenter(false)"
  >
    <label>
      <input type="checkbox"  v-model="isComplet"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isDisplay" @click="detle">删除</button>
  </li>
</template>
<script>
export default {
  computed:{
    isComplet:{
      get(){
        return this.todo.isShow
      },
      set(val){
        this.togleCheck(this.todo)
      }
    }
  },
  methods:{
    //删除
    detle(){
      if(confirm('你确定要删除此信息吗')){
        this.deletTodo(this.todo.index)
      }

    },
    //判断鼠标进入离开
    handleenter(isEnter){
      if(isEnter){
        this.bgColor='red'
        this.fonstColor='white'
        this.isDisplay=true
      } else {
        this.bgColor='white'
        this.fonstColor='black'
        this.isDisplay=false
      }
    }
  },
  data () {
    return {
      isDisplay:false,
      bgColor:'white',
      fonstColor:'black'
    }
  },
  //通信接收并使用
  props:{
    todo:Object,
    deletTodo:Function,
    togleCheck:Function
  }
}
</script>
<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
