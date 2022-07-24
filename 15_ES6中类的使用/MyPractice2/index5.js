/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-19 18:46:33
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-19 20:57:01
 * @LastEditContent: 
 */
/**
 * 创建类继承内酯类
 */
class MyArray extends Array {
	firstItem() {
		return this[0]
	}
	lastItem() {
		return this[this.length - 1]
	}
}
const arr1 = new MyArray(1, 2, 3)
console.log(arr1.firstItem(), arr1.lastItem());

// JS实现混入的效果
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
function mixinRunner(BaseCalss) {
	return class extends BaseCalss {
		running() {
			console.log(this.name, 'running');
		}
	}
}
Student = mixinRunner(Student)
new Student('zzt', 18, 666).running()

/**
 * 多态的概念
 * 	1.多态值为不同数据类型的实体提供统一的接口，或者使用单一的符号来表示不同的数据类型
 * 	2.对不同的数据类型进行同一个操作，表现出的行为（形态）不一致，也被称为多态。
 */
/**
 * 传统的面向对象，多态的3个前提
 * 	1.必须有继承
 * 	2.必须有重写（子类方法重写父类方法）
 * 	3.必须有父类引用指向子类对象
 */
