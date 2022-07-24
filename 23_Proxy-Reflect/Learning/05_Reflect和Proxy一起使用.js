/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-17 21:54:03
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-17 21:57:31
 * @LastEditContent:
 */
const obj = {
  name: 'zzt',
  age: 18
}

const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    console.log('get-------')
    return Reflect.get(target, key)
  },
  set(target, key, newValue, receiver) {
    console.log('set-------')
    // target[key] = newValue
    const result = Reflect.set(target, key, newValue)
  }
})

objProxy.name = 'Lingard'
console.log(objProxy.name)