/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-31 08:43:18
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-31 09:20:58
 * @LastEditContent: 
 */
/**
 * JS中的this与其它传统面向对象语言中this的区别
 * 	常见的编程语言中，如Java，C++，Swift，Dart中，this通常只出现在类的方法中，特别是实例方法，this代变当前调用对象
 * 	而在JS中this的使用更加灵活，无论是出现的位置还是代表的含义
 */

/**
 * this在全局作用域下的指向，分情况
 * Node：{}，浏览器：window
 */

/**
 * this绑定的机制4点
 * 1.在函数调用时，JS会默认给它绑定一个this
 * 2.this的绑定和函数的定义位置无关
 * 3。this的绑定和函数的调用方式和调用位置有关
 * 4.this是在运行时绑定的
 */

/**
 * this绑定方式4点
 * 1，默认绑定
 * 2.隐式绑定
 * 3.显示绑定
 * 4/new绑定
 */

/**
 * 内置函数的this绑定（div点击默认绑定div元素本身）
 * 	setTimeout, forEach内置函数为普通函数时，this默认绑定为window，内置函数为箭头函数时，this取上层作用域的this
 */
/* setTimeout(function () {
	console.log(this); // window
}, 0)
setTimeout(() => {
	console.log(this); // {}
}, 0); */
[1].forEach(ele => {
	console.log(this); // window
});
function foo() {
	[1].forEach(function () {
		console.log(this); // window
	});
}

foo.call({ name: 'zzt' })

/**
 * this绑定的优先级规则
 * 	1.默认绑定优先级最低
 * 	2.显示绑定优先级高于隐式绑定
 * 	3.new绑定优先级高于隐式绑定
 * 	4.new绑定优先级高于bind
 * 		new绑定和call、apply不允许同时使用，所以不存在谁的优先级高
 */

/**
 * this绑定规则之外，忽略显示绑定的情况
 */
function foo1() {
	console.log(this);
}
foo1.call(null)
foo1.call(undefined)

	/**
	 * this绑定的规则之外，间接函数引用的情况
	 */
	; ({}.b = foo1)()

/**
 * 一行代码实现高阶函数:filter, map, reduce
 */
const arr = [1, 2, 3, 4].filter(ele => ele % 2 === 0).map(ele => ele * 2).reduce((preEle, ele) => preEle + ele)
console.log(arr);

/**
 * 箭头函数返回对象的简写
 */
const bar = () => ({ nam: 'zzt' })
