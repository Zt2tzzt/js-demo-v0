/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-09 12:59:35
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-09 13:33:21
 * @LastEditContent: 
 */
/**
 * with语句的作用和使用
 * 扩展一个语句的作用域链
 */
const obj = { name: 'linz', age: 28 }
with (obj) {
	console.log(name);
}

/**
 * 为什么不建议使用with语句
 * 因为with语句是回校错误和兼容性问题的根源
 */

/**
 * with语句不能再严格模式下使用，否则会报错。
 */

/**
 * eval的作用和使用
 * eval是一个特殊的函数，eval可以将传入的字符串当作Javascript代码来执行
 */
eval('const msg = "Hello"; console.log(msg)')

/**
 * eval是全局函数
 */

/**
 * 为什么不建议在开发中使用eval语句
 * 1.eval代码的可读性差，不宜维护
 * 2.eval传入的是一个字符串，在执行的过程中，可能会被篡改造成bug或安全性隐患
 * 3.eval执行的代码必须经过JS解析器，无法被JS引擎优化
 */

/**
 * 什么是严格模式
 * 严格模式是一种具有限制性的Javascript模式，从而使代码隐式的脱离了懒散（sloppy）模式
 */

/**
 * 严格模式对正常Javascript语义进行了一些限制3点
 * 1.严格模式通过通过抛出错误的形式，来处理Javascript中静默（silent）错误
 * 2.严格模式能够使得让JS引擎在执行代码时，能够进行更多的优化
 * 3.严格模式禁用了ECMA规范未来版本中可能会定义的一些语法
 */

/**
 * 开启严格模式的2中方法
 * 在文件或函数开头使用'use strict'来开启。
 */

/**
 * 严格模式下会报错的8种常件场景
 * 1.意外创建全局变量，如 msg = 'Hello',
 * 2.引起静默失败的赋值操作会抛出异常，如 true.name = 123
 * 3.试图删除不可删除的对象属性
 * 4.函数中出现同名参数
 * 5.不允许0的八进制写法，如0100
 * 6.不能使用with语句
 * 7.eval语句不会引用上层作用域
 * 8.this绑定不会自动转成对象
 * 		自执行函数的this指向undefined而不是window
 * 		setTimeout的回调函数中的this指向window	
 */