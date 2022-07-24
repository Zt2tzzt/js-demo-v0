/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-28 16:49:14
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-29 15:25:40
 * @LastEditContent: 
 */
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  running() {
    console.log(this.name, 'running')
  }
  eating() {
    console.log(this.name, 'eating')
  }

  personMethod() {
    console.log('处理逻辑1')
    console.log('处理逻辑2')
    console.log('处理逻辑3')
  }
  static staticMethod() {
    console.log('PersonStaticMethod')
  }
}

// Student称之为子类（派生类）
class Student extends Person {
  // JS引擎在解析子类的时候就有要求，如果我们有实现继承，那么子类在构造方法中，在使用this之前，必须通过super()调用父类的构造函数
  constructor(name, age, sno) {
    super(name, age)
    this.sno = sno
  }

  get snoo() {
    return this.sno
  }

  set snoo(newSno) {
    this.sno = newSno
  }

  studying() {
    console.log(this.name, 'studying~')
  }

  // 实现对父类方法的重写
  running() {
   console.log('Student', this.name, 'running')
  }

  personMethod() {
     // 复用父类中的处理逻辑，此时super是父类的实例
     super.personMethod()
     console.log('处理逻辑4')
     console.log('处理逻辑5')
     console.log('处理逻辑6')
  }

  // 重写静态方法
  static staticMethod() {
    // 此时super是父类
    super.staticMethod()
    console.log('StudentStaticMethod')
  }
}

var stu = new Student('zzt', 18, 111)
console.log(stu)

/* stu.eating()
stu.running()
stu.personMethod()
Student.staticMethod() */
// console.log(Object.getOwnPropertyDescriptors(Person))
console.log(Object.getOwnPropertyDescriptors(stu))
console.log(stu.snoo)
console.log(Object.getOwnPropertyDescriptors(stu))