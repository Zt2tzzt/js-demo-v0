/*
 * @Description: file contentb
 * @Author: Zt2tzzt
 * @Date: 2021-09-30 16:29:28
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-01 17:47:01
 * @LastEditContent: 
 */
var obj = {
  name: 'zzt',
  age: 18,
  height: 1.88,
  address: '北京市'
}

// 对象的解构: {}
var { name, age, height } = obj
// console.log(name, age, height)

var { age } = obj
// console.log(age)

var { name: newName } = obj
// console.log(newName)

var { address: newAddress = '广州市' } = obj
console.log(obj)
console.log(newAddress)

function foo(info) {
  console.log(info.name, info.age)
}

// foo(obj)

function bar({ name, age }) {
  console.log(name, age)
}

// bar(obj)