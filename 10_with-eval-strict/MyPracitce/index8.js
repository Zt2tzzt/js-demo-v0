/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-31 10:51:37
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-31 11:19:22
 * @LastEditContent: 
 */
/**
 * with语句的作用和使用
 * 	用于扩展语句的作用域链
 */
const obj = { nam: 'linz' }
with (obj) {
	console.log(nam);
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
 * 	eval是一个特殊的函数，它能将传入的字符串当作Javascript代码执行
 */

/**
 * eval是全局函数
 */

/**
 * 为什么不建议在开发中使用eval语句
 * 	1.eval代码可读性差，不易维护
 * 	2.eval传入字符串，在执行时可能被篡改造成bug甚至安全性隐患
 * 	3.eval执行必须经过JS解析器，代码不能被JS引擎优化
 */

/**
 * 什么是严格模式
 * 	严格模式是一种具有限制性的JavaScript模式，它使得JS代码隐式的脱离了懒散（sloppy）模式
 */

/**
 * 严格模式对正常JavaScript语义进行了一些限制3点
 * 	1.严格模式通过抛出异常来处理代码中的静默（silent）错误
 * 	2.严格模式使JS引擎在执行代码时可以进行更多的优化（不用处理一些特殊的用法）
 * 	3.严格模式禁用了ECMAScript未来版本中可能会定义的一些语法。
 */

/**
 * 开启严格模式的2种方式
 * 	在函数或文件开头使用use strict来开启
 */

/**
 * 严格模式下会报错的8种场景
 * 	1.意外的创建全局变量，如 msg = 'zzt'
 * 	2.引起静默失败的赋值操作会抛出异常，如 true.name = 123
 * 	3.试图删除不可删除的对象属性
 * 	4.不允许函数中有相同的参数名称
 * 	5.不允许0开头的数值写法
 * 	6.不允许使用with语句
 * 	7.eval不再引用上层变量
 * 	8。this绑定不再自动转成对象
 * 		自执行函数中的this指向undefined而不是window
 * 		setTimout内置函数中的this指向window
 */