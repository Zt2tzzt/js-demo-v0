/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-13 08:48:58
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-04-12 21:53:22
 * @LastEditContent: 
 */

/**
 * 代码加载的过程：磁盘 -> 加载到内存 -> 转成机器指令 -> 给CPU执行
 */

/**
 * JavaScript经过Parse转成AST的过程中，创建了全局对象GO，全局变量会放入该对象（变量的作用域提升），代码执行时，再赋值，3点说明
 * 1.该对象，所有的作用域scope都可以访问。
 * 2.里面包含Date，Array, String, Number, setTimeout, setInterval等等
 * 3.其中还有一个window属性指向自己
 */

/**
 * 运行代码，创建执行上下文栈（Execution context stack, ECS）（函数调用栈）
 */

/**
 * 全局代码执行时，会创建全局执行上下文（Global Execution context， GEC），GEC放入ECS中包含两部分
 * 1.在代码执行前，在Parse转成AST的过程中，会将全局定义的变量，函数等加入到GlobalObject中，但是并不会赋值，这个过程也称之为变量的作用域提升（hoisting）
 * 2.在代码执行中，对变量赋值，或者执行其他的函数。
 */

/**
 * 在执行的过程中遇到函数如何执行
 * .会根据函数体创建一个函数执行上下文（Functional Execution Context，FEC），并且压入到ECS中
 */

/**
 * FEC中包含的3部分内容
 * 1.在解析函数成为AST树结构时，会创建一个Activation Object（AO），AO中包含形参，arguments对象，函数定义和指向函数对象、定义的变量
 * 2.作用域链，由VO（在函数中就是AO）和父级VO组成，查找时会一层层查找，（函数的父级作用域，与他的定义位置有关，与他的调用位置无关）
 * 3.this绑定的值，根据不同情况绑定this
 */


