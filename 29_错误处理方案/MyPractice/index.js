/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-23 17:41:08
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-23 18:13:48
 * @LastEditContent: 
 */
/**
 * throw语句的介绍，2点
 * 1.throw语句用于抛出自定义异常
 * 2.当遇到throw语句时，当前的函数执行会被停止，（throw后面的语句不会执行）
 */

/**
 * throw关键字后面可以跟上哪些数据类型，举例说明：
 * 1.基本数据类型，如Number, String, Boolean
 * 2.对象类型，可以包含更多信息。
 */

/**
 * Error类包含的3个属性，并介绍
 * 1.message：创建Error对象时传入的message
 * 2.name：Error的名称，通常和类的名称一致。
 * 3.stack：整个Error的错误信息，包括函数的调用栈。直接打印Error对象时，打印的就是stack
 */

/**
 * 举例3个Error的子类，并介绍
 * RangError：下标值越界时使用的错误类型。
 * SyntaxError：解析语法错误时，使用的错误类型。
 * TypeError：出现类型错误时，使用的错误类型。
 */

/**
 * 一个函数抛出了异常，调用它的时候程序会被强制终止
 */

/**
 * 异常的捕获使用try...catch...finally，对finally的介绍2点
 * 1.finally表示最终一定会被执行的代码结构
 * 2.如果try和finally中都有返回值，那么会使用finally中的返回值。
 */
