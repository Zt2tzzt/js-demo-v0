/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-26 20:34:49
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-26 20:50:02
 * @LastEditContent:
 */
// 1. for of 对象

// 2. 展开语法(spread syntax)
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

const names = ['abc', 'cba', 'nba']
const newNames = [...names, ...iterableObj]
console.log(newNames)

const obj = { name: 'zzt', age: 18 }
/* for (const item of obj) {
  
} */
// ES9（ES2018）中新特性，对象的展开语法，用的不是迭代器
const newObj = { ...obj }
console.log(newObj)

// 3.解构语法
const [name1, name2] = naems
// ES9（ES2018）中新特性，对象的展开语法，用的不是迭代器
const { name, age } = obj

// 4.创建一些其它对象时
const set1 = new Set(iterableObj)
const set2 = new Set(names)
const arr1 = Array.from(iterableObj)

// 5.Promise.all
Promise.all(iterableObj).then(res => {
  console.log(res)
})
