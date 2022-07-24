/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-20 08:57:38
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-20 09:09:32
 * @LastEditContent:
 */
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

function reactive(obj) {
  // ES6之前，使用object.defineProperty
  Object.keys(obj).forEach(key => {
    let value = obj[key]
    Object.defineProperty(obj, key, {
      get() {
        const depend = getDepend(obj.key)
        depend.depend()
        return value
      },
      set(newValue) {
        value = newValue
        const depend = getDepend(obj, key)
        depend.notify()
      }
    })
  })
  return obj
}

// 监听对象的属性变量：Proxy(vue3) / Object.defineProperty(vue2)
const objProxy = reactive({
  name: 'zzt',
  age: 18
})
const infoProxy = reactive({
  address: '广州市',
  height: 1.88
})

watchFn(() => {
  console.log(infoProxy, address)
})

infoProxy.address = '北京市'

const foo = reactive({
  name: 'foo'
})

watchFn(() => {
  console.log(foo.namea)
})

foo.name = 'bar'