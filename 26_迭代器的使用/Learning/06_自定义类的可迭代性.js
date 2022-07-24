/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-26 20:55:25
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-26 21:11:25
 * @LastEditContent:
 */
/* class Person {

}
const p1 = new Person()
const p1 = new Person()
const p1 = new Person() */

// 案例：创建一个教室类， 创建出来的对象都是可迭代对象
class Classroom {
  constructor(address, name, students) {
    this.address = address
    this.name = name
    this.students = students
  }
  entry(newStudent) {
    this.students.push(newStudent)
  }

  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        if (index < this.students.length) {
          return { done: false, value: this.students[index++] }
        } else {
          return { done: true, value: undefined }
        }
      },
      // 监听中断， 添加return方法
      return: () => {
        console.log('迭代器提前终止了！')
        return { done: true, value: undefined }
      }
    }
  }
}

const classroom = new Classroom('育才楼', '1206', ['Lingard', 'Ronaldo', 'Messi', 'zzt'])
classroom.entry('De bruyne')
for (const stu of classroom) {
  console.log(stu)
  if (stu === 'zzt') break
}

// 再构造函数原型上实现 @@iterator 方法，效果一样。
function Person() { }
Person.prototype[Symbol.iterator] = function () {

}