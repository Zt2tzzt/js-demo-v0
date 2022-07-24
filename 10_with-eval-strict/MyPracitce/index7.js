/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-29 09:10:47
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-29 09:46:52
 * @LastEditContent: 
 */
/**
 * with语句的作用和使用
 * 	扩展语句的作用域链
 */
const obj = { name: 'lingz', age: 29 }
with (obj) {
	console.log(name, age);
}

/**
 * 为什么不建议使用with语句
 * 	因为它可能是混淆错误和兼容性问题的根源
 */

/**
 * with语句不能在严格模式下使用，否则会报错
 */

/**
 * eval的作用和使用
 * 	eval是一个特殊的函数，它能将传入的字符串当作JavaScript代码执行
 */
eval('var msg = "Hello"; console.log(msg)')

/**
 * eval是全局函数
 */

/**
 * 为什么不建议在开发中使用eval
 * 	1.eval代码阅读性差，不宜维护
 * 	2.eval传入字符串，在执行时可能被篡改造成bug甚至安全性隐患
 * 	3.eval执行代码必须经过JS解析器，不能被JS引擎优化
 */

/**
 * 什么是严格模式（
 * 	严格模式是一种具有限制性的JavaScript模式，它使得代码隐式的脱离了懒散模（sloppy）式
 */

/**
 * 严格模式对正常Javascript语义做了一些限制3点
 * 	1.严格模式通过抛出错误，来消除代码中的一些静默（silent）错误
 * 	2.严格模式让JS在执行代码时能可以进行更多的优化（不用处理一些特殊的语法）
 * 	3.严格模式禁用了ECMAScript未来版本可能会定义的语法
 */

/**
 * 开启严格模式的2种方法
 * 	在函数文件开头使用‘use strict'来开启
 */

/**
 * 严格模式下会报错的8种常见场景
 * 	1.意外的创建了全局变量会报错，如 msg = 'Hello'
 * 	1.引起静默失败的赋值造作会抛出异常，如 true.name = 123
 * 	3/试图删除不可删除的对象属性
 * 	4.不允许函数出现同名参数
 * 	5.不允许数字0开头的八进制写法
 * 	6.不允许使用with语句
 * 	7.eval不会引用上层变量
 * 	8.this绑定不会默认转成对象
 * 		1.自执行函数中的this指向undefined
 * 		2.settimeout回调函数中this指向全局对象
 */

