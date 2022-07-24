/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-30 21:24:12
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-31 08:58:37
 * @LastEditContent: 
 */
/**
 * JS中的this与其它传统面向对象语言this的区别
 * 	常见的编程语言中，如Java，C++，Swift，Dart中this一般用于类的方法中，特别是实例方法，this代表的是当前调用对象
 * 	在JS中this的用法更加灵活，无论是出现的位置还是它代表的含义
 */

/**
 * this在全局作用域下的指向，分情况
 * Node：{}
 * 浏览器：window
 */

/**
 * this绑定的机制
 * 	1.在函数运行时，JavaScript会给函数自动绑定一个this
 * 	2.this绑定与函数的定义位置无关
 * 	3.this的绑定与调用位置和调用方式有关
 * 	4.this是在运行时被绑定的
 */

/**
 * 内置函数的this绑定(div点击绑定div元素本身)
 */
/* setTimeout(() => {
	console.log('***', this);
}, 0);
setTimeout(function () {
	console.log('----', this);
}, 0);
[1, 2, 3].forEach(ele => {
	console.log(ele, this);
});
[1, 2, 3].forEach(function (ele) {
	console.log(ele, this);
}) */

/**
 * this绑定的有限规则
 * 	1。默认绑定优先级最低
 * 	2.显示绑定优先级高于隐式绑定
 * 	3.new绑定优先级高于隐式绑定
 * 	3.new绑定优先级高于bind
 * 		new绑定不能和call，apply同时使用
 */

/**
 * 7.this绑定规则之外，忽略显示绑定的情况
 */
function foo() {
	console.log('+++', this);
}
// foo.call(null) // globalThis
// foo.call(undefined); // globalThis

/**
 * .this绑定规则之外，间接函数引用的情况
 */
// foo(); // globalThis
// ({}.foo = foo)(); // globalThis

/**
 * 一行代码实现高阶函数filter, map, reduce
 */
const arr = [1, 2, 3, 4].filter(ele => ele % 2 === 0).map(ele => ele * 2).reduce((preele, ele) => preele + ele)
console.log(arr);

/**
 * this函数返回对象的简写
 */
const bar = () => ({ name: 'zzt' })
