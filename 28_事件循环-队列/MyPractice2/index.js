/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-23 15:45:59
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-04-24 09:42:10
 * @LastEditContent: 
 */
/**
 * Node中的事件循环，由libuv实现的，它是一个多平台的专注于异步IO的库。
 */

/**
 * 理解Node的架构图，2点
 * 	1.Libuv中主要维护了一个EventLoop（事件循环）和一个worker threads（线程池）。
 * 	2.EventLoop负责调用系统的一些其它操作，文件的IO, NetWork，child-processes等
 */

/**
 * 事件循环是一个桥梁，连接着应用程序的JavaScript和系统调用之间的通道，2点理解。
 * 	1.无论是文件IO，数据库，网络IO，定时器，子进程在完成对应的操作后，都会将对应的结果和回调函数放到事件循环（任务队列）中。
 * 	2.事件循环会不断地从任务队列中取出对应的事件（回调函数）来执行。
 */

/**
 * Node中完成一次完整的事件循环Tick分成6个阶段。一般阻塞在轮询阶段。
 * 	1.定时器（Timers）：执行setTimeout()和setInterval()的调度回调函数。
 * 	2.待定回调(Pending Callback)：对某些系统操作执行回调，比如TCP连接时接收到ECONNREFUSED。
 * 	3.idle，prepare：仅系统内部使用。
 * 	4.轮询（Poll）检索新的IO事件，执行与IO相关的回调。
 * 	5.检测(Check)：setImmediate函数在这里执行。
 * 	6.关闭的回调函数：一些关闭的回调函数，如Socket.on('close', ...)。
 */

/**
 * Node中的宏任务，微任务举例
 * 微任务：process.nextTick，Promise的then回调，queueMicrotask
 * 宏任务：setTimeout, setInterval, setImmediate，close事件。
 */

/**
 * Node中宏任务队列和微任务队列举例
 * 微任务
 * 	next tick queue: process.nxtTick
 * 	other queue: Process的then回调，queueMicrotask
 * 宏任务队列：
 * 	timer queue：setTimeout, setInterval
 * 	poll queue: IO事件
 * 	check queue: setImmediate
 * 	close queue: close事件
 */
