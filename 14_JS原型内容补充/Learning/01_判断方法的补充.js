/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-27 13:43:26
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-27 13:54:24
 * @LastEditContent: 
 */
var obj = {
  name: 'zzt',
  age: 18
}

var info = Object.create(obj, {
  address: {
    value: '北京市',
    enumerable: true
  }
})

// hasOwnProperty方法判断
console.log(info.hasOwnProperty('address'))
console.log(info.hasOwnProperty('name'))

// in 操作符: 不管在当前对象还是原型中返回的都是true
console.log('address' in info)
console.log('name' in info)