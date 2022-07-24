/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-14 10:42:02
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-14 10:44:02
 * @LastEditContent:
 */
// for...in 标准化，用于遍历对象的key ：ECMA
const obj = {
  name: 'zzt',
  age: 19
}

for (const key in obj) {
  console.log(key)
}