/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-08 18:01:40
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-04-07 20:07:38
 * @LastEditContent: 
 */

/**
 * 高级语言分为编译型语言和解释型语言
 * 	编译型：如C,C++,Java，把代码编译成可执行文件再执行。
 * 	解释型：如JavaScript，Python，边读源代码边来做解释，再执行。
 */

/**
 * 访问网站的过程：域名 -> dns解析 -> ip地址
 */

/**
 * 浏览器的4大内核，以及基本介绍和4个别称
 * 	GecKo：早期被NetScape和Mozilla FireFox浏览器使用。
 * 	Trident：微软开发，被IE4-IE11使用，edge已转向Blink
 * 	Webkit：苹果基于KHTML开发，开源的，用于Safari, Google Chrome之前也在使用
 *  Blink：是Webkit的一个分支，由Google开发，应用于Chrome，edge，opera等
 * 别称：
 * 	排版引擎（layout engine），浏览器引擎（Browser engine），页面渲染引擎（rendering engine）或样板引擎
 */

/**
 * 理解浏览器的渲染过程图
 */

/**
 * 为什么需要JavaScript引擎呢，4点
 * 	1.高级编程语言，都是需要转成机器指令来执行的。
 * 	2.编写的JavaScript语言，无法直接交给浏览器或者Node执行，最后都是需要被CPU执行的。
 * 	3.但是CPU只认识自己的指令集，实际上是机器语言，才能被CPU来执行。
 * 	4.所以我们需要JS引擎将JS翻译成CPU指令来执行。
 */

/**
 * 常见的JavaScript引擎
 * 	SpiderMonkey：第一款JavaScript引擎，由Brendan Eich开发（也是Javascript作者）
 * 	Chakra：微软开发，用于IE浏览器。
 * 	JavaScriptCore：WebKit中的Javascript引擎，Apple公司开发
 * 	V8：Google开发的强大的Javascript引擎，也帮助Chrome从众多浏览器中脱颖而出
 */

/**
 * 浏览器内核与JS引擎的关系，以Webkit举例，2点
 * 	Webkit事实上由两部分组成：
 * 		WebCore：负责HTML解析、布局、渲染等等相关工作
 * 		JavaScriptCore：负责解析执行JavaScript代码
 */

/**
 * 理解V8引擎的原理图
 */

/**
 * V8执行的细节4点：
 * 1.Blink将源码交给V8引擎，Stream获取到源码并进行编码转换
 * 2.Scanner会进行词法分析（lexical analysis），词法分析会将代码转换成tokens
 * 3.经过Parser和PreParser，tokens会转换成AST树结构
 * 		- Parser就是直接将tokens转成AST树结构
 * 		- PreParser称之为预解析，为什么需要预解析
 * 				1.因为并非所有JS代码，在一开始就会执行，对所有JS代码解析，必然会影响网页的运行速度。
 * 				2.V8引擎实现了Lazy Parsing（延迟解析）的方案，它的作用是将不必要的函数进行预解析，而对函数的全量解析是在函数被调用时才会进行
 * 4.生成的AST树，会被ignition转成字节码（bytecode），之后的过程就是代码的执行过程
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