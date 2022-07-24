/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-26 20:21:46
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-26 20:41:06
 * @LastEditContent: 
 */
/**
 * with语句的作用和使用
 * 	扩展一个语句的作用域链
 */
const obj = { name: 'jlinz' }
with (obj) {
	console.log(name);
}

/**
 * 为什么不建议使用with语句
 * 	因为它可能是混淆错误和兼容性问题的根源
 */

/**
 * with语句不能再严格模式下使用
 */

/**
 * eval的作用和使用
 * 	eval是一个特殊的函数，它可以将传入函数的字符串当作JavaScript代码执行
 */

/**
 * eval是全局函数
 */

/**
 * 为什么不建议在开发中使用eval
 * 	1.eval代码可读性差，不方便维护
 * 	2.eval传入的使字符串，在执行时，可能被篡改造成bug甚至安全性上的问题
 * 	3.eval执行时必须经过JS解析器，不能被JS引擎优化
 */

/**
 * 什么是严格模式
 * 	严格模式是一种具有限制性的JavaScript模式，它使JavaScript代码隐式的脱离了懒散（sloppy）模式
 */

/**
 * 严格模式对正常JavaScript语义进行了3点限制
 * 	1.严格模式使用抛出异常的方式来消除一些静默（silent）错误
 * 	2.严格模式使JS引在执行代码时进行更多的优化（不用处理一些特殊语法）
 * 	3.严格模式禁用了ECMAScript未来版本中可能会定义的语法
 */

/**
 * 开启严格模式的2种方式
 * 	可在函数或文件开头使用use strict开启严格模式
 */

/**
 * 严格模式下会报错的8个场景
 * 	1.意外的创建全局变量，如 msg = 'hello'
 * 	2.引起静默失败的赋值操作会抛出异常，如 true.name = 123
 * 	3.删除不可删除的对象属性
 * 	4。不允许函数参数有相同名称
 * 	5.不允许使用0的八进制写法
 * 	6.不允许使用with语句
 * 	7.eval不再为上层引用变量
 * 	8.this绑定不会默认转成对象
 * 		自执行函数中的this为undefined
 * 		settimeout中回调函数的this为window
 */