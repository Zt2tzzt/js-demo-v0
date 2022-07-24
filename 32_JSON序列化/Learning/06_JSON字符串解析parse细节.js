/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-11-11 10:26:47
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-11-11 10:28:42
 * @LastEditContent:
 */
const jsonString = '{"name":"zzt","age":18,"friends":{"name":"Lingard"},"hobbies":["篮球","足球"]}'
const info = JSON.parse(jsonString, (key, value) => {
  if (key === 'age') {
    return value - 1
  }
  return value
})
console.log(info)