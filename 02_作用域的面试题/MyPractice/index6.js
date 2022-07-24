/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-16 13:25:20
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-16 13:40:28
 * @LastEditContent: 
 */
/**
 * JavaScript经过Parse转成AST的过程中，创建了全局对象（GO），全局变量会放入该对象，代码执行时再赋值，3点说明
 * 1.该对象，所有作用域（scope）都能访问该对象
 * 2.其中包含Date, Array，String, Number, setTimeouout, setInterval等方法和类
 * 3.其中包含一个window属性指向他自己
 */

/**
 * 运行代码，创建自行上下文栈（Execution Context Stack，ECS）（函数调用栈）
 */

/**
 * 代码运行的过程：函数 -> 加载到内存 -> 转成机器指令 -> 给CPU执行
 */

/**
 * 全局代码执行时，会创建全局执行上下文（Global Execution Context, GEC)）,GEC放入ECS中包含2部分
 * 1.在执行代码前，Parse转成AST的过程中，在全局定义的变量会放入GO，但是并不赋值，这个过程也称为变量的作用于提升hoisting
 * 2.执行代码中对变量赋值，或执行其它函数
 */

/**
 * 在执行的过程中，遇到函数如何执行、
 * 根据函数本体，创建函数执行上下文（Function Execution context），并押入到ESC中
 */

/**
 * FES中包含的3部分内容
 * 1.在解析函数成为AST的过程中，会创建一个Activation Object，AO，其中包含参数，arguments，函数定义和指向函数对象，定义的变量
 * 2，作用域链，由VO（函数中就是AO）以及父级VO，查找时会一层层查找
 * 3.根据不同情况绑定this
 */

