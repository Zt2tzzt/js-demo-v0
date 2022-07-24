/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-11 14:33:03
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-11 21:44:25
 * @LastEditContent: 
 */
// 使用 ES5 写一个对象属性捕获器案例
const obj = {
  name: 'zzt',
  age: 18
}
Object.keys(obj).forEach(key => {
  let value = obj[key]
  Object.defineProperty(obj, key, {
    get() {
      console.log(`监听到obj对象${key}属性被访问了`)
      return value
    },
    set(newValue) {
      console.log(`监听到obj对象${key}属性被设置成了${newValue}`)
      value = newValue
    }
  })
})
/* obj.name
obj.age = 20 */
// 使用 Promxy 写一个代理对象捕获器案例，包括4个常用对象捕获器和4个函数对象捕获器
const obj2 = {
  name: 'zzt',
  age: 18
}
const obj2Proxy = new Proxy(obj2, {
  get(target, property, reciver) {
    return target[property]
  },
  set(target, property, value, reciver,) {
    target[property] = value
  },
  has(target, property) {
    return property in target
  },
  deleteProperty(target, property) {
    delete target[property]
  }
})
function foo() { }
const fooProxy = new Proxy(foo, {
  apply(target, thisArg, argArray) {
    return target.apply(thisArg, argArray) // -----
  },
  construct(target, argArray, newTarget) {
    return new target(...argArray) // ---------
  }
})

// 用代码解释 Proxy 参数和 Reflect 方法中 reciver 参数的作用
const obj3 = {
  _name: 'zzt',
  get name() {
    return this._name
  },
  set name(value) {
    this._name = value
  }
}
const obj3Proxy = new Proxy(obj3, {
  get(target, property, reciver) {
    console.log(`监听到obj3对象的${property}属性被访问了`)
    return Reflect.get(target, property, reciver)
  },
  set(target, property, value, reciver) {
    console.log(`监听到obj3对象的${property}属性被设值成了${value}`)
    Reflect.set(target, property, value, reciver)
  },
  has(target, property) {
    return Reflect.has(target, property)
  },
  deleteProperty(target, property) {
    Reflect.deleteProperty(target, property)
  }
})
obj3Proxy.name
obj3Proxy.name = 'Lingard'

const foo2 = new Proxy(foo2, {
  apply(target, thisArg, argArray) {
    return Reflect.apply(target, thisArg, argArray) //-----
  },
  construct(target, argArray, newTarget) {
    return Reflect.construct(target, argArray, newTarget) //-------
  }
})

// Proxy 捕获器和 Reflect 对象提供的13种方法
Reflect.getPrototypeOf()
Reflect.setPrototypeOf()
Reflect.isExtensible()
Reflect.preventExtensions()
Reflect.getOwnPropertyDescriptor()
Reflect.defineProperty()
Reflect.ownKeys()

