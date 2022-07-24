/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-17 22:34:08
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-17 22:37:53
 * @LastEditContent:
 */
function Student(name, age) {
  this.name = name
  this.age = age
}

function Teacher() { }

/* const stu = new Student('zzt', 18)
console.log(stu)
console.log(stu.__proto__ === Student.prototype) */

// 执行Student函数中的内容, 但是创建出来的对象是Teacher对象
const teacher = Reflect.construct(Student, ['zzt', 18], Teacher)
console.log(teacher)
console.log(teacher.__proto__ === Teacher.prototype)