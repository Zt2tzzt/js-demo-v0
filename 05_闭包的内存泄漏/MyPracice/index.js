/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-03 22:35:53
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-06-21 10:30:24
 * @LastEditContent:
 */
/**
 * JS中函数作为第一公民的2点特征
 * 1.意味着函数的使用是非常灵活的
 * 1.函数可以作为另外一个函数的参数，也可以作为另外一个函数的返回值来使用
 */

/**
 * 什么是高阶函数
 * 1.一个函数接收另一个函数作为参数，或者返回一个函数，称之为高阶函数
 */

/**
 * 函数（Function）和方法（Method）的区别
 * 方法是使用对象调用的函数
 */

/**
 * JS数组常用的6个高阶函数
 */
// filter
// map
// reduce
// find
// findIndex 返回满足条件的第一个元素的索引
// forEach

/**
 * 最早实现闭包的语言是 Schema，Branden Eich 非常喜欢该语言，在JavaScript中借鉴了闭包。
 * 组成闭包的2部分：函数 + 可以访问的自由变量
 * 当捕捉闭包时，它的自由变量会被确定，即使脱离了捕捉时的上下文，闭包也能照样运行。
 */

/**
 * 闭包定义的3点总结
 * 1.一个普通的函数，如果它可以访问外层作用域的自由变量，那么这个函数就是一个闭包。
 * 2.从广义的角度来说，JavaScript中的函数都是闭包；
 * 3.从狭义的角度来说，如果Javascript中的函数访问了外层作用域的变量，那么它是一个闭包；
 */

/**
 * 什么是闭包的内存泄漏
 * 闭包引用的外层作用域变量不会再使用，但无法释放的情况称为闭包的内存泄漏
 */

/**
 * 怎么解决闭包的内存泄漏
 * 	将闭包的函数引用置为null，那么函数对应的上层作用域AO对象就不可达了，在GC的下一次检测中，它们就会被释放。
 */

/**
 * 理解闭包的内存图
 */

/**
 * 浏览器调试工具中 Memory 可以生成内存占用快照。
 * V8引擎的实现中，一个整数占据4个字节（原来是8个）
 */

/**
 * ECMA规范中闭包依赖的词法环境都不会被消除，V8引擎中删除了没有依赖的变量。
 */