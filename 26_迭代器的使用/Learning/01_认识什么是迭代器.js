/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-26 19:33:32
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-26 19:37:10
 * @LastEditContent:
 */
// 编写一个迭代器
const iterator = {
  next: function () {
    return { done: true, value: 123 }
  }
}

// 数组
const names = ['abc', 'cba', 'nba']

// 创建一个迭代器对象来访问数组
let index = 0
const namesIterator = {
  next() {
    if (index < names.length) {
      return { done: false, value: names[index++] }
    } else {
      return { done: true, value: undefined }
    }
  }
}

console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
