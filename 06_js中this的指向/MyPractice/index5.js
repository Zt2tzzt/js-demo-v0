/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-01 15:59:01
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-01 17:24:50
 * @LastEditContent: 
 */
/**
 * JS中的this与其它传统面向对象语言的区别
 * 	1.常见的语言中，如Java，C++，Swift，Dart中，this用于类的方法中，特别是实例方法，this代表的是当前调用对象
 * 	JS中的this使用更加灵活，不论是出现的位置还是代表的含义
 */

/**
 * this在全局作用域下的指向，分情况：Node，浏览器
 * 	Node：{}
 * 	浏览器：window
 */

/**
 * this绑定的机制4点
 * 	1.在函数调用时，JS会自动给函数绑定一个this
 * 	2.this绑定与函数定义的位置无关
 * 	3.this绑定与函数调用位置与调用方式有关
 * 	4/ths是在运行时绑定的
 */

/**
 * 内置函数的this绑定，
 * 	setTimeout, window
 * 	forEach, window
 * 	div点击，div元素本身
 */

/**
 * this绑定方式4点
 * 	1.默认绑定
 * 	2.隐式绑定
 * 	3.显示绑定
 * 	4.new绑定
 */

/**
 * this绑定的优先级规则
 * 	1.默认绑定的优先级最低
 * 	2.显示绑定高于隐式绑定
 * 	3.new绑定高于隐式绑定
 * 	4.new绑定高于bind
 * 		new绑定无法和apply, call同时使用，所以没有优先级顺序
 */

/**
 * this绑定规则之外，忽略显示绑定的情况
 */
function foo() {
	console.log(this);
}
foo.call(null) // window
foo.call(undefined); // window

/**
 * this绑定规则之外，间接函数引用，相当于独立函数的调用
 */
({}.b = foo)() // window

/**
 * 一行代码使用高阶函数filter，map，reduce
 */
const arr = [1, 2, 3, 4].filter(ele => ele % 2 === 0).map(ele => ele * 2).reduce((pre, value) => pre + value)
console.log(arr);

/**
 * 箭头函数返回对象的简写
 */
const bar = () => ({ name: 'lingz' })