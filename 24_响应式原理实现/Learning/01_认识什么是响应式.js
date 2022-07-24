/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-17 22:41:14
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-17 22:41:14
 * @LastEditContent:
 */
let m = 100

console.log(m)
console.log(m * 2)
console.log(m ** 2)
console.log('Hello World')

m = 200

// 对象的响应式
const obj = {
  name: 'zzt',
  age: 18
}

const newName = obj.name
console.log('你好啊, 李银河')
console.log('Hello World')
console.log(obj.name)

obj.name = 'Lingard'