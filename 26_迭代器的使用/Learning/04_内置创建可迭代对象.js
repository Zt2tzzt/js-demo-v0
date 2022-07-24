/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-26 20:27:52
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-26 20:33:14
 * @LastEditContent:
 */
const names = ['abc', 'cba', 'nba']
console.log(names[Symbol.iterator])

for (const item of names) {
  console.log(item)
}

// Map / Set
const set = new Set()
set.add(10)
set.add(100)
set.add(1000)
console.log(set[Symbol.iterator])

for (const item of set) {
  console.log(item)
}

// 函数中 arguments 也是一个可迭代对象
function foo(x, y, z) {
  console.log(arguments[Symbol.iterator])
  for (const arg of arguments) {
    console.log(arg)
  }
}
foo(10, 20, 30)
