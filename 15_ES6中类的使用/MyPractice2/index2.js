/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-16 13:12:59
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-16 13:48:50
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
const myArr = new MyArray(1, 2, 3)
console.log(myArr.firstItem());
console.log(myArr.lastItem());

// JS中实现混入的效果
class Person {
	constructor(name) {
		this.name = name
	}
}
function mixinRunner(BaseClass) {
	return class extends BaseClass {
		running() {
			console.log(this.name, 'running');
		}
	}
}
function mixinEater(BaseClass) {
	return class extends BaseClass {
		eating() {
			console.log(this.name, 'eating');
		}
	}
}
class Student extends Person {
	constructor(name, sno) {
		super(name)
		this.sno = sno
	}
}
Student = mixinEater(mixinRunner(Student))
const stu = new Student('zzt', 666)
stu.running()
stu.eating()

// 多态的概念，传统的面向对象多态的3个前提
/**
 * 多态的概念
 * 1.指为不同的数据类型实体提供统一的接口，或者以单一的符号老表示不同的类型
 * 2.当对不同的数据类型进行同一操作时，如果表现出来的行为（形态）不一样，也称为多态
 * 传统的面向对象，多态的3个前提
 * 1.必须有继承
 * 2.必须有重写（子类重写父类方法）
 * 3.必须有父类引用指向子类对象
 */