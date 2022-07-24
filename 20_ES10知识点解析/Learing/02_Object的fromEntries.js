/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-14 09:45:50
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-14 09:56:09
 * @LastEditContent:
 */
const obj = {
  name: 'zzt',
  age: 19,
  height: 1.88
}

const theEntries = Object.entries(obj)
console.log(theEntries)

const newObj = {}
for (const entry of theEntries) {
  newObj[entry[0]] = entry[1]
}

// 1.ES10中新增了Object.fromEntries 的应用场景
const newObj2 = Object.fromEntries(theEntries)
console.log(newObj2)

// 2.Object.fromEntries 的应用场景
const queryString = 'name=zzt&age=18&height=1.88'
const queryParams = new URLSearchParams(queryString)
for (const param of queryParams) {
  console.log(param)
}
const paramObj = Object.fromEntries(queryParams)
console.log(paramObj)