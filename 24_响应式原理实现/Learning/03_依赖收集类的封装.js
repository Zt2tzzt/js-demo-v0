/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-17 22:50:07
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-17 22:55:19
 * @LastEditContent:
 */
class Depend {
  constructor() {
    this.reactiveFns = []
  }

  addDepend(reactivedFn) {
    this.reactiveFns.push(reactivedFn)
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

// 封装一个响应式函数
const depend = new Depend()
function watchFn(fn) {
  depend.addDepend(fn)
}

// 对象的响应式
const obj = {
  name: 'zzt', // depend 对象
  age: 18 // depend 对象
}

watchFn(function () {
  const newName = obj.name
  console.log("你好啊, 李银河")
  console.log("Hello World")
  console.log(obj.name) // 100行
})

watchFn(function () {
  console.log(obj.name, 'demo function -------')
})

obj.name = 'Lingard'
depend.notify()