/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-13 14:59:51
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-13 15:28:01
 * @LastEditContent: 
 */
/**
 * JavaScript经过Parse转成AST的过程中，创建了全局对象GO，全局变量会放入该变量，代码执行时再赋值。3点说明。
 * 1.所有的作用域scope都能访问到
 * 2，其中保存了Date, String, Array, Number, setTimout, setInterval等等函数或类型
 * 3.其中还有window指向自己
 */

/**
 * 2.运行代码，创建执行上下文栈（Execution Context Stack， ECS）函数调用栈
 */

/**
 * 代码的运行过程：磁盘 -> 加载到内存 -> 转成机器指令 -> 给CPU执行
 */

/**
 * 全局代码执行时，会创建全局执行上下文（Global Execution Context，GEC），GEC放入ECS中包含2部分
 * 1.在代码执行前，在Parse转成AST的过程中，会将全局定义的变量，函数加入到GlobalObject中，但并不会赋值，这个过程也称为变量的作用域提升
 * 2.在代码执行中，会给变量赋值，或者执行其它函数
 */

/**
 * 在执行的过程中遇到函数如何执行
 * 	根据函数体创建一个函数执行上下文（Function Execution Context），并且压入到ECS中
 */

/**
 * FEC中包含的3部分
 * 1.在解析函数创建AST数的时候，会创建一个Activation Object，AO中包含形参，arguments，函数的定义和指向函数，定义的变量
 * 2.作用域链，由VO（在函数中就是AO）和父级VO组成，查找时会一层层查找，函数的作用域链与定义位置有关，与调用位置无关。
 * 3.绑定的this。
 */