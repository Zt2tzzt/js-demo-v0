/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-11-11 10:38:43
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-11-11 10:45:16
 * @LastEditContent:
 */
const obj = {
  name: 'zzt',
  age: 18,
  friends: {
    name: 'Lingard'
  },
  hobbies: ['足球', '舞蹈'],
  foo() {
    console.log('foo function')
  }
}

// 将 obj 对象的内容放到 info 变量中
// 1. 引用赋值
const info = obj
obj.age = 100
console.log(info.age)

// 2.浅拷贝
const info2 = { ...obj }
obj.age = 1000
console.log(info2.age)

obj.friends.name = 'Ronaldo'
console.log(info2.friends.name)

// 3. stringify 和 parse 来实现
const jsonstring = JSON.stringify(obj)
console.log(jsonstring)
const info3 = JSON.parse(jsonstring)
obj.friends.name = 'De bruyne'
console.log(info3.friends.name)
console.log(info3)