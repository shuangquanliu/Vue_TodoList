<template>
 <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader @add="add"/>
      <TodoList :todos="todos"  :deleteTodo="deleteTodo"/>
      <!-- <TodoFooter :todos="todos" :checKAll="checKAll"/> -->
      <TodoFooter>
        <label slot="left">
          <input type="checkbox" v-model="isChecked"/>
        </label>
        <span slot="center">
          <span>已完成{{count}}</span> / 全部{{todos.length}}
        </span>
        <button slot="right" class="btn btn-danger" v-show="count>0" @click="learComplet">清除已完成任务</button>
      </TodoFooter>
    </div>
  </div>
</template>
<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import Storage from './utils/storage'
//引入消息订阅
import PubSub from 'pubsub-js'
export default {
    //属性计算
  computed:{
    isChecked:{
      get(){
        return this.todos.length === this.count && this.count>0
      },
      set(val){
        this.checKAll(val)
      }
    },
    count(){
      return this.todos.reduce((pre,todo)=> pre+(todo.isShow?1:0),0)
    },

  },
   //页面加载完毕后通过pubsub实现所有组件间的通信
   mounted(){
    /*  //通过pubsub的消息订阅和发布,实现deleteTodo的操作
    (this.token = PubSub.subscribe("deleteTodo", index => {
      //调用deletoTodo的方法,传入索引
      this.deleteTodo(index);
    })) */

    //通过事件总线的$on方法绑定了toggleTodo的事件
    this.$bus.$on('toggle',todo =>{
      this.togleCheck(todo)
    })
   },
  //添加数据
  methods:{
    learComplet(){
      // this.todos.map((todo,index)=>{
      //  /*  const newArr
      //   if(todo.isShow){
      //       newArr = this.todos.splice(index,1)

      //   } */
      //  return this.todos.filter()
      //   // return this.todos.splice(index,1)
      // })
      this.todos = this.todos.filter(todo=>{ return todo.isShow===false})
    },
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
    deleteTodo(index){
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
