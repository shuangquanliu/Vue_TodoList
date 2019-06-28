<template>
  <div class="todo-footer">
    <slot name="left"></slot>
    <slot name="center"></slot>
    <slot name="right"></slot>
 <!--    <label slot="left">
      <input type="checkbox" v-model="isChecked"/>
    </label>
    <span solt="center">
      <span>已完成{{count}}</span> / 全部{{todos.length}}
    </span>
    <button solt="right" class="btn btn-danger" v-show="count>0">清除已完成任务</button> -->
  </div>
</template>
<script>
export default {

 /*  //属性计算
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
  props:{
    todos:Array,
    checKAll:Function
  } */
}
</script>
<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>
