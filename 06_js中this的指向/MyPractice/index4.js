/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-31 11:46:45
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-31 13:30:07
 * @LastEditContent: 
 */
/**
 * JS中的this与其它传统面向对象语言的区别
 * 	在大多数编程语言中，如Java, C++, Swift, Dart中，this通常只用于类的方法中，特别是类的实例方法
 * 	JS中this的使用更加灵活，不论是出现的位置和代表的含义
 */

/**
 * this在全局作用域下的指向：分情况
 * 	Node：{}， 浏览器：window
 */

/**
 * this绑定的机制4点
 * 1.函数调用时，JS会默认给函数绑定一个this
 * 2.this的绑定与函数定义的位置无关
 * 3.this的绑定与函数调用的位置和调用的方式有关
 * 4.this是在运行时绑定的
 */

/**
 * this绑定方式4点
 * 1.默认绑定
 * 2.隐式绑定
 * 3.显示绑定
 * 4。new绑定
 */

/**
 * 内置函数this绑定（div的点击绑定div元素本身）
 * setTimeout， forEach绑定的window
 */

/**
 * this绑定的优先级规则
 * 	1.默认绑定优先级最低
 * 	2.显示绑定优先级高于隐式绑定
 * 	3.new绑定优先级高于隐式绑定
 * 	4.new绑定优先级高于bind
 * 		new绑定不能和call,apply同时使用，使用不存在优先级高低
 */

/**
 * this绑定规则之外，忽略显示绑定的情况
 */
function foo() {
	console.log(this);
}
foo.call(null) // window
foo.call(undefined); // windwo

/**
 * this绑定规则之外，间接函数引用情况
 */
({}.b = foo)() // window

/**
 * 一行代码使用高阶函数filter, map, reduce
 */
const arr = [1, 2, 3, 4].filter(ele => ele % 2 === 0).map(ele => ele * 2).reduce((preValue, value) => preValue + value)
console.log(arr);

/**
 * 箭头函数返回对象的简写
 */
const bar = () => ({name: 'zzt'})