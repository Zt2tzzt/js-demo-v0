/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-17 20:39:26
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-17 21:35:33
 * @LastEditContent:
 */
const obj = {
  name: 'zzt',
  age: 18
}

const objProxy = new Proxy(obj, {
  // 获取值时的捕获器
  get(target, key) {
    console.log(`监听到对象的${key}属性被访问了`, target)
    return target[key]
  },
  // 设置值时的捕获器
  set(target, key, newValue) {
    console.log(`监听到对象${key}属性被设置值`, target)
    target[key] = newValue
  }
})

console.log(objProxy.name)
console.log(objProxy.age)

objProxy.name = 'lingard'
objProxy.age = 30


console.log(objProxy.name)
console.log(objProxy.age)