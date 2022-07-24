/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-17 22:55:37
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-17 23:02:52
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

// 监听对象的属性变量: Proxy(vue3) / Object.defineProperty(vue2)
const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver)
  },
  set(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    depend.notify()
  }
})

watchFn(function () {
  const newName = obj.name
  console.log("你好啊, 李银河")
  console.log("Hello World")
  console.log(obj.name) // 100行
})

watchFn(function () {
  console.log(obj.name, 'demo function -------')
})

watchFn(function () {
  console.log(objProxy.age, 'age 发生变化是需要执行的------1')
})
watchFn(function () {
  console.log(objProxy.age, 'age 发生变化是需要执行的------2')
})

objProxy.name = 'Lingard'
objProxy.name = 'Ronaldo'
objProxy.name = 'Debruyne'

