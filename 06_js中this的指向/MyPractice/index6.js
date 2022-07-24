/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-02 23:04:21
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-02 23:33:04
 * @LastEditContent: 
 */
/**
 * JS中的this与其他传统面向对象夜宴this的区别
 * 1.在常见的编程语言中如Java，C++，dart，Swift中，this通常用于类的实例方法中。this代表的是当前调用对象
 * 2.JS中this的使用更加灵活，无论是出现的位置还是代表的含义
 */

/**
 * this在全局作用域下的指向，分情况，Node，浏览器
 * 1.Node：{}
 * 2.浏览器：window
 */

/**
 * this绑定的机制4点
 * 1.在函数调用时，JS会自动给函数绑定this
 * 2.this的绑定和函数定义的位置无关
 * 3.this的绑定和函数调用的位置和方式有关
 * 4.this是在运行时绑定的
 */

/**
 * this绑定的方式4点
 * 1.默认绑定
 * 2.隐式绑定
 * 3.显示绑定
 * 4.new绑定
 */

/**
 * 内置函数的this绑定
 * setTimeout： window | setTimeout
 * forEach : window | global
 * div元素，元素对象本身
 */

/**
 * this绑定的优先级规则
 * 1.默认绑定优先级最低
 * 2.显示绑定高于隐式绑定
 * 3.new绑定高于隐式绑定
 * 4new绑定高于bind
 * 	new绑定不能和apply, call同时使用，所以不存在优先级高低
 */

/**
 * this绑定规则之外，忽略显示绑定的情况
 */
function foo() {
	console.log(this);
}
foo.call(null)
foo.call(undefined);

/**
 * this绑定规则之外，间接函数引用的情况，相当于独立函数的调用
 */
({}.b = foo)()

/**
 * 一行代码使用高阶函数filter, map, reduce
 */
const arr = [1, 2, 3, 4].filter(ele => ele % 2 === 0).map(ele => ele * 2).reduce((pre, cur) => pre + cur)
console.log(arr);

/**
 * 箭头函数返回对象的简写
 */
const bar = () => ({ name: 'rice' })