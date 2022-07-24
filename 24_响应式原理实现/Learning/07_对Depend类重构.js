/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-19 23:24:25
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-19 23:28:26
 * @LastEditContent:
 */
// 保存当前需要收集的响应式函数
let activeReactiveFn = null

class Depend {
  constructor() {
    this.reactiveFns = new Set()
  }
  /* addDepend(reactiveFn) {
    this.reactiveFns.add(reactiveFn)
  } */
  depend() {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn)
    }
  }
  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

// 封装一个响应式函数
function watchFn(fn) {
  activeReactiveFn = fn
  fn()
  activeReactiveFn = null
}

// 封装一个获取depend函数
const targetMap = new WeakMap()
function getDepend(target, key) {
  // 根据target对象获取map的过程
  let map = targetMap.get(target)
  if (!map) {
    map = new Map()
    targetMap.set(target, map)
  }
  // 根据key获取depend对象
  let depend = map.get(key)
  if (!depend) {
    depend = new Depend()
    map.set(key, depend)
  }
  return depend
}

// 对象的响应式
const obj = {
  name: 'zzt', //depend对象
  age: 18 // depend对象
}

// 监听对象的属性变量：Proxy(vue3/Object.defindProperty(vue2))
const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    // 根据target.key获取对应的depend
    const depend = getDepend(target, key)
    // 给depend对象中添加响应式函数
    depend.depend()
    return Reflect.get(target, key, receiver)
  },
  set(target, key, newValue, receiber) {
    Reflect.set(target, key, newValue, receiber)
    const depend = getDepend(target, key)
    depend.notify()
  }
})

watchFn(function () {
  console.log("-----第一个name函数开始------")
  console.log("你好啊, 李银河")
  console.log("Hello World")
  console.log(objProxy.name) // 100行
  console.log("-----第一个name函数结束------")
})

watchFn(function () {
  console.log(objProxy.name, "demo function -------")
})

watchFn(function () {
  console.log(objProxy.age, "age 发生变化是需要执行的----1")
})

console.log(objProxy.age)

watchFn(function () {
  console.log(objProxy.age, "age 发生变化是需要执行的----2")
})

watchFn(function () {
  console.log(objProxy.name, "新函数")
  console.log(objProxy.age, "新函数")
})

console.log("------------------------------改变obj的name值")

objProxy.age = 20
