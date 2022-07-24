/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-18 15:17:21
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-18 15:50:37
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

/**
 * JS中实现混入的效果
 */
function mixinRunner(BaseClass) {
	return class extends BaseClass {
		running() {
			console.log(this.name, 'running');
		}
	}
}
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
new Student('zzt', 18, 666).running()

/**
 * 多态的概念
 * 1.多态指为不同的数据类型实体提供统一的接口，或者以单一的符号表示不同的数据类型
 * 2.不同的数据类型实体，进行同一操作时，表现出不同的行为（形态）也称为多态
 */
/**
 * 传统的面向对象，多态的3个前提
 * 1.必须有继承
 * 2.必须有重写（子类方法重写父类方法）
 * 3.必须有父类引用指向子类对象
 */

