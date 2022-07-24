/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-11-11 09:56:56
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-11-11 10:01:37
 * @LastEditContent: 
 */
const obj = {
  name: 'zzt',
  age: 18,
  friends: {
    name: 'Lingard'
  },
  hobbies: ['足球', '舞蹈']
}

// 将 obj 转成 JSON 格式的字符串
const objString = JSON.stringify(obj)

// 将对象数据存储在 localStorage
localStorage.setItem('obj', objString)

const jsonString = localStorage.getItem('obj')
// 将 JSON 格式的字符串转回对象
const info = JSON.parse(jsonString)
console.log(info)