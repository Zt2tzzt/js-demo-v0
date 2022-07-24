/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-14 09:04:20
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-14 09:07:22
 * @LastEditContent:
 */
const obj = {
  name: 'zzt',
  age: 18
}

console.log(Object.entries(obj))
const objEntries = Object.entries(obj)
objEntries.forEach(ele => {
  console.log(ele[0], ele[1])
})

console.log(Object.entries(['abc', 'cba', 'nba']))
console.log(Object.entries('abc'))