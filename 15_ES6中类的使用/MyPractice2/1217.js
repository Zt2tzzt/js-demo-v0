/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-17 14:21:07
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-06-29 10:53:25
 * @LastEditContent: 
 */
// 1.创建类继承内酯类
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
function mixinRunner(BaseClass) {
	return class extends BaseClass {
		running() {
			console.log(this.name, 'running');
		}
	}
}
Student = mixinRunner(Student)
const stu = new Student('zzt', 18, 666)
stu.running()

/**
 * 多态的概念
 * 1.多态指对于不同的数据类型实体提供统一的接口，或者使用单一的符号来表示不同的数据类型
 * 2.多态指不同的数据类型进行同一操作时，表现出来的行为（形态）不一致，也称为多态
 */
/**
 * 传统的面向对象多态的3个前提
 * 1.必须有继承（或实现接口）
 * 2.必须有重写（子类方法重写父类方法）
 * 3.必须有父类引用指向子类对象。
 */