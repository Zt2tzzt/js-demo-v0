/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-17 21:58:26
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-17 22:03:45
 * @LastEditContent:
 */
const obj = {
  _name: 'zzt',
  get name() {
    return this._name
  },
  set name(newValue) {
    this._name = newValue
  }
}

const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    // receiver是创建出来的代理对象
    console.log('get方法被访问--------', key, receiver)
    console.log(receiver === objProxy)
    return Reflect.get(target, key, receiver)
  },
  set(target, key, newValue, receiver) {
    console.log('set方法被访问--------', key)
    Reflect.set(target, key, newValue, receiver)
  }
})

console.log(objProxy.name)
objProxy.name = 'Lingard'