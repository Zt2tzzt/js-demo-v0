/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-28 11:33:32
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-28 13:25:00
 * @LastEditContent:
 */
// 1.生成器来替代迭代器
function* createArrayIterator(arr) {
  // 第一种写法： 
  /* yield 'abc'
  yield 'cba'
  yield 'nba' */

  // 第二种写法
  /* for (const item of arr) {
    yield item
  } */

  // 第三种写法
  yield* arr
}
const names = ['abc', 'cba', 'nba']
const namesIterator = createArrayIterator(names)
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())

// 2.创建一个函数，这个函数可以迭代一个范围内的数字
function* createRangeIterator(start, end) {
  let index = start
  // 第一种写法
  /* return {
    next() {
      if (index < end) {
        return {done: false, value: index++}
      } else {
        return {done: true, value: undefined}
      }
    }
  } */
  // 第二种写法
  while (index < end) {
    yield index++
  }
}
const rangeiterator = createRangeIterator(10, 20)
console.log(rangeiterator.next())
console.log(rangeiterator.next())
console.log(rangeiterator.next())
console.log(rangeiterator.next())
console.log(rangeiterator.next())

// 3. class 案例, 自定义类迭代，生成器实现
class Classroom {
  constructor(address, name, students) {
    this.address = address
    this.name = name
    this.students = students
  }
  entry(newStudent) {
    this.tudents.push(newStudent)
  }
  f00() {
    console.log('foo fumction')
  }
  *[Symbol.iterator]() {
    yield* this.students
  }
}
const classroom = new Classroom("3幢", '1206', ['abc', 'cba'])
for (const item of classroom) {
  console.log(item)
}

