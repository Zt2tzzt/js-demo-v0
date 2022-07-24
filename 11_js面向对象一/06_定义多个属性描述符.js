/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 15:38:38
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 15:48:38
 * @LastEditContent: 
 */
var obj = {
  // 私有属性(js里面是没有严格意义的私有属性的)
  _age: 18,
  _eating() {},
  /* set age(value) {
    this._age = value
  },
  get age() {
    return this._age
  } */
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

obj.age = 19
console.log(obj.age)
console.log(obj)