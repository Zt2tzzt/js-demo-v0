/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-26 19:57:37
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-26 20:18:09
 * @LastEditContent:
 */
// 创建一个迭代器对象，来访问数组
const iterableObj = {
  names: ['abc', 'cba', 'nba'],
  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        if (index < this.names.length) {
          return { done: false, value: this.names[index++] }
        } else {
          return { done: true, value: undefined }
        }
      }
    }
  }
}

// iterableObj 对象就是一个可迭代对象
console.log(iterableObj[Symbol.iterator])

// 1. 第一次调用 iterableObj[Symbol.iterator] 函数
const iterator = iterableObj[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log('---------------------')

// 2. 第二次调用 iterableObj[Symbol.iterator] 函数
const iterator1 = iterableObj[Symbol.iterator]()
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())
console.log('---------------------')

// 3. for...of可以遍历的东西， 必须是一个可迭代对象
/* const obj = {
  name: 'zzt',
  age: 18
} */

for (const item of iterableObj) {
  console.log(item)
}