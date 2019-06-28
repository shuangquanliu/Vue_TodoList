export default{
  saveTodos(val){
    //保存数据的
    localStorage.setItem('todos_key',JSON.stringify(val))
  },
  getTodos(){
    //读取数据的
    return JSON.parse(localStorage.getItem('todos_key')||'[]')
  }
}
