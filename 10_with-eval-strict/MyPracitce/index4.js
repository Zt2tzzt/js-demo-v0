/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-26 18:52:41
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-26 19:18:23
 * @LastEditContent: 
 */

/**
 * with语句的作用和使用
 * 	他能扩展一个语句的作用域链
 */
const obj = { name: 'lingz' }
with (obj) {
	console.log(name);
}

/**
 * 为什么不建议使用with语句
 * 	因为它可能是混淆错误与兼容性问题的根源
 */

/**
 * with语句不能再严格模式下使用，否则会报错
 */

/**
 * eval的作用和使用
 * 	eval是一个特殊的函数，它可以将传入的字符串当作JavaScript代码执行
 */
eval('var msg = "Hello"; console.log(msg)')

/**
 * eval是全局函数
 */

/**
 * 为什么不建议在开发中使用eval语句
 * 	2.eval传入字符串，代码可读性差，不宜维护
 * 	2.eval在执行过程中，字符串可能被篡改，造成bug甚至安全性的问题
 * 	3.eval在执行时必须经过JS解析器，不能被JS引擎优化
 */

/**
 * 什么是严格模式
 * 	严格模式是一种具有限制性的JavaScript模式，它是代码隐式的脱离了懒散（sloppy）模式
 */

/**
 * 严格模式对正常JavaScript语义进行了3点限制
 * 	1.严格模式通过抛出错误，来消除一些静默（silent）错误
 * 	2.严格模式使得代码能够更好的被JS引擎优化（不需要对一些特殊语法进行处理）
 * 	3.严格模式禁用了ECMAScript在未来版本中可能会定义的一些语法
 */

/**
 * 开启严格模式的2种方式
 * 	严格模式可在文件开头或者函数开头使用‘use strict'来开启
 */

/**
 * 严格模式下会报错的8种场景
 * 	1.引起静默失败的赋值操作会抛出异常。如 true.name = 123
 * 	2.意外的创建全局变量会报错，如msg = 'hello'
 * 	3.删除不可删除的对象属性会报错
 * 	4.不允许函数参数有相同名称
 * 	5.不允许使用0的八进制数字写法
 * 	6.不允许使用with语句
 * 	7.eval不在为上层引用变量
 * 	8.this绑定不会默认转成对象
 * 		自执行函数中的this为undefined
 * 		setTimeout的回调函数中this为window
 */
