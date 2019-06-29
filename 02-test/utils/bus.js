var listenerContainer = {}
export default {

  $on(eventName,callback){
    //1.获取所对应的的数组看看有没有 没有了再添加 有了就不添加了
    const callbacks = listenerContainer[eventName]
    if(!callbacks){
      //没有就给你一个数组 不给你看的 要你给到上面定义的对象中
      let callbacks = []
      //要你给到上面定义的对象中
      listenerContainer[eventName] = callbacks
      callbacks.push(callback)
      console.log(callbacks)
    }
    //将传进来的回调函数放入相对应的函数的数组中
    // callbacks.push(callback)
    // console.log(listenerContainer,callbacks)
  },
  $emit(eventName,data){
     //1.获取所对应的的数组看看有没有 没有了再添加 有了就不添加了
     const callbacks = listenerContainer[eventName]
     //判断是否存在数组容器里面存的收水调函数
     if(callbacks){
      callbacks.forEach(callback => {
        callback(data)
      });
     }
  },
  //解绑
  $off(eventName){
   if(eventName === undefined){
    listenerContainer = {}
   } else {
    listenerContainer[eventName] = []
   }
  }
}
