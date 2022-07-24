/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-05 14:01:48
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-05 14:30:20
 * @LastEditContent: 
 */
/**
 * JS中的this与其它传统面向对象语言this的区别
 * 在常见的编程语言中中，如Java，C++，dart，swift中的this通常用于类的实例方法中，特别是实例方法，this代表的是当前调用对象
 * 而在JS中类的使用更加灵活，无论是出现的位置出现的位置还是代表的含义
 */

/**
 * this在全局作用域下的指向
 * Node: {}
 * 浏览器：window
 */

/**
 * this绑定的机制4点
 * 1.函数在调用的过程中，JS会为它自动绑定this
 * 2.this的绑定与函数定义的位置无关
 * 3.this的绑定与函数调用位置和调用方式有关
 * 4.this是在运行时绑定的。
 */

/**
 * this绑定方式4点
 * 1.默认绑定
 * 2.隐式绑定
 * 3。显示绑定
 * 4.new 绑定
 */

/**
 * 内置函数的this绑定
 * setTimeout, window | settimeout
 * forEach，window | global
 * div的点击，div元素本身
 */

/**
 * this绑定的优先级顺序
 * 1.默认绑定优先级最低。
 * 2.显示绑定高于隐式绑定
 * 3.new绑定高于隐式绑定
 * 4.new绑定高于bind
 * 	new绑定不能和apply，call同时使用，所以不存在优先级的高低
 */

/**
 * this绑定规则之外，忽略显示绑定的情况
 */
function foo() {
	console.log(this);
}
foo.call(null) // window | global
foo.call(undefined); // windwo | global

/**
 * this绑定规则之外，间接函数引用的情况, 相当于独立函数的调用
 */
({}.b = foo)() // window | {}

/**
 * 一行代码使用高阶函数filter, map, reduce
 */
const res = [1, 2, 3, 4].filter(ele => ele % 2 === 0).map(ele => ele * 2).reduce((pre, curr) => pre + curr)
console.log(res);

/**
 * 箭头函数返回对象的简写
 */
const bar = () => ({ name: 'zzt' })