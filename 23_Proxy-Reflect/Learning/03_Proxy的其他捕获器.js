/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-17 21:36:54
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-17 21:44:52
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
  },
  // 监听in的捕获器
  has(target, key) {
    console.log(`监听到对象${key}属性in操作`, target)
  },
  // 监听delete的捕获器
  deleteProperty(target, key) {
    console.log(`监听到对象${key}属性delete操作`, target)
    delete target[key]
  }

})

// in操作符
console.log('name' in objProxy)

// delete 操作
delete objProxy.name