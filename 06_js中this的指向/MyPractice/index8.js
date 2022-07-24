/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-13 20:02:47
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-13 20:39:08
 * @LastEditContent: 
 */
/**
 * JS中的this与其它传统面向对象this的区别
 * 1.在常见的编程语言如Java, C++, Swift, Dart中，this通常只用于类的实例方法中，表示调用该方法的对象。
 * 2.JS中的this使用更加灵活，无论是使用的位置还是代表的含义。
 */

/**
 * this在全局作用域下的指向，分情况Node，浏览器
 * Node，{}
 * 浏览器：window
 */

/**
 * this绑定的机制，4点
 * 1.JS代码运行时，会默认给函数绑定this。
 * 2.this的绑定与函数定义的位置无关。
 * 3.this绑定与函数的调用位置调用方式有关。
 * 4.this是在函数运行时绑定的。
 */

/**
 * this绑定的方式
 * 1.默认绑定
 * 2.隐式绑定
 * 3.显示绑定
 * 4.new绑定
 */

/**
 * 内置函数的this绑定
 * setTimeout，window
 * forEach window
 * div的点击 div元素本身
 */

/**
 * this绑定的优先级规则
 * 1.默认绑定优先级最低。
 * 2.显示绑定高于隐式绑定
 * 3.new绑定高于隐式绑定
 * 4.new绑定高于bind
 * 		new绑定与apply和call不能同时使用，不存在优先级高低。
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
 * this绑定规则之外，间接函数引用的情况
 */
({}.b = foo)() // window

/**
 * 一行代码使用高阶函数filter, map, reduce
 */
const arr = [1, 2, 3, 4].filter(ele => ele % 2 === 0).map(ele => ele * 2).reduce((pre, cur) => pre + cur)
console.log(arr);

/**
 * 箭头函数返回对象的简写
 */
const bar = () => ({ name: 'zzt' })

/**
 * 完成4到this相关面试题
 */