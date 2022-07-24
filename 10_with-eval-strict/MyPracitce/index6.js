/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-26 22:43:45
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-26 23:01:19
 * @LastEditContent: 
 */
/**
 * with语句的作用和使用
 * 	扩展语句的作用域链
 */
const obj = { name: 'jlinz', age: 28 }
with (obj) {
	console.log(name, age);
}

/**
 * 为什么不建议使用with语句
 * 	因为它可能是混淆错误和兼容性问题的根源
 */

/**
 * with语句不能再严格模式下使用，否则会报错
 */

/**
 * eval的作用和使用
 * 	eval是一个特殊的函数，它能够将传入的字符串当作JavaScript代码执行
 */
eval("var msg = 'Hello'; console.log(msg)")

/**
 * eval是全局函数
 */

/**
 * 为什么不建议在开发中使用eval
 * 	1.eval代码可读性差，不宜维护
 * 	2.eval在执行过程中,可能被篡改造成bug或者安全性的问题
 * 	3.eval在执行时必须经过JS解析器, 不能被JS引起优化
 */

/**
 * 什么是严格模式
 * 	严格模式是一种具有限制性的JavaScript模式,他能使代码隐式的脱离懒散(sloppy)模式	
 */

/**
 * 严格模式对正常JavaScript语义进行了3点限制
 * 	1.严格模式使用抛出异常的方式, 来消除一些静默(silent)错误
 * 	2.严格模式使JS引擎能够更好的优化代码(不用处理某些特殊语法)
 * 	3.严格模式禁用了ECMAScript未来版本会定义的语法
 */

/**
 * 开启严格模式的2种方法
 * 	在文件或者函数开头使用use strict来开启
 */

/**
 * 严格模式下会报错的8种场景
 * 	1.意外的创建了全局变量,如 msg = 'Hello'
 * 	2.引起静默失败的赋值语句会抛出异常,如 true.name = 123
 * 	3.尝试删除不可删除的对象属性
 * 	4.不允许函数中有同名的参数
 * 	5.不允许0的八进制语法,如 0123
 * 	6.不允许使用with语句
 * 	7.eval不再引用上层变量
 * 	8.this绑定不在自动转成对象
 * 		自执行函数中的this为undefined
 * 		settimeout回调函数中的this为window
 */
