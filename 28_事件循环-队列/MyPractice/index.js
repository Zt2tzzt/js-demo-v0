/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-22 20:48:08
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-04-23 11:32:03
 * @LastEditContent: 
 */
/**
 * 总结浏览器中事件循环的过程
 * 	1.事件由JS线程发起。
 * 	2.被添加到其它线程做耗时操作。
 *  3.再加入事件队列中。
 *  4.最后回到JS线程被执行。
 */

/**
 * 队列是一种数据结构，它的特点是先进先出。
 */

/**
 * 理解浏览器事件循环的三角图
 */

/**
 * 浏览器事件循环中存在2个队列，举例对应的事件。
 * 微任务队列（microtask queue）：Promise的then回调，Mutation Observer API，queueMicrtask()等
 * 宏任务队列（macrotask queue）：ajax，setTimeout，setInterval，DOM监听，UI Rendering等
 */

/**
 * 浏览器事件循环中，代码执行的优先级
 * 1.main script中的代码优先执行。
 * 2.在执行宏任务之前，必须保证微任务队列是空的。
 */

/**
 * Promise的then方法中返回一个thenfable对象，返回一个Promise对象，分别推迟了1，2次微任务。
 */