/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-16 20:36:04
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-16 20:48:14
 * @LastEditContent: 
 */
// 创建类继承内酯类
class MyArray extends Array {
	firstItem() {
		return this[0]
	}
	lastItem() {
		return this[this.length - 1]
	}
}
const myarr = new MyArray(1, 2, 3)
console.log(myarr.firstItem())
console.log(myarr.lastItem())

// JS中实现类的混入
class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
}
class Student extends Person {
	constructor(name, age, sno) {
		super(name, age)
		this.sno = sno
	}
}
Student = mixinRunner(Student)
function mixinRunner(BaseClass) {
	return class extends BaseClass {
		running() {
			console.log(this.name, 'running');
		}
	}
}
const stu = new Student('zzt', 18, 666)
stu.running()

/**
 * 多态的概念：
 * 1.多态指为不同的数据类型实体提供相同的解构返回的结果不同，或者使用单一的符号表示不同的数据类型
 * 2.对不同的数据类型实体进行相同的操作，表现出的行为（形态）不同，也被称为多态
 * 传统面向对象，多态的3个前提
 * 1.必须有继承
 * 2.必须有重写（子类重写父类方法）
 * 3.必须有父类引用指向子类对象
 */
