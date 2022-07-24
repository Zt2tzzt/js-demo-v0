/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-26 12:43:39
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-26 18:18:28
 * @LastEditContent: 
 */
/**
 * with语句的作用和使用
 * 	用于扩展一个语句的作用域链
 */
const obj = { name: 'jlinz', age: 29 }
with (obj) {
	console.log(name, age);
}

/**
 * 为什么不建议使用with语句
 * 	因为他可能是混淆错误和兼容性问题的根源
 */

/**
 * with语句不能再严格模式下使用，否咋会报错
 */

/**
 * eval的作用和使用
 * 	eval是一个特殊的函数，它可以将传入的字符串当作JavaScript代码来运行
 */
eval('var msg = "Hello"; console.log(msg)')

/**
 * eval是全局函数
 */

/**
 * 为什么不建议在开发中使用eval语句
 * 	1.eval代码可读性差，不利于维护
 * 	2.eval传入的字符串，在执行的过程中可能被篡改，造成bug甚至安全性问题
 * 	3.eval的执行必须经过JS解析器，不能被JS引擎优化
 */

/**
 * 什么是严格模式
 * 	严格模式是具有限制性的JavaScript模式，从而使代码隐士的脱离了懒散（sloppy）模式
 */

/**
 * 严格模式对正常JavaScript语义进行了3点限制
 * 	1.严格模式通过抛出错误，来消除一些静默（slient）的错误
 * 	2.严格模式让JS引擎在执行代码时可以进行更多的优化（不需要对一些特殊的语法进行处理）
 * 	3.严格模式静止了ECMAScript未来版本中可能会用到的关键字
 */

/**
 * 开启严格模式的2种写法
 * 	严格模式可在文件或函数开头使用'use strict'开启
 */

/**
 * 严格模式下会报错的8种常见场景
 * 	1.意外的创建全局变量会报错，如'msg = "Hello"'
 * 	2.引起静默失败的赋值操作会抛出异常，如true.name = 123
 * 	3.试图删除不可删除的属性
 * 	4.不允许函数参数有相同名称
 * 	5.不允许0的八进制语法，如0123
 * 	6.不允许使用with
 * 	7.eval不在为上层引用变量
 * 	8.this绑定不会默认转成对象
 * 		自执行函数的this执行undefined而不是window
 * 		setTimout回调函数的this是window
 */