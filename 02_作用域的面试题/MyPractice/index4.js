/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-13 20:45:15
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-13 21:53:27
 * @LastEditContent: 
 */
/**
 * JavaScript通过Parse转成ST树的过程中，创建了全局对象GO，全局变量会放入该对象，代码执行时再赋值。3点说明
 * 1.该对象可以被所有作用域（scope）访问
 * 2.该对象中存放了Date，Array，String，Number，setTimeout，setInterval等等类和方法
 * 3.该对象中存在属性window指向它自己
 */

/**
 * 运行代码，创建执行上下文（Execution Context Stack）（函数调用栈）
 */

/**
 * 代码运行的过程：磁盘 -> 加载到内存 -> 转成机器指令 -> 被CPU执行
 */

/**
 * 全局代码执行时，会创建全局执行上下文（Global Execution Context），GEC放入ECS中包含两部分
 * 1.在代码执行前，在Parse转成AST的过程中，会将全局定义的变量，函数加入到GlobalObject中，但是并不会赋值。这个过程也称之为变量的作用域提升（hoisting）。
 * 2.在代码执行中，对变量赋值，或者执行其他的函数
 */

/**
 * 在执行的过程中遇到函数如何执行
 * 	根据函数体创建函数执行上下文（Function Execution Context），并且压入到ECS中
 */

/**
 * FEC中包好的3部分内容
 * 1.在解析函数成为AST树结构时，会创建函数的Acativation Object，AO对象，其中存放了形参，arguments，函数定义和指向函数对象，定义的变量。在执行时赋值。
 * 2.作用域链，VO（函数中就是AO）与父级VO，查找时会一层层查找，函数的父级作用域，与他的定义位置有关，与他的调用位置无关。
 * 3.根据不同情况绑定this值
 */

/**
 * 五道作用于提升面试题。
 */
