/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-15 13:34:06
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-15 14:06:47
 * @LastEditContent: 
 */
/**
 * JavaScript经过Parse转成AST的过程中，创建了全局对象GO，全局变量会放入该变量，代码执行时再赋值，3点说明：
 * 	全局对象所有的作用域（scope）都能访问
 * 	其中包含了Date, String, Number, Array, setTimeout, setInterval等等类和方法
 * 	存在一个属性window指向自己
 */

/**
 * 运行代码，创建执行上下文栈（Execution Context Stack， ECS），也称为函数调用栈
 */

/**
 * 代码运行的过程：磁盘 -> 加载到内存 => 传承机器指令 -> 被CPU运行
 */

/**
 * 全局代码执行时，会创建全局执行上下文（Global Execution Context，GEC），GEC放入ECS中包含2部分
 * 	1.在JS代码通过Parse转成AST数的过程中，会创建全局变量GO，全局变量和函数会放入该对象。但是并不会赋值，这个过程称为变量的作用域提升hoisting
 * 	2.在代码执行中对变量赋值，或执行其它函数
 */

/**
 * 在执行的过程中遇到函数如何执行
 * 	根据函数体创建一个函数执行上下文（Fucntion Execution Context），并压入到ECS中
 */

/**
 * FEC中包含的3部分内容
 * 1.函数通过Parse转成AST数的过程中，会创建一个Activation Object，AO中包含形参，arguments，函数定义和指向函数对象，定义的变量
 * 2.作用域链VO（函数中就是AO）和父级作用域VO，查询时会一层层查找。
 * 3.根据不同的情况绑定this
 */

/**
 * 5道作用域提升面试题
 */