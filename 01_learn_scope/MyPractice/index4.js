/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-11 08:36:08
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-11 09:53:04
 * @LastEditContent: 
 */
/**
 * 高级语言分为编译型语言和解释性语言
 * 编译型：C,C++,Java，将代码编译成可执行文件，再执行
 * 解释性：Javascript,Python，边读源码边做解释，再执行
 */

/**
 * 访问网站过程：域名 -> dns解析 -> ip地址
 */

/**
 * 浏览器4大内核，以及基本介绍和4个别称
 * Gecko：最早由Netscape公司的Mozilla，Firefox浏览器使用
 * Trident：由微软开发，用于IE4-IE11，edge已转用Blink
 * WebKit：由苹果基于KHTML开发，开源的，用于Safari，早期Chrome也在使用
 * Blink：Webkit的一个分支，由Google开发，用于Chrome，Edge，Opera等浏览器
 * 4个别称
 * 排版引擎（layout engine），浏览器引擎（Browser engine），页面渲染引擎（rendering engine），样板引擎
 */

/**
 * 理解浏览器的渲染过程图
 */

/**
 * 为什么需要Javascript引擎呢4点
 * 1.高级语言，都是需要转成机器指令由CPU来执行的
 * 2.JavaScript不能直接交给浏览器或者Node来执行，最终也要被CPU执行的
 * 3.CPU只认识自己的指令集，也就是机器语言
 * 4.所以需要JavaScript引擎将代码翻译成CPU指令来执行
 */

/**
 * 常见的Javascript引擎，4个，并介绍
 * SpiderMonkey，最早的Javascript引擎，由Brendan Eich开发（JS作者）
 * Chakra：由微软开发，用于IE浏览器，
 * JavaScriptCore：Webkit中的JS引擎，苹果公司开发。
 * V8：Google开发，使得Chrome从众多浏览器中脱颖而出。
 */

/**
 * 浏览器内核与JS引擎的关系，以Webkei举例，2点
 * webkit实际上包含两部分
 * 1.WebCore：用于HTML解析，页面排版，渲染等工作。
 * 2.JavascriptCore：用于JS代码解析执行z
 */

/**
 * 理解V8引擎的原理图
 */

/**
 * V8执行的细节
 * 1.Blink将JS代码交给V8引擎，Stream对源码进行编码转换
 * 2.Scanner对代码进行次发分析，生成Tokens
 * 3.Parse将token生成AST抽象语法树
 * 		PreParse是预处理
 * 			1.并不是所有Javascript代码在一开始到会被执行，对所有JS代码解析，会影响网页加载速度
 * 			2.V8实现了Lazy Parsing(延迟解析）的方案，它的作用是将不必要的函数进行预解析，函数的全量解析会在函数被调用时才会进行
 * 4.生成AST后，经过ignition解释器转成字节码，之后就是JS代码的执行流程了。
 */

/**
 * V8引擎的结构
 * Parse模块会将Javascript代码转成AST抽象语法树，这是因为解释器并不直接认识Javascript代码
 * 	如果函数没有被调用，是不会转成AST的
 * Ignition是一个解释器，将AST编译成字节码（ByteCode）
 * 	同时会收集TurboFan优化所需要信息（如函数的参数类型信息，有了类型才能进行真实的运算。
 * 	如果函数只执行一次，ignition会执行解释执行bytecode
 * Turbofan是一个编译器，它将bytecode编译成CPU可以直接执行的机器码
 * 	如果一个函数被多次调用，那么会被标记为热点函数，会经过Turbofan转换成优化的机器码，提高代码的执行性能
 * 	但是，机器码实际上也会被还原为Bytecode，这是因为如果后续执行函数的过程中，函数参数类型发生了变化，之前优化的机器码并不能正确的处理运算，就会逆向的转换成字节码
 */