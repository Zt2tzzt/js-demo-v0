/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-21 17:42:04
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-04-22 16:28:59
 * @LastEditContent: 
 */

/**
 * 异步函数内部代码的执行过程和普通函数一致的，默认情况下也是会被同步执行。
 */

/**
 * 异步函数没有返回语句时（返回undefined），默认返回一个Promise对象，该对象then方法执行时机是异步函数返回undefined时
 */

/**
 * 异步函数有返回值时，与普通函数的3点区别
 * 	1.返回一个普通值，会被包裹到Promise.resolve中。
 * 	2.返回一个Promise，Promise的状态由该Promise决定。
 * 	3.返回一个thenable对象，Promise的状态由该对象的then方法来决定。
 */

/**
 * 异步函数如果抛出异常，执行该异步函数时，不会像普通函数那样报错，而是作为Promise的reject来传递。
 */

/**
 * async函数内部可以使用await关键字，await关键字的2点特点
 * 1.通常使用await时，后面会跟一个表达式，这个表达式会返回一个Promise。
 * 2.那么await会等到Promise的状态变成fulfilled时，才会继续执行异步函数后续代码。
 */

/**
 * await后面的值存在的3种情况。
 * 	1.普通值，直接返回这个值
 * 	2.thenable对象，根据对象的then方法调用来决定后续的值。
 * 	3.Promise对象，根据Promise的状态决定后续值，如果是reject状态，那么会将这个reject值直接作为异步函数返回的Promise的reject值
 */

/**
 * 线程和进程是操作系统的2个概念，说明并解释。
 * 	1.进程（process）：
 * 		计算机已经运行的程序，是操作系统管理程序的一种方式。
 * 		启动一个应用程序，就会默认启动一个或多个进程。
 * 	2.线程（thread）：
 * 		操作系统能够运行运算调度的最小单位，通常境况下，它包含在进程中。
 * 		每一个进程中，都会启动至少一个线程来执行代码，这个线程被称之为主线程。
 */

/**
 * 操作系统如何做到同时让多个进程工作，3点
 * 	1.CPU运算速度很快，可以在多个进程之间迅速的切换。
 * 	2.进程中的线程获取到时间片时，就可以快速执行编写的代码。
 * 	3.对于用户来说是感受不到这种快速切换的
 */

/**
 * JavaScript是单线程的，但是JS应该有自己的容器进程：浏览器或Node
 */

/**
 * 介绍浏览器中的进程管理，2点：
 * 	1.多数浏览器都是多进程的，打开一个tab页时，就会开启一个新进程，防止一个页面卡死整个浏览器无响应。
 * 	2.每个进程中又有很多线程，其中包括执行JavaScript代码的线程。
 */

/**
 * 介绍JS单线程执行机制，2点
 * 	1.JS是单线程执行的，在同一个时刻只能做一件事。
 * 	2.如果一件事很耗时，意味着当前线程会被阻塞。
 */

/**
 * 说明真正耗时的操作，不是由Javascript执行的，2点。
 * 	1.浏览器每个进程都是多线程的，那么其它线程可以来完成这个耗时的操作。
 * 	2.比如网络请求，定时器，JS只需要在特定的时候执行应该有的回调即可。
 */