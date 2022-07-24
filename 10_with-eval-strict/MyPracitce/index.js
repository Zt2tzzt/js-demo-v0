/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-25 11:11:56
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-06-23 09:48:13
 * @LastEditContent: 
 */
'use strict';
/**
* with语句的作用和使用
* 	用于扩展一个语句的作用域链
*/
/* const obj = { name: 'lingz', age: 29 }
with (obj) {
	console.log(name);
	console.log(age);
} */

/**
 * 为什么不建议使用with语句
 * 	因为它可能是混淆错误和兼容性问题的根源
 */

/**
 * with语句不能在严格模式下使用，否则会报错
 */

/**
 * eval的作用和使用
 * 	eval是一个特殊的函数，它可以将传入的字符串当作JavaScript代码来运行
 */
/* var evalstr = 'var message = "Hello"; console.log(message)'
eval(evalstr) */

/**
 * 为什么不建议在开发中使用eval
 * 	1.eval代码的可读性非常差
 * 	2.eval传入的是一个字符串，那么可能在执行的过程中被篡改，可能造成被攻击的风险
 * 	3.eval的执行必须经过JS解释器，不能被JS引擎优化
 */

/**
 * eval是全局函数
 */

/**
 * 什么是严格模式
 * 	严格模式是一种具有限制性的JavaScript模式，从而使代码隐式的脱离了懒散（sloppy）模式
 */

/**
 * 严格模式对JavaScript语义进行了3点限制
 * 	1.严格模式通过抛出错误，来消除一些静默（slient）的错误
 * 	2.严格模式让JS引擎在执行代码时可以进行更多的优化（不需要对一些特殊的语法进行处理）
 * 	3.严格模式禁用了在ECMAScript未来版本中可能会定义的一些语法
 */

/**
 * 开启严格模式的2种方式
 * 	严格模式通过在文件或者函数开头使用“use strice”来开启
 */

/**
 * 严格模式语法限制的8种场景
 * 	1.意外的创建全局变量会报错，如 msg = 'Hello'
 * 	2.引起静默失败的赋值操作会抛出异常,如 true.name = 'abc'
 * 	3.试图删除不可删除的属性会报错
 * 	4.不允许函数参数有相同名称
 * 	5.不允许0的八进制语法，如 0100
 * 	6.不允许使用with
 * 	7.eval不再为上层引用变量
 * 	8.this绑定不会默认转成对象
 * 		1.自执行函数的this指向undefined而不是window
 * 		3.setTimeOut的回调函数中的this指向window，浏览器中，箭头函数和非箭头函数都是window
 */
function foo() {
	console.log(this);
}
foo()
const obj = { name: 'jlinz', foo() { console.log(this); } }
obj.foo()

setTimeout(function () {
	console.log(this);
}, 100);

setTimeout(() => {
	console.log(this);
}, 100);

