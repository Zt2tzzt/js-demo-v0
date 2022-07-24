/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-13 10:08:47
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-13 11:09:17
 * @LastEditContent: 
 */
/**
 * JavaScript经过Parse转成AST的过程中，创建了全局对象GO，全局变量会放入该对象，代码执行时再赋值，3点说明
 * 1.该对象所有的作用域scope都可以访问
 * 2.里面包含Date，String，Number，array。setTimeout, setInterval
 * 3.还有一个window属性，指向自己
 */

/**
 * 运行代码，创建执行上下文栈（Execution Context Stack，ECS）（函数调用栈）
 */

/**
 * 代码运行的过程：磁盘 -> 加载到内存 -> 转成机器指令 -> 给CPU执行
 */

/**
 * 全局代码执行时，会创建全局执行上下文（Global Execution Context，GEC），GEC放入ECS中包含2部分
 * 1.在代码执行前。经过Parse转成AST树的过程中，会将全局定义的变量和函数添加到GlobalObject中，但不会赋值，这个过程也称为变量的作用域提升（hoisting）
 * 2.在函数执行中，给变量赋值，或者执行其它函数。
 */

/**
 * 遇到函数如何执行？
 * 会根据函数体创建一个函数执行上下文（Function Execution Stack），压入到ESC中
 */

/**
 * FEC中包含的3部分内容
 * 1.在解析函数成为AST数结构时，会创建一个Activation Object（AO），AO中包含形参，aruguments对象，函数定义和指向函数对象，定义的变量。
 * 2.作用域链，由VO（函数中就是AO）和父级VO组成，查找时会一层层查找。父级作用域与定义位置有关，与调用位置无关
 * 3.this绑定的值，根据不同情况绑定this。
 */