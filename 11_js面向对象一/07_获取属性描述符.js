/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 15:50:12
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 15:55:09
 * @LastEditContent: 
 */
var obj = {
  // 私有属性(js里没有严格意义的私有属性)
  _age: 18,
  _eating: function() {}
}

Object.defineProperties(obj, {
  name: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 'zzt'
  },
  age: {
    configurable: true,
    enumerable: true,
    get() {
      return this._age
    },
    set(value) {
      this._age = value
    }
  }
})

// 获取某一特性属性的属性值描述符
console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
console.log(Object.getOwnPropertyDescriptor(obj, 'age'))

// 获取对象的所有属性描述符
console.log(Object.getOwnPropertyDescriptors(obj))