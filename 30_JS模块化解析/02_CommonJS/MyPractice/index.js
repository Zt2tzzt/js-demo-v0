/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-24 17:41:45
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-08-11 16:37:16
 * @LastEditContent: 
 */
/**
 * 写一个JS早期模块化的雏形
 */
var moduleA = (function () {
	var name = 'zzt'
	return {
		name: name
	}
})()

/**
 * 一句话介绍CommonJS
 * 	CommonJS是一个规范，最初提出是在浏览器以外使用，被命名为ServerJS，为了体现它的广泛性，改为CommonJS，平常也会简称CJS
 */

/**
 * CommonJS可用于3处地方：
 * 1.Node是CommonJS在服务器端具有代表性的实现。
 * 2.Browserify是CommonJS在浏览器中的一种实现。
 * 3.webpack打包工具具备对CommonJS的支持和转换。
 */

/**
 * 介绍在Node中CommonJS的原理，2点
 * 1.在Node中每一个JS文件都是一个单独的模块。
 * 2.在这个模块中包括CommonJS规范的核心变量：exports, module.exports, require
 */

/**
 * 模块化的核心是导入导出，介绍Node中的实现，2点：
 * 1.exports和module.exports可以负责对模块中的内容进行导出。
 * 2.require函数可以导入其它模块（自定义模块，系统模块，第三方模块）中的内容
 */

/**
 * nodule.exports对象和require函数返回值，指向的都是同一个对象，一个改变，另外一个也会改变。
 */

/**
 * exports和module.exports之间的关系，3行代码解释。
 */
exporys === module.exports // true
module.exports = {} // 新建了一个对象，本质上会导出这个对象。
exports === module.exports // false
exports.aaa = 'aaa'; // 此时 exports 中的属性不会被导出。没有意义

/**
 * exports存在的意义，为了实现CommonJS规范，严格来说，module.exports导出是不符合CommonJS规范的。
 */

/**
 * require查找的原则：分3种情况,require(X)
 * 情况一：X是Node核心模块如 path、http，直接返回核心模块并停止查找。
 * 情况二：X是以./或/（更目录）形式开头的：
 * 		当作一个文件：
 * 			有后缀名，查找对应的文件
 * 			没有后缀名，查找文件X，查找文件X.JS, 查找文件X.json，查找文件x.node
 * 		没有找到对应的文件，将X当作目录：
 * 			查找x/index.js，查找x/index.json，查找x/index.node.
 * 		仍未找到，报错not found
 * 情况三：X没有路径，并且不是一个核心模块
 * 		会找执行命令的目录（没找到则在上一层查找，直到根目录）下node_module文件夹下的同名目录,查找原则同情况二
 */

/**
 * 模块加载的过程，3点结论
 * 1.模块在被第一次引入时，模块中的JS代码将会被运行一次。
 * 2.模块被多次引入时，会缓存，最终只加载一次。（每个模块都有一个loaded属性来判断。
 * 3.如果有循环引入（或者图结构的引入方式）会采用深度优先搜索（depth first search）的方式加载。（对应的是广度优先搜索（breadth first search）算法）
 */

/**
 * CommonJS规范的缺点，2点
 * 1.CommonJS加载模块是同步的，意味着等到对应的模块加载完毕，当前模块中的内容才能被运行。
 * 2.浏览器加载JS文件需要将文件从服务器下载，再加载运行，意味着后续代码将被阻塞。
 */
