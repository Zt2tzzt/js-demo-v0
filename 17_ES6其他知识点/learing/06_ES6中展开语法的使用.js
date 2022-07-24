/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-09 10:18:11
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-09 10:23:54
 * @LastEditContent: 
 */
const names = ['abc', 'cba', 'nba']
const name = 'zzt'
const info = {name: 'zzt', age: 18}

// 1.函数调用时
function foo(x, y, z) {
  console.log(x, y, z)
}

// foo.apply(null, names)
foo(...names) // 展开数组
foo(...name) // 展开字符串

// 2.构造数组
const newNames = [...names, ...name]
console.log(newNames)

// 3.构造对象字面量时, ES2018(ES9)
const obj = {...info, address: '深圳市', ...names}
console.log(obj)