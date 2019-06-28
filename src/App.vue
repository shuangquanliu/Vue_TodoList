<template>
 <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :add="add"/>
      <TodoList :todos="todos" :deletTodo="deletTodo" :togleCheck="togleCheck"/>
      <TodoFooter :todos="todos" :checKAll="checKAll"/>
    </div>
  </div>
</template>
<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import Storage from './utils/storage'
export default {
  //添加数据
  methods:{
    checKAll(val){
      this.todos.forEach((todo,index)=>{
        todo.isShow = val
      })
    },
    //togger
    togleCheck(todo){
      todo.isShow = !todo.isShow
    },
    //删除数据
    deletTodo(index){
      this.todos.splice(index,1)
    },
    //添加todo
    add(todo){
      this.todos.unshift(todo)
    }
  },
  //监视
  watch:{
    todos:{
      deep:true,
      handler:Storage.saveTodos
    }
  },
  //初始数据
  data () {
    return {
      // todos:[
      //   {id:1,title:'奔驰',isShow:false},
      //   {id:2,title:'宝马',isShow:true},
      //   {id:3,title:'吉利',isShow:false}
      // ]
      todos:Storage.getTodos()

      }

  },
  //注册组件
  components:{
    TodoHeader,
    TodoFooter,
    TodoList
  }
}
</script>
<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
