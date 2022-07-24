/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-16 08:37:49
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-16 09:04:51
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
const arr = new MyArray(1, 2, 3)
console.log(arr.firstItem())
console.log(arr.lastItem())

// JS中实现混入的效果
class Person { }
function mixinRunner(BaseClass) {
	class NewClass extends BaseClass {
		running() {
			console.log('running')
		}
	}
	return NewClass
}
function mixinEater(BaseClass) {
	// 使用匿名类
	return class extends BaseClass {
		eating() {
			console.log('eating')
		}
	}
}
// 在JS中，类只能由一个父类，单继承
class Student extends Person { }

const NewStudent = mixinEater(mixinRunner(Student))
const ns = new NewStudent
ns.running()
ns.eating()

/**
 * 多态的概念:
 * 1. 指为不同数据类型的实体提供统一的接口，或使用一个单一的符号来表示不同的类型
 * 2. 当对不同的数据类型执行同一个操作时，如果表现出来的行为（形态）不一样，那么就是多态的体现
 * 传统意义上多态的3个前提
 * 1.必须有继承
 * 2.必须有重写（子类重写父类的方法）
 * 3.必须有父类引用指向子类对象
 */
